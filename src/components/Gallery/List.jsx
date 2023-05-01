import { Container, Row, Col } from "react-bootstrap";
import picdata from "../../data/gallery.json";
import Panel from "./Panel.jsx";

export default function List() {
    return(
        <section>
            <Container id="gallery">
                <Row>
                    <Col><h2 className="text-center">My Collection of Quotes</h2></Col>
                </Row>
                <Row className="justify-content-center">
            {
                picdata.map(
                    (element) => (
                        element
                        ? <Panel picdata={element}/>
                        : <p>Loading...</p>
                        )
                        )
                    }
                    </Row>
            </Container>

        </section>
    )
}