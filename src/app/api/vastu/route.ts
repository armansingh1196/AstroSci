import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const vastuRequest = {
      id: `VST-${Date.now()}`,
      ...body,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    // TODO: Save to database, handle file uploads
    return NextResponse.json({ success: true, vastuRequest });
  } catch {
    return NextResponse.json({ error: 'Failed to submit Vastu request' }, { status: 500 });
  }
}
