import { stripe } from '@/lib/Payment/stripe';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
const body = await req.json();

const paymentIntent = await stripe.paymentIntents.create({
    amount: body.amount,
    currency: 'usd',
    automatic_payment_methods: { enabled: true },
});

return NextResponse.json({ clientSecret: paymentIntent.client_secret });
}
