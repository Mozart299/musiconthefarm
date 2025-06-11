import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function GET() {
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Verify connection
    const verified = await transporter.verify()
    
    if (verified) {
      // Send test email
      const info = await transporter.sendMail({
        from: `"Test" <${process.env.EMAIL_FROM}>`,
        to: process.env.EMAIL_FROM, // Send to yourself
        subject: 'Test Email from Nodemailer',
        text: 'If you receive this, your email configuration is working!',
        html: '<p>If you receive this, your email configuration is working! ✅</p>',
      })

      return NextResponse.json({
        success: true,
        message: 'Email sent successfully!',
        messageId: info.messageId
      })
    }

  } catch (error) {
    console.error('Email test failed:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}