import React from "react";
import CollegeTour from "./CollegeTour";
import LatestNews from "./LatestNews/LatestNews";
import MessagePlusNews from "./MessagePlusNews/MessagePlusNews";
import OfferedPrograms from "./OfferedPrograms/OfferedPrograms";
import ImageSlider from "../../common/ImageSlider";

function Home({ images }) {
  return (
    <>
      <ImageSlider
        images={images}
        caption="Here is my caption Here is my caption!"
        btnShow={true}
      />
      <LatestNews />
      <MessagePlusNews />
      <OfferedPrograms />
      <CollegeTour />
    </>
  );
}

export default Home;
