import React from "react";
import ContentComp from "../ContentComp/ContentComp";
import HomeComp from "../HomeComp/HomeComp";
import Navbar from "../NavbarComp/Navbar";
import ProLogoComp from "../ProLogoComp/ProLogoComp";
import ProductComp from "../ProductComp/ProductComp";
import VideoComp from "../VideoComp/VideoComp";
import BottomComp from "../BottomComp/BottomComp";
import Subscribe from "../SubScribe/Subscribe";
import "./index.css"
export default function MainHome() {
  return (
    <div className="Homepage-A">
      {/* <Navbar /> */}
      <HomeComp />
      <ProductComp />
      <ProLogoComp />
      <ContentComp />
      <VideoComp />
      <Subscribe />
      <BottomComp />

    </div>
  );
}
