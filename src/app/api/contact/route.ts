import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    // TODO: Save to database, send email notification
    console.log('Contact form submission:', { name, email, phone, message });

    return NextResponse.json({ success: true, message: 'Message received. We will get back to you within 24 hours.' });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
