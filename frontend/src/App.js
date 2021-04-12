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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider mode="checkout-session" currency="INR">
        <BrowserRouter>
          <Navbar />
          <Toaster position="bottom-center" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/cart" component={Cart} />
            <Route path="/auth" component={Auth} />
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
