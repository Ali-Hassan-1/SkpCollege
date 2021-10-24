import React from "react";
import DividerLine from "../../../../utils/DividerLine";
import ImageSlider from "../../../common/ImageSlider";
import StudentReviewSlider from "../StudentReviewSlider";
import styled from "styled-components";
import BlueBg from "../../../../images/blueBg.jpg";
// Images
import advisor1 from "../../../../images/advisor1.jpg";
import advisor2 from "../../../../images/advisor2.jpg";
import advisor3 from "../../../../images/advisor3.jpg";
import advisor4 from "../../../../images/advisor4.jpg";
import advisor5 from "../../../../images/advisor5.jpg";
import advisor6 from "../../../../images/advisor6.jpg";

const DivContainer = styled.div`
  .pulsingButton {
    width: 70px;
    height: 70px;
    text-align: center;
    white-space: nowrap;
    display: block;
    margin: 20px auto;
    padding: 18px 29px;
    box-shadow: 0 0 0 0 rgba(232, 76, 61, 0.7);
    border-radius: 35px;
    background-color: #ffb606;
    -webkit-animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    -moz-animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    -ms-animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    font-size: 22px;
    font-weight: normal;
    font-family: sans-serif;
    text-decoration: none !important;
    color: #ffffff;
    transition: all 300ms ease-in-out;
  }

  /* Comment-out to have the button continue to pulse on mouseover */

  //   a.pulsingButton:hover {
  //     -webkit-animation: none;
  //     -moz-animation: none;
  //     -ms-animation: none;
  //     animation: none;
  //     color: #ffffff;
  //   }

  /* Animation */

  @-webkit-keyframes pulsing {
    to {
      box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
    }
  }

  @-moz-keyframes pulsing {
    to {
      box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
    }
  }

  @-ms-keyframes pulsing {
    to {
      box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
    }
  }

  @keyframes pulsing {
    to {
      box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
    }
  }
`;

const CoreTeam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 5rem;
`;

const CoreTeamImageContainer = styled.div`
  width: 60%;
  height: 60vh;

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

const images = [
  {
    src: advisor1,
    alt: "slide 1",
    caption: "slide 1",
  },
  {
    src: advisor2,
    alt: "slide 2",
    caption: "slide 2",
  },
  {
    src: advisor3,
    alt: "slide 3",
    caption: "slide 3",
  },
  {
    src: advisor4,
    alt: "slide 3",
    caption: "slide 3",
  },
  {
    src: advisor5,
    alt: "slide 3",
    caption: "slide 3",
  },
  {
    src: advisor6,
    alt: "slide 3",
    caption: "slide 3",
  },
];

const CollegeTour = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${BlueBg})`,
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          minHeight: "60vh",
          background: "rgb(158, 6, 20, 0.7)",
          color: "#fff",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        <h1>Take a short tour of our college</h1>
        <DividerLine />
        <DivContainer>
          <a href="/" className="pulsingButton">
            <i className="fa fa-play" />
          </a>
        </DivContainer>
      </div>
      {/* Student Review */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#9E0614",
          color: "#fff",
          padding: "1rem",
        }}
      >
        <h1>Student Review</h1>
        <DividerLine />
        <p>what our students say about us</p>
        <StudentReviewSlider />
      </div>

      {/* Core Team */}

      <CoreTeam>
        <h1>Core Team</h1>
        <DividerLine />
        <CoreTeamImageContainer>
          <ImageSlider images={images} heightOfImage="60vh" />
        </CoreTeamImageContainer>
      </CoreTeam>
    </div>
  );
};

export default CollegeTour;
