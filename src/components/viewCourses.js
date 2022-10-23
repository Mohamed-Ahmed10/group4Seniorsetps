import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import courseImage from "../images/image_four.jpg";
export class ViewCourses extends Component {
    state = {
        courses: [
            {
                name: "HTML",
                description: "Hyper text markup language",
                order: 1,
                link: "1.html",
                image: courseImage,
            },
            {
                name: "CSS",
                description: "Cascading style sheet",
                order: 2,
                link: "2.html",
                image: courseImage,
            },
            {
                name: "JS",
                description: "Programming language",
                order: 3,
                link: "3.html",
                image: courseImage,
            },
            {
                name: "React",
                description: "Js library",
                order: 4,
                link: "4.html",
                image: courseImage,
            },
        ],
    };
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        {this.state.courses.map((course) => (
                            <Col key={course.order} md={3} className="p-4">
                                <Card>
                                    <Card.Img
                                        variant="top"
                                        src={course.image}
                                    />
                                    <Card.Body>
                                        <Card.Title>{course.name}</Card.Title>
                                        <Card.Text>
                                            {course.description}
                                        </Card.Text>
                                        <a
                                            href={course.link}
                                            className="btn btn-primary"
                                        >
                                            Go
                                        </a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ViewCourses;
