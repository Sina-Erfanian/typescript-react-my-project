import React from "react";
import storeItems from "../data/items.json";
import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem";
export default function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row className="g-3" md={2} xs={1} lg={3}>
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
