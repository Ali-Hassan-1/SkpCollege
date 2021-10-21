import React, { useState } from "react";
import DividerLine from "../../../../utils/DividerLine";
import styled from "styled-components";
import { Card } from "react-bootstrap";

const CardContainer = styled(Card)`
  width: 17rem;
  height: 17rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    margin-bottom: 2rem;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: #fff;
  position: relative;
  transition: all 0.3s ease;

  .bg-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0vh;
    background-size: cover;
    background-position: center;
    transition: all 0.3s ease;
    opacity: 0.3;
    background-image: url("https://www.knoll.com/media/83/901/mf_he_classroom2.jpg");
  }

  .bg_primary {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0vh;
    background-size: cover;
    background-position: center;
    transition: all 0.3s ease;
    opacity: 0.5;
  }

  .text {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #000;
    transition: all 0.3s ease-in;
  }

  .text > i {
    font-size: 40px;
    color: #000;
  }
  &:hover {
    .bg-img {
      height: 100%;
      transition: all 0.2s ease-in;
    }

    .bg_primary {
      height: 100%;
      transition: all 0.2s ease-in;
    }
    .text,
    i {
      color: #fff;
      transition: all 0.2s ease-in;
    }
  }
`;

const HoverCard = ({ program }) => {
  const [isHover, setisHover] = useState(false);

  return (
    <CardContainer className={`p-0 shadow bg-white rounded `}>
      <Div
        onMouseOver={() => setisHover(true)}
        onMouseOut={() => setisHover(false)}
        isHover={isHover}
      >
        <div className="bg-img" />
        <div className="bg_primary" style={{ background: "#9E0614" }} />
        {program && (
          <Card.Body className="text p-0">
            <i className=" fa fa-cogs mb-3" />

            <Card.Title>{program.title}</Card.Title>
            <Card.Text className="description">{program.description}</Card.Text>
          </Card.Body>
        )}
      </Div>
    </CardContainer>
  );
};

function OfferedPrograms() {
  const programs = [
    {
      id: 1,
      title: "Bachelor Of Chemistry",
      description: "BS(Chem) Hons. 4 years",
      icon: "https://cdn-icons-png.flaticon.com/512/1085/1085821.png",
      bgOnHover:
        "data:image/jpeg;base64,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",
    },
    {
      id: 1,
      title: "Bachelor Of Chemistry",
      description: "BS(Chem) Hons. 4 years",
      icon: "https://cdn-icons-png.flaticon.com/512/1085/1085821.png",
      bgOnHover: "",
    },
    {
      id: 1,
      title: "Bachelor Of Chemistry",
      description: "BS(Chem) Hons. 4 years",
      icon: "https://cdn-icons-png.flaticon.com/512/1085/1085821.png",
      bgOnHover: "",
    },
    {
      id: 1,
      title: "Bachelor Of Chemistry",
      description: "BS(Chem) Hons. 4 years",
      icon: "https://cdn-icons.flaticon.com/png/512/2177/premium/2177300.png?token=exp=1633863796~hmac=112b873c2e99e7e5574188377eeb37b2",
      bgOnHover: "",
    },
    {
      id: 1,
      title: "Bachelor Of Chemistry",
      description: "BS(Chem) Hons. 4 years",
      icon: "https://cdn-icons.flaticon.com/png/512/2177/premium/2177300.png?token=exp=1633863796~hmac=112b873c2e99e7e5574188377eeb37b2",
      bgOnHover: "",
    },
    {
      id: 1,
      title: "Bachelor Of Chemistry",
      description: "BS(Chem) Hons. 4 years",
      icon: "https://cdn-icons.flaticon.com/png/512/2177/premium/2177300.png?token=exp=1633863796~hmac=112b873c2e99e7e5574188377eeb37b2",
      bgOnHover: "",
    },
    {
      id: 1,
      title: "Bachelor Of Chemistry",
      description: "BS(Chem) Hons. 4 years",
      icon: "https://cdn-icons.flaticon.com/png/512/2177/premium/2177300.png?token=exp=1633863796~hmac=112b873c2e99e7e5574188377eeb37b2",
      bgOnHover: "",
    },
    {
      id: 1,
      title: "Bachelor Of Chemistry",
      description: "BS(Chem) Hons. 4 years",
      icon: "https://cdn-icons.flaticon.com/png/512/2177/premium/2177300.png?token=exp=1633863796~hmac=112b873c2e99e7e5574188377eeb37b2",
      bgOnHover: "",
    },
    {
      id: 1,
      title: "Bachelor Of Chemistry",
      description: "BS(Chem) Hons. 4 years",
      icon: "https://cdn-icons.flaticon.com/png/512/2177/premium/2177300.png?token=exp=1633863796~hmac=112b873c2e99e7e5574188377eeb37b2",
      bgOnHover: "",
    },
    {
      id: 1,
      title: "Bachelor Of Chemistry",
      description: "BS(Chem) Hons. 4 years",
      icon: "https://cdn-icons.flaticon.com/png/512/2010/premium/2010824.png?token=exp=1633863988~hmac=bc85358ee5bc81a9c62a9fa7bd6aa424",
      bgOnHover: "",
    },
    {
      id: 1,
      title: "Bachelor Of Chemistry",
      description: "BS(Chem) Hons. 4 years",
      icon: "https://cdn-icons.flaticon.com/png/512/2010/premium/2010824.png?token=exp=1633863988~hmac=bc85358ee5bc81a9c62a9fa7bd6aa424",
      bgOnHover: "",
    },
    {
      id: 1,
      title: "Bachelor Of Chemistry",
      description: "BS(Chem) Hons. 4 years",
      icon: "https://cdn-icons.flaticon.com/png/512/2010/premium/2010824.png?token=exp=1633863988~hmac=bc85358ee5bc81a9c62a9fa7bd6aa424",
      bgOnHover: "",
    },
  ];

  return (
    <div className="container p-3 mt-2 ">
      <div className="row">
        <div
          className="col-12"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1>Offered Programs</h1>
          <DividerLine />
          <p>Following Intermediate and Graduate programs are being offered</p>
        </div>
      </div>

      <div className="row">
        <div className="d-flex col-12  flex-wrap justify-content-center mt-5">
          {programs.map((program) => (
            <HoverCard program={program} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OfferedPrograms;
