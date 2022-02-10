import React, { createContext } from "react";
import Product from "./Product";
import products from "../products.json";
import styled from "styled-components";

export const ProductContext = createContext();

function ListProducts() {
  return (
    <ProductsWrapper>
      {products.map((product, index) => (
        <ProductContext.Provider value={product} key={index}>
          <Product></Product>
        </ProductContext.Provider>
      ))}
    </ProductsWrapper>
  );
}

export default ListProducts;

const ProductsWrapper = styled.div`
  text-align: center;
  display: flex;
`;
/* --- css du composant de la liste des produits -----


--- css du composant Home -----
const WelcomeWrapper = styled.div `
 text-align: center; 
 display: flex; 
`;

---- css du composant App -----------
const AppFrame = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;
------- css du composant NavBar ---------------
const HeaderFrame = styled.div`
  min-height: 50px;
  min-width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  & > ul {
    list-style: none;
    display: flex;
    & > li:not(:nth-child(1)) {
      margin-left: 10px;
    }
  }
`;*/
