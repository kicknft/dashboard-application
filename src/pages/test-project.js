import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import ProjectDetailsArea from "@/components/ProjectsArea/ProjectDetails/ProjectDetailsArea";
import ProjectDetailsContent from "@/components/ProjectsArea/ProjectDetails/ProjectDetailsContent";
import SimilarProjects from "@/components/ProjectsArea/SimilarProjects";
import PageTitle from "@/components/Reuseable/PageTitle";
import React from "react";

import { projectDetailsArea } from "@/data/projectContent1";
import { Col, Container, Image, Row } from "react-bootstrap";

const {
    thumb,
    flag,
    tagline,
    country,
    title,
    pledged,
    backers,
    daysLeft,
    raised,
    goal,
    socials,
} = projectDetailsArea;

import { projectDetailsTabBtns } from "@/data/projectsArea";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectDetailsComments from "./ProjectDetailsComments";
import ProjectDetailsFaq from "./ProjectDetailsFaq";
import ProjectDetailsSidebar from "./ProjectDetailsSidebar";
import ProjectDetailsStory from "./ProjectDetailsStory";
import ProjectDetailsUpdates from "./ProjectDetailsUpdates";

// const ProjectDetailsContent = () => {
//     const [current, setCurrent] = useState("pills-home");

//     const getClassName = (id = "") => {
//         const active = current === id;
//         return `tab-pane animated${active ? " fadeIn show active" : ""}`;
//     };



const SingleProject = () => {
    const [current, setCurrent] = useState("pills-home");

    const getClassName = (id = "") => {
        const active = current === id;
        return `tab-pane animated${active ? " fadeIn show active" : ""}`;
    };

    return (
        <Layout>
            <Header />
            <PageTitle title="New Project" page="Explore" />

            {/* project details header area */}
            <section className="project-details-area pt-120 pb-190">
                <Container>
                    <Row>
                        <Col lg={7}>
                            <div className="project-details-thumb">
                                <Image src={thumb.src} alt="" />
                                <div className="icon">
                                    <i className="fa fa-heart"></i>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="project-details-content">
                                <div className="details-btn">
                                    <span>{tagline}</span>
                                    <div className="flag">
                                        <Image src={flag.src} alt="" />
                                        <p>{country}</p>
                                    </div>
                                </div>
                                <h3 className="title">{title}</h3>
                                <div className="project-details-item">
                                    <div className="item text-center">
                                        <h5 className="title">${pledged}</h5>
                                        <span>Pledged</span>
                                    </div>
                                    <div className="item text-center">
                                        <h5 className="title">{backers}</h5>
                                        <span>Backers</span>
                                    </div>
                                    <div className="item text-center">
                                        <h5 className="title">{daysLeft}</h5>
                                        <span>Days Left</span>
                                    </div>
                                </div>
                                <div className="projects-range">
                                    <div className="projects-range-content">
                                        <ul>
                                            <li>Raised:</li>
                                            <li>{raised}%</li>
                                        </ul>
                                        <div className="range"></div>
                                    </div>
                                </div>
                                <div className="projects-goal">
                                    <span>
                                        Goal: <span>{goal} USD</span>
                                    </span>
                                </div>
                                <div className="project-btn mt-25">
                                    <a className="main-btn" href="#">
                                        Back this project
                                    </a>
                                </div>
                                <div className="project-share d-flex align-items-center">
                                    <span>Share this Project</span>
                                    <ul>
                                        {socials.map(({ id, icon, href }) => (
                                            <li key={id}>
                                                <a href={href}>
                                                    <i className={icon}></i>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            {/* <ProjectDetailsArea /> */}
            {/* <ProjectDetailsContent /> */}

            <section className="project-details-content-area pb-110">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="tab-btns">
                                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                    {projectDetailsTabBtns.map(({ id, name }) => (
                                        <li key={id} className="nav-item" role="presentation">
                                            <a
                                                onClick={() => setCurrent(id)}
                                                className={`nav-link cursor-pointer${id === current ? " active" : ""
                                                    }`}
                                                role="tab"
                                            >
                                                {name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="tab-content" id="pills-tabContent">
                                <ProjectDetailsStory getClassName={getClassName} />
                                <ProjectDetailsFaq getClassName={getClassName} />
                                <ProjectDetailsUpdates getClassName={getClassName} />
                                <ProjectDetailsComments getClassName={getClassName} />
                            </div>
                        </Col>
                        <Col lg={4} md={7} sm={9}>
                            <ProjectDetailsSidebar />
                        </Col>
                    </Row>
                </Container>
            </section>

            <SimilarProjects />
        </Layout>
    );
};

export default SingleProject;
