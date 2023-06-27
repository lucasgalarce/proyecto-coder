import React from "react";
import ProductCard from "./ProductCard";
import Row from "react-bootstrap/Row";

const ItemListContainer = ({ productsData }) => {
  return (
    <div className="container">
      <Row>
        {productsData.map((product, index) => (
          <React.Fragment key={product.id}>
            <ProductCard productData={product} />
            {(index + 1) % 4 === 0 && <div className="w-100" style={{ marginBottom: "16px" }} />}
          </React.Fragment>
        ))}
      </Row>
    </div>
  );
};

export default ItemListContainer;
