import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import ExploreDonations from "@/components/ProjectsArea/ExploreDonations";
import PageTitle from "@/components/Reuseable/PageTitle";
import React from "react";

const Projects = () => {
    return (
        <Layout>
            <Header />
            <PageTitle title="Donation" />
            <ExploreDonations/>
        </Layout>
    );
};

export default Projects;
