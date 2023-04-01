import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";

import SimilarProjects from "@/components/ProjectsArea/SimilarProjects";
import PageTitle from "@/components/Reuseable/PageTitle";
import React, { useState } from "react";

import { projectDetailsArea } from "@/data/projectContent3";
import { Col, Container, Image, Row } from "react-bootstrap";

import { projectDetailsTabBtns } from "@/data/projectContent3";

import CommentForm from "@/components/NewsArea/BlogDetails/CommentForm";
import CommentOne from "@/components/NewsArea/BlogDetails/CommentOne";
import { projectDetailsComments } from "@/data/projectContent3";

const { idc, comments } = projectDetailsComments;

import { projectDetailsFaq } from "@/data/projectContent3";
import Faqs from "@/components/FaqArea/Faqs";


import { projectDetailsSidebar } from "@/data/projectContent3";
const { info, perks } = projectDetailsSidebar;

import { projectDetailsStory } from "@/data/projectContent3";
const { ids, text, lists, text2, items, text3, image, images } =
    projectDetailsStory;

import ProjectDetailsUpdates from "@/components/ProjectsArea/ProjectDetails/ProjectDetailsUpdates";

import { ethers } from "ethers";
import contractAbi from '../../utils/ProjectNFT.json'
const CONTRACT_ADDRESS = '0xC284Be07898768F0818aAeC84A0bD95Bc5275670';
const uri_p = "ipfs://QmXDWj5sNVFtQZYR2RK3bdJNRWf94ffJmfnNfcqB48sau9"
const uri_g = "ipfs://QmZ9XAz1Zn5CAKLyCL9VKmTJPAPxP7LDMLfYNv3opzxHBT"
const uri_s = "ipfs://QmeiRDaiECwFq66dccduP7Xh3tQW7WZ2xYCovfarTqjRJP"

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


const { faqs, id } = projectDetailsFaq;




const ProjectDetailsPark = ({ perk = {} }) => {
    const { id, image, sold, off, amount, claimed, totalClaimed } = perk;
     
    const mint = async (value) => {
        try {
            const { ethereum } = window;
            console.log("try block is working");
            if (ethereum) {
                console.log("eth object issue");
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                console.log("provider")
                const contract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi, signer);
                console.log("contract", contract)

                console.log("Going to pop wallet now to pay gas...")
                let tx, receipt;

                if (value === 1) {
                    tx = await contract.mintNFT1(uri_s, { value: ethers.utils.parseEther('0.001'), gasLimit: 5000000 });
                }

                if (value === 2) {
                    tx = await contract.mintNFT1(uri_g, { value: ethers.utils.parseEther('0.002'), gasLimit: 5000000 });
                }

                if (value === 3) {
                    tx = await contract.mintNFT1(uri_p, { value: ethers.utils.parseEther('0.003'), gasLimit: 5000000 });
                }

                receipt = await tx.wait();
                // Check if the transaction was successfully completed
                if (receipt.status === 1) {
                    console.log(" minted! https://explorer.testnet.mantle.xyz/tx/" + tx.hash);


                } else {
                    alert("Transaction failed! Please try again");
                }
            }
        } catch (error) {
            console.log("Mint function calling issue", error);
        }
    }

    return(
        <div
            className={`project-details-park mt-30 box${id === 2 ? " item-2" : ""}`}
        >
            <h4 className="title">Select a Perk</h4>
            {image && <Image src={image.src} alt="" />}
            <span>Funder ({sold} sold already)</span>
            <p>
                ${amount} ({off}% OFF)
            </p>
            <ul>
                <li>
                    {claimed} out of {totalClaimed} <span>claimed</span>
                </li>
            </ul>
             <a className="main-btn" onClick={() => mint(id)}>
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
                    console.log(" minted! https://explorer.testnet.mantle.xyz/tx/" + tx.hash);


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
            <PageTitle title=" Projects" page="Explore" />

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



            <SimilarProjects />
        </Layout>
    );
};

export default SingleProject;
