import { creatorsArea } from "@/data/creatorsArea";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleCreator from "./SingleCreator";
import Link from "../Reuseable/Link";


const { creators } = creatorsArea;

const ExploreArea = () => {
    return (
        <section className="explore-area pt-90 pb-120">
            <Container>
                <Row className="justify-content-center">
                    {creators.map((creator) => (
                        // <Link href={'/creators/' + creator.id}>
                            <Col lg={4} md={6} sm={7} key={creator.id}>
                                <SingleCreator creator={creator} />
                            </Col>
                        // </Link>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default ExploreArea;
