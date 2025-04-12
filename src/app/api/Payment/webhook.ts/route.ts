import { stripe } from '@/lib/Payment/stripe';
import { buffer } from 'micro';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export const config = {
  api: { bodyParser: false },
};

// 👇 Middleware-style POST handler
export async function POST(req: Request) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rawBody = await buffer(req.body as any);
  const sig = (await headers()).get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig!, webhookSecret);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error(' Webhook Error:', err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Handle event
  switch (event.type) {
    case 'payment_intent.succeeded': {
      const paymentIntent = event.data.object;
      console.log(' Payment succeeded!', paymentIntent);
      break;
    }
    case 'payment_intent.payment_failed':
      console.log(' Payment failed');
      break;
    default:
      console.log(` Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
