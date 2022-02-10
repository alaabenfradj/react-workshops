import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductContext } from "./ListProducts";
function Product() {
  const prod = useContext(ProductContext);
  const [product, setProduct] = useState(prod);
  const addLikes = () => {
    setProduct((oldProduct) => ({ ...oldProduct, likes: product.likes + 1 }));
  };

  return product.likes >= 5 ? (
    <ProductFrameBest>
      <ProductImageWrapperBest>
        <ProductImageBest src={product.img}></ProductImageBest>
      </ProductImageWrapperBest>
      <ProductInfoWrapperBest>{product.name}</ProductInfoWrapperBest>
      <ProductInfoWrapperBest>{product.price}</ProductInfoWrapperBest>
      <Button onClick={addLikes}>Like</Button>
      <Link to={product.name}>view Details</Link>
      <ProductInfoWrapperBest>{product.likes}</ProductInfoWrapperBest>
    </ProductFrameBest>
  ) : (
    <ProductFrame>
      <ProductImageWrapper>
        <ProductImage src={product.img}></ProductImage>
      </ProductImageWrapper>
      <ProductInfoWrapper>{product.name}</ProductInfoWrapper>
      <ProductInfoWrapper>{product.price}</ProductInfoWrapper>
      <Button onClick={addLikes}>Like</Button>
      <Link to={`${product.id}`}>view Details</Link>
      <ProductInfoWrapper>{product.likes}</ProductInfoWrapper>
    </ProductFrame>
  );
}

export default Product;

// ------------css du composant Product --------
const ProductFrame = styled.div`
  border-radius: 25px;
  min-height: 200px;
  min-width: 200px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
const ProductImageWrapper = styled.div`
  margin: 5px;
  max-width: 200px;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const ProductInfoWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center;
  }
`;
const ProductFrameBest = styled.div`
  border-radius: 25px;
  min-height: 200px;
  min-width: 200px;
  background-color: #db7093;
  margin: 10px;
  display: flex;
  flex-direction: column;
  animation: clignote 2s linear infinite;
  @keyframes clignote {
    50% {
      opacity: 0.5;
    }
  }
`;
const ProductImageWrapperBest = styled.div`
  margin: 5px;
  max-width: 200px;
`;
const ProductImageBest = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const ProductInfoWrapperBest = styled.div`
  color: white;
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center;
  }
`;
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
