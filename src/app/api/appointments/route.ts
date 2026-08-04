import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const appointment = {
      id: `APT-${Date.now()}`,
      ...body,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    };
    // TODO: Save to database, send confirmation SMS/WhatsApp
    return NextResponse.json({ success: true, appointment });
  } catch {
    return NextResponse.json({ error: 'Failed to book appointment' }, { status: 500 });
  }
}

export async function GET() {
  // Return available time slots (mock)
  const slots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM',
  ];
  return NextResponse.json({ availableSlots: slots });
}
