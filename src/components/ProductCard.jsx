import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";

const ProductCard = ({ productData }) => {
  return (
    <Col key={productData.id} md={3}>
      <Card className="h-100" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={productData.images[0]}
          style={{ objectFit: "cover", height: "250px" }}
        />
        <Card.Body>
          <Card.Title>{productData.title}</Card.Title>
          <Card.Text>{productData.description}</Card.Text>
          <Link to={`/item/${productData.id}`}>Ir a detalle</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
