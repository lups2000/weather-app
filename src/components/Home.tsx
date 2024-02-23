import { Container, Row, Col, Card } from "react-bootstrap";
import { LocationSelection } from "./Location/LocationSelection";
import { useNavigate } from "react-router-dom";

export function Home() {

  const navigate = useNavigate();

  const handleChangeInput = (value: string) => {
    navigate(`/location/${value}`);
  };

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
                <LocationSelection title="country" onChangeInput={handleChangeInput}/>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
