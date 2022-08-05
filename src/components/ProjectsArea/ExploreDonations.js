import { donationsArea } from "@/data/donationsArea";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleDonation from "./SingleDonation";
import Link from "../Reuseable/Link";


const { donations } = donationsArea;

const ExploreArea = () => {
    return (
        <section className="explore-area pt-90 pb-120">
            <Container>
                <Row className="justify-content-center">
                    {donations.map((donation) => (
                        // <Link href={'/donations/' + donation.id}>
                            <Col lg={4} md={6} sm={7} key={donation.id}>
                                <SingleDonation donation={donation} />
                            </Col>
                        // </Link>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default ExploreArea;
