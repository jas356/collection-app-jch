import { HashLink } from "react-router-hash-link";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Main() {
    return(
        <main>
            <Container>
                <Row>
                    <Col><h1>Gallery</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ducimus temporibus aut omnis aliquam quis, quo, sit nisi, iste vel eveniet ratione delectus unde consequuntur libero numquam placeat praesentium quisquam? </p>
                    <HashLink to="/#gallery"><Button>See Gallery</Button></HashLink>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}