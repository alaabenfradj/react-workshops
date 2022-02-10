import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ListProducts from "./components/ListProducts";
import Home from "./components/Home";
function App() {
  return (
    <AppFrame>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route exact path="product" element={<ListProducts />}></Route>
            <Route
              exact
              path="product/:id"
              element={<ProductDetails />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppFrame>
  );
}
const AppFrame = styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
`;
export default App;
