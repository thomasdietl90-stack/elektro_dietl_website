
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, E-Mail und Nachricht sind erforderlich' },
        { status: 400 }
      )
    }

    // Save to database
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        phone: phone || '',
        message
      }
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Ihre Nachricht wurde erfolgreich gesendet',
        id: submission.id 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error saving contact form:', error)
    return NextResponse.json(
      { error: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    )
  }
}
