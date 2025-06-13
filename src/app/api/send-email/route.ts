import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, program, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }


    const transporter = nodemailer.createTransport({
      host: 'smtppro.zoho.com',
      port: 465,
      secure: true, 
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASSWORD,
      },

      pool: true,
      maxConnections: 1, 
      rateDelta: 20000, 
      rateLimit: 3,
    })

    const schoolEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af; text-align: center;">🎵 New Contact Form Submission! 🎵</h2>
        
        <div style="background: linear-gradient(135deg, #fef3c7 0%, #fcd34d 100%); padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3 style="color: #92400e; margin: 0;">Student Information:</h3>
        </div>
        
        <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 10px 0;">
          <p style="margin: 5px 0;"><strong>👤 Name:</strong> ${name}</p>
          <p style="margin: 5px 0;"><strong>📧 Email:</strong> ${email}</p>
          <p style="margin: 5px 0;"><strong>📱 Phone:</strong> ${phone || 'Not provided'}</p>
          <p style="margin: 5px 0;"><strong>🎭 Program Interest:</strong> ${program || 'Not specified'}</p>
        </div>
        
        <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin: 10px 0;">
          <h4 style="color: #0277bd; margin: 10px 0;">💭 Message:</h4>
          <p style="line-height: 1.6; color: #333;">${message}</p>
        </div>
        
        <div style="text-align: center; margin-top: 20px; padding: 15px; background: #f0fdf4; border-radius: 8px;">
          <p style="margin: 0; color: #166534;">🌟 Don't forget to follow up within 24 hours! 🌟</p>
        </div>
      </div>
    `

    const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); border-radius: 10px;">
          <h1 style="color: #1e3a8a; margin: 0;">🎵 Kitty Town Music & Arts School 🎵</h1>
          <p style="color: #1e40af; font-size: 18px; margin: 10px 0;">Thank you for reaching out!</p>
        </div>
        
        <div style="padding: 20px;">
          <h2 style="color: #059669;">Hello ${name}! 👋</h2>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151;">
            🎉 <strong>Thank you for wanting to join our farm family!</strong> We're so excited to hear from you!
          </p>
          
          <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
            <p style="margin: 0; color: #065f46;">
              <strong>What happens next?</strong><br>
              🚜 Our team will review your message<br>
              📞 We'll contact you within 24-48 hours<br>
              🏠 We might schedule a farm tour for you!
            </p>
          </div>
          
          <div style="background: #eff6ff; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h3 style="color: #1d4ed8; margin: 10px 0;">📋 Your submission details:</h3>
            <p style="margin: 5px 0; color: #374151;"><strong>Interest:</strong> ${program || 'General inquiry'}</p>
            <p style="margin: 5px 0; color: #374151;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          </div>
          
          <div style="text-align: center; margin: 20px 0;">
            <p style="color: #6b7280;">Questions? Call us at:</p>
            <p style="font-size: 18px; font-weight: bold; color: #1e40af;">📱 +256779227192</p>
            <p style="color: #6b7280;">Email: info@musiconthefarm.com</p>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 15px; background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%); border-radius: 8px;">
            <p style="margin: 0; color: white; font-weight: bold;">
              🌟 Can't wait to see you grow your musical talents with us! 🌱🎵
            </p>
          </div>
        </div>
        
        <div style="text-align: center; padding: 15px; color: #6b7280; font-size: 14px;">
          <p>Kitty Town Music & Arts School<br>
          Kitukutwe, Wakiso District, Uganda<br>
          📍 Just 20km from Kampala!</p>
        </div>
      </div>
    `


    const schoolEmailResult = await transporter.sendMail({
      from: `"Kitty Town Music School" <${process.env.EMAIL_FROM}>`,
      to: 'info@musiconthefarm.com',
      subject: `🎵 New Student Inquiry from ${name} - ${program || 'General'}`,
      html: schoolEmailHtml,
      replyTo: email,
    })


    const userEmailResult = await transporter.sendMail({
      from: `"Kitty Town Music & Arts School" <${process.env.EMAIL_FROM}>`, 
      to: email,
      subject: '🎉 Welcome to Kitty Town Music & Arts School Family!',
      html: userEmailHtml,
    })

    console.log('School email sent:', schoolEmailResult.messageId)
    console.log('User email sent:', userEmailResult.messageId)

    return NextResponse.json({ 
      success: true, 
      message: 'Emails sent successfully!' 
    })

  } catch (error) {
    console.error('Error sending email:', error)
    
    if (error instanceof Error) {
      if (error.message.includes('Invalid login') || error.message.includes('Authentication failed')) {
        return NextResponse.json(
          { error: 'Email authentication failed. Please contact support.' },
          { status: 500 }
        )
      }
      
      if (error.message.includes('ECONNREFUSED') || error.message.includes('ETIMEDOUT')) {
        return NextResponse.json(
          { error: 'Unable to connect to email server. Please try again later.' },
          { status: 500 }
        )
      }

      if (error.message.includes('rate limit') || error.message.includes('too many')) {
        return NextResponse.json(
          { error: 'Too many emails sent. Please wait a moment and try again.' },
          { status: 429 }
        )
      }

      if (error.message.includes('Invalid mail') || error.message.includes('recipient')) {
        return NextResponse.json(
          { error: 'Invalid email address format. Please check and try again.' },
          { status: 400 }
        )
      }
    }
    

    return NextResponse.json(
      { error: 'Failed to send email. Please try again or contact us directly at +256779227192.' },
      { status: 500 }
    )
  }
}