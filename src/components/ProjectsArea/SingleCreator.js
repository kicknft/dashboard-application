import React from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";
const { creators } = creatorsArea;
import { creatorsArea } from "@/data/creatorsArea";


const SingleProject = ({ creator = {} }) => {
    const { image, category, date, title, goal, raised } = creator;

    return (
        <div className="explore-projects-item mt-30">
            <div className="explore-projects-thumb">
                <Image src={image.src} alt="explore-creators" />
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
                <Link href={'/creators/' + creator.id}>

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
