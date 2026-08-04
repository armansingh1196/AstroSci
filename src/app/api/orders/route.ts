import { NextRequest, NextResponse } from 'next/server';

// Mock order store (replace with DB)
const orders: Record<string, unknown>[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const order = {
      id: `ORD-${Date.now()}`,
      ...body,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    orders.push(order);
    return NextResponse.json({ success: true, order });
  } catch {
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ orders });
}
