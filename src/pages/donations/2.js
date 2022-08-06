import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";

import PageTitle from "@/components/Reuseable/PageTitle";
import React, { useState } from "react";

import { donationDetailsArea } from "@/data/donationContent2";
import { Col, Container, Image, Row } from "react-bootstrap";

import { donationDetailsTabBtns } from "@/data/donationContent2";

// import ProjectDetailsComments from "@/components/ProjectsArea/ProjectDetails/ProjectDetailsComments";
import CommentForm from "@/components/NewsArea/BlogDetails/CommentForm";
import CommentOne from "@/components/NewsArea/BlogDetails/CommentOne";
import { donationDetailsComments } from "@/data/donationContent2";

const { idc, comments } = donationDetailsComments;

// import ProjectDetailsFaq from "@/components/ProjectsArea/ProjectDetails/ProjectDetailsFaq";
import { donationDetailsFaq } from "@/data/donationContent2";
import Faqs from "@/components/FaqArea/Faqs";


// import ProjectDetailsSidebar from "@/components/ProjectsArea/ProjectDetails/ProjectDetailsSidebar";
import { donationDetailsSidebar } from "@/data/donationContent2";
const { info, perks } = donationDetailsSidebar;

// import ProjectDetailsStory from "@/components/ProjectsArea/ProjectDetails/ProjectDetailsStory";
import { donationDetailsStory } from "@/data/donationContent2";
const { ids, text, lists, text2, items, text3, image, images } =
    donationDetailsStory;

import ProjectDetailsUpdates from "@/components/ProjectsArea/ProjectDetails/ProjectDetailsUpdates";

import { ethers } from "ethers";
import contractAbi from '../../utils/contractABI.json'
const CONTRACT_ADDRESS = '0xA2001555Ff78EF54cFB754c31661fe798902F327';
const uri = "ipfs://bafkreigr3azmskokskqutkh6fjmdqarkm346kivoasnqoaiyzpq6yhoyii"

const {
    thumb,
    tagline,
    country,
    title,
    pledged,
    backers,
    daysLeft,
    raised,
    goal,
    socials,
} = donationDetailsArea;


const { faqs, id } = donationDetailsFaq;




const ProjectDetailsPark = ({ perk = {} }) => {
    const { id, image, sold, off, amount, claimed, totalClaimed } = perk;

    return (
        <div
            className={`project-details-park mt-30 box${id === 2 ? " item-2" : ""}`}
        >
            <h4 className="title">Select a Perk</h4>
            {image && <Image src={image.src} alt="" />}
            <span>Donator ({sold} sold already)</span>
            <p>
                ${amount} ({off}% OFF)
            </p>
            <ul>
                <li>
                    {claimed} out of {totalClaimed} <span>claimed</span>
                </li>
            </ul>
            <a className="main-btn" href="#">
                Continue now
            </a>
        </div>
    );
};


// const ProjectDetailsFaq = ({ getClassName }) => {
//     return (
//         <div className={getClassName(id)} id={id} role="tabpanel">
//             <Faqs faqs={faqs} className="mt-70" />
//         </div>
//     );
// };

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

    const mint = async () => {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi, signer);

                console.log("Going to pop wallet now to pay gas...")

                let tx = await contract.safeMint(uri, { value: ethers.utils.parseEther('0.1') });
                // Wait for the transaction to be mined
                const receipt = await tx.wait();

                // Check if the transaction was successfully completed
                if (receipt.status === 1) {
                    console.log(" minted! https://mumbai.polygonscan.com/tx/" + tx.hash);

                } else {
                    alert("Transaction failed! Please try again");
                }
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Layout>
            <Header />
            <PageTitle title=" Donations" page="Explore" />

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
                                        {/* <Image src={flag.src} alt="" /> */}
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
                                    <button className="main-btn" onClick={mint}>
                                        Back this project
                                    </button>
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
                                    {donationDetailsTabBtns.map(({ id, name }) => (
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
                                {/* <ProjectDetailsStory getClassName={getClassName} /> */}
                                <div className={getClassName?.(ids)} id={ids} role="tabpanel">
                                    <div className="project-details-content-top">
                                        <p>{text}</p>
                                        <ul>
                                            {lists.map((list, i) => (
                                                <li key={i}>
                                                    <i className="flaticon-check"></i> {list}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="project-details-thumb">
                                            <Image src={image.src} alt="" />
                                        </div>
                                    </div>
                                    <div className="project-details-item">
                                        <p>{text2}</p>
                                        {/* {items.map(({ ids, title, text, className = "" }) => (
                                            <div className={`item ${className}`} key={id}>
                                                <i className="flaticon-checkmark"></i>
                                                <h5 className="title">{title}</h5>
                                                <p>{text}</p>
                                            </div>
                                        ))} */}
                                        <Row>
                                            <div className="project-details-thumb">
                                                <Image src={images.src} alt="" />
                                            </div>
                                            {/* {images.map((image, i) => (
                                                <Col lg={6} md={6} sm={6} key={i}>
                                                    
                                                </Col>
                                            ))} */}
                                        </Row>
                                        <p className="text">{text3}</p>
                                    </div>
                                </div>

                                <div className={getClassName(id)} id={id} role="tabpanel">
                                    <Faqs faqs={faqs} className="mt-70" />
                                </div>

                                {/* <ProjectDetailsFaq getClassName={getClassName} /> */}
                                <ProjectDetailsUpdates getClassName={getClassName} />

                                {/* <ProjectDetailsComments getClassName={getClassName} /> */}
                                <div className={getClassName(idc)} id="pills-4" role="tabpanel">
                                    <CommentOne comments={comments} className="mt-50" />
                                    <CommentForm />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={7} sm={9}>
                            {/* <ProjectDetailsSidebar /> */}
                            <div className="project-details-sidebar">
                                <div className="project-details-info mt-70 box">
                                    <div className="info">
                                        <Image src={info.image.src} alt="" />
                                        <h5 className="title">{info.name}</h5>
                                        <span>{info.backed} backed</span>
                                    </div>
                                    <p>{info.text}</p>
                                </div>
                                {perks.map((perk) => (
                                    <ProjectDetailsPark perk={perk} key={perk.id} />
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>



        </Layout>
    );
};

export default SingleProject;
