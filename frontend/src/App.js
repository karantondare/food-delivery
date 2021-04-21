import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { CartProvider } from "use-shopping-cart";
import { Toaster } from "react-hot-toast";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import Menu from "./pages/Menu";
import UserProfile from "./pages/UserProfile";
import UserOrders from "./pages/UserOrders";
import Checkout from "./pages/Checkout";
import { loadStripe } from "@stripe/stripe-js";

const queryClient = new QueryClient();

const stripePromise = loadStripe(
  "pk_test_51IQ8QtKpG66ezzfCTp4moljMCaKezPXhOkPt2h0T9NHInoUPm3CAMBZdCS2Phh6xBwNbuvOnPiEXKttOHFwSNcsR00T2AbYYdb"
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider
        mode="checkout-session"
        stripe={stripePromise}
        currency="INR"
      >
        <BrowserRouter>
          <Navbar />
          <Toaster position="bottom-center" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/profile" component={UserProfile} />
            <Route exact path="/orders" component={UserOrders} />
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
