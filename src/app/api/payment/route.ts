import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // TODO: Integrate Razorpay SDK
    const paymentOrder = {
      id: `PAY-${Date.now()}`,
      razorpayOrderId: `order_mock_${Date.now()}`,
      amount: body.amount,
      currency: 'INR',
      status: 'created',
    };
    return NextResponse.json({ success: true, paymentOrder });
  } catch {
    return NextResponse.json({ error: 'Failed to create payment' }, { status: 500 });
  }
}
