import { Router } from "express";
import PaymentsService from "./payments.service.js";

const paymentsRouter = Router();
const paymentsService = new PaymentsService();
const products = [
  { id: 1, name: "papas", price: 1000 },
  { id: 2, name: "queso", price: 500 },
  { id: 3, name: "hamburguesa", price: 1500 },
  { id: 4, name: "soda", price: 1000 },
  { id: 5, name: "golosinas", price: 800 },
];

paymentsRouter.post("/payment-intents", async (req, res) => {
  const product = products.find((product) => product.id === parseInt(req.query.id));
  console.log(product)
  if (!product) {
    console.log("Product not found");
    res.status(404).json({ message: "Product not found" });
  }

  const paymentIntentInfo = {
    amount: product.price * 12,
    currency: "usd",
    metadata:{
      userId: "sudifhoiqeug83q74ghfp9347gypqowegh",
      orderDetails: JSON.stringify({
        [product.name]: 12,
      }, null, '\t'),
      address: "Calle 123",
    }
  };

  try {
    const result = await paymentsService.createPaymentIntent(paymentIntentInfo);

    console.log(result);

    res.status(200).json({ payload: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default paymentsRouter;