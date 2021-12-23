import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
    return(
    <footer
    style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        marginTop: "auto"
    }}
    >
        <Container>
            <Row>
                <Col className="text-center py-3">Copyright &copy; Egle Juskenaite</Col>
            </Row>
        </Container>
    </footer>
    )}

export default Footer

