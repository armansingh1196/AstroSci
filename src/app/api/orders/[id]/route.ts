import { NextRequest, NextResponse } from 'next/server';

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // TODO: Fetch from database
  return NextResponse.json({
    id,
    status: 'in-progress',
    message: `Order ${id} is currently being prepared.`,
  });
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await request.json();
  // TODO: Update in database
  return NextResponse.json({
    id,
    status: body.status,
    message: `Order ${id} updated to ${body.status}.`,
  });
}
