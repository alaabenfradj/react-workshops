import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import products from "../products.json";

function ProductDetails() {
  const params = useParams();
  const product = products.filter((p) => {
    return p.id == params.id;
  });
  return (
    <>
      <Container>
        <ContentBox>
          <Content1>
            <ProductImageWrapper>
              <ProductImage src={product[0].img}></ProductImage>
            </ProductImageWrapper>
            <H3>
              <Span>Price : </Span>
              {product[0].price}
              <Span> $</Span>
            </H3>
          </Content1>
          <Content2>
            <H1>{product[0].name}</H1>
            <H3>{product[0].description}</H3>
          </Content2>
        </ContentBox>
        <Footer>
          <Link to="/"> home </Link>
        </Footer>
      </Container>
    </>
  );
}

export default ProductDetails;

// ---------------- css du composant ProductDetails ---------
const ProductImageWrapper = styled.div`
  margin: 5px;
  max-width: 200px;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 0.5fr 0.5fr;
  grid-template-areas:
    "content content"
    "footer footer";
  text-align: left;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1.2fr 1fr;
    grid-template-areas:
      "content"
      "footer";
  }
  color: black;
`;
const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const Content1 = styled.div`
  background: transparent !important;
  padding: 0.25rem;
  width: 40%;
  height: 100%;
`;
const Content2 = styled.div`
  background: transparent !important;
  padding: 0.25rem;
  width: 60%;
  height: 100%;
`;
const Footer = styled.footer`
  background: transparent;
  grid-area: footer;
  padding: 0.25rem;
  text-align: right !important;
`;

const H1 = styled.h1`
  font-size: 3.5em;
  font-weight: bold;
`;

const H3 = styled.h3`
  color: palevioletred;
  font-size: 1.25em;
  font-weight: bold;
`;
const Span = styled.span`
  color: grey;
  font-size: 1.25em;
`;
