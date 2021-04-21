import { validateCartItems } from "use-shopping-cart/src/serverUtil.js";
import stripe from "stripe";
const checkoutOrder = async (req, res) => {
  try {
    const cartItems = req.body;
    console.log(cartItems);

    const line_items = validateCartItems(menus, cartItems);
    console.log(cartItems);

    const origin =
      process.env.NODE_ENV === "production"
        ? req.headers.origin
        : "http://localhost:3000";

    const params = {
      submit_type: "pay",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["IN"],
      },
      line_items,
      success_url: `${origin}/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: origin,
      mode: "payment",
    };

    const checkoutSession = await stripe.checkout.SessionsResource.create(
      params
    );
    res.status(200).json(checkoutSession);
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message });
  }
};

export { checkoutOrder };
