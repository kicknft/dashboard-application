import React from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";
const { donations } = donationsArea;
import { donationsArea } from "@/data/donationsArea";


const SingleProject = ({ donation = {} }) => {
    const { image, category, date, title, goal, raised } = donation;

    return (
        <div className="explore-projects-item mt-30">
            <div className="explore-projects-thumb">
                <Image src={image.src} alt="explore-donations" />
                <a href="#">
                    <i className="fa fa-heart"></i>
                </a>
            </div>
            <div className="explore-projects-content">
                <div className="item d-flex align-items-center">
                    <span>{category}</span>
                    <p>
                        <i className="fa fa-clock-o"></i> {date}
                    </p>
                </div>
                <Link href={'/donations/' + donation.id}>

                    <h3 className="title">{title}</h3>
                </Link>
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
            </div>
        </div>
    );
};

export default SingleProject;
