
import { Col, Card, Image } from "react-bootstrap";

export default function Panel({picdata: {id, image, author, quote }}) {
    return(
        <Col key={id} sm={10} md={6} lg={4}>
            <Card className="p-3" > 
                <figure>
                <Image src={image} fluid />
                </figure>
            <div className="content">
            <h3>{author}</h3>
            <p>{quote}</p>
            </div>
            </Card>
        </Col>
    )
}