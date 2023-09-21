import Stripe from 'stripe';

export default class PaymentsService {
  constructor() {
    this.stripe = new Stripe(
      "secret"
    );
  }

  async createPaymentIntent(paymentIntentInfo) {
    const paymentIntent = await this.stripe.paymentIntents.create(paymentIntentInfo);

    return paymentIntent;
  }
}