import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, type, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Send email using a service like SendGrid, Resend, or Nodemailer
    // 2. Save to database
    // 3. Send notifications

    // For now, we'll just log the data and return success
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      company,
      type,
      message,
      timestamp: new Date().toISOString()
    })

    // You can integrate with email services here
    // Example with EmailJS or SendGrid:
    // await sendEmail({
    //   to: 'info@freshstation.id',
    //   subject: `New inquiry from ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Company:</strong> ${company}</p>
    //     <p><strong>Type:</strong> ${type}</p>
    //     <p><strong>Message:</strong> ${message}</p>
    //   `
    // })

    return NextResponse.json(
      { message: 'Thank you for your inquiry! We will get back to you soon.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
