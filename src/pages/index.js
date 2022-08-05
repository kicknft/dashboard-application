import BannerSlider from "@/components/BannerSlider/BannerSlider";
import BrandArea from "@/components/BrandArea/BrandArea";
import Categories from "@/components/Categories/Categories";
import CtaArea from "@/components/CtaArea/CtaArea";
import FunFacts from "@/components/FunFacts/FunFacts";
import GuideArea from "@/components/GuideArea/GuideArea";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import ProjectsArea from "@/components/ProjectsArea/ProjectsArea";
import React from "react";

const Home = () => {
  return (
    <Layout>
      <Header />
      
      <ProjectsArea />
      
    </Layout>
  );
};

export default Home;
