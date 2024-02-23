import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  FormControl,
} from "react-bootstrap";

export function Home() {
  const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <Container style={{ marginTop: 200 }}>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title className="mb-4">Weather AI App</Card.Title>
              <Card.Subtitle className="mb-4 text-muted">
                Powered by OpenAI, Bootstrap, and more!
              </Card.Subtitle>
              <hr />
              <div style={{ padding: 10 }}>
                <h5>Country</h5>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Select a country"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                  />
                </InputGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
