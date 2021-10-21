import React from "react";
import {
  FooterContainer,
  CollegeAddress,
  Description,
  Logo,
  Links,
  LinksMenu,
  CopyWriteContainer,
  VerticalDivider,
} from "./FooterElement";
import CollegeLogo from "../../images/college-logo-white.png";

function index() {
  return (
    <>
      <FooterContainer>
        {/* Address */}
        <CollegeAddress>
          <img src={CollegeLogo} />
          <Description>
            <p>Government Graduate College, Civil Lines, Sheikhupura 39350.</p>
            <p>(056) 3783030</p>
          </Description>
          {/* Media And Express */}
          <LinksMenu>
            <h2>Media & Press</h2>
            <Links>
              <li>Media & Press</li>
              <li>News Archieve</li>
              <li>Purchase</li>
              <li>Tender</li>
            </Links>
          </LinksMenu>
        </CollegeAddress>

        {/* Admissions */}

        <LinksMenu>
          <h2>Admissions</h2>
          <Links>
            <li>Admissions Notice</li>
            <li>Fee Structure</li>
            <li>Admission Policy for hostal</li>
            <li>Admission office</li>
            <li>Last merit list</li>
            <li>E-Prospactus</li>
            <li>Admissions policy</li>
            <li>How to apply</li>
            <li>dates & deadlines</li>
            <li>uniform</li>
            <li>Rule & regulations</li>
          </Links>
        </LinksMenu>
        {/* Resources */}
        <LinksMenu>
          <h2>Resources</h2>
          <Links>
            <li>Room Allocation - Time table</li>
            <li>Download</li>
            <li>Counselling</li>
            <li>Career</li>
            <li>Faculty Portal</li>
            <li>Student Portal</li>
            <li>Course Directory</li>
            <li>Library</li>
            <li>Digital Library</li>
            <li>College Commitees</li>
          </Links>
        </LinksMenu>

        {/* Research */}
        <LinksMenu>
          <h2>Research</h2>
          <Links>
            <li>Conference</li>
            <li>Research project</li>
            <li>Research Publication</li>
          </Links>
        </LinksMenu>
      </FooterContainer>
      {/* Copywrite */}
      <CopyWriteContainer>
        <h6>
          © Copyright 2021 Government Graduate College, Civil Lines, Sheikhupura
          - All Rights Reserved.
        </h6>
        <Links>
          <li>Terms of user </li>
          <VerticalDivider />
          <li>License </li>
          <VerticalDivider />
          <li>Support</li>
        </Links>
      </CopyWriteContainer>
    </>
  );
}

export default index;
