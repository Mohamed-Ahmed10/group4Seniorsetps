import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const BootstrapTest2 = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="text-center">1 of 2</Col>
                    <Col className="text-center">1 of 2</Col>
                </Row>
            </Container>
        </div>
    );
};

export default BootstrapTest2;
