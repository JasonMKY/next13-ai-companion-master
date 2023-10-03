import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";

const settingsUrl = absoluteUrl("/settings");

export async function GET() {
  try {
    const { userId } = auth();
    const user = await currentUser();

    if (!userId || !user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const userSubscription = await prismadb.userSubscription.findUnique({
      where: {
        userId
      }
    });

    if (userSubscription && userSubscription.stripeCustomerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubscription.stripeCustomerId,
        return_url: settingsUrl,
      });

      return new NextResponse(JSON.stringify({ url: stripeSession.url }));
    }

    let customer_email = null;
    if (user.emailAddresses && user.emailAddresses.length > 0 && user.emailAddresses[0].emailAddress) {
      // Check if user.emailAddresses is defined and contains at least one email address, and emailAddress is defined
      customer_email = user.emailAddresses[0].emailAddress;
    } else {
      console.error("User email address is not available.");
      return new NextResponse("User email address is not available", { status: 400 });
    }

    const stripeSession = await stripe.checkout.sessions.create({
      success_url: settingsUrl,
      cancel_url: settingsUrl,
      payment_method_types: ["card"],
      mode: "subscription",
      billing_address_collection: "auto",
      customer_email: customer_email,
      line_items: [
        {
          price_data: {
            currency: "USD",
            product_data: {
              name: "RoleplayPal Pro",
              description: "Create Custom AI RoleplayPals"
            },
            unit_amount: 999,
            recurring: {
              interval: "month"
            }
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId
      },
    });

    return new NextResponse(JSON.stringify({ url: stripeSession.url }));
  } catch (error) {
    console.error("[STRIPE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}