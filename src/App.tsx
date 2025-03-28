import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router";

export function App() {
  const [stripeKey, setStripeKey] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}
