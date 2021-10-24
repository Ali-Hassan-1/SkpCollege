import { Carousel } from "react-bootstrap";

import styled from "styled-components";

const CarouselContainer = styled(Carousel)`
  /* width: ${({ widthOfContainer }) => widthOfContainer};
  height: ${({ heightOfContainer }) => heightOfContainer}; */
  background: gray;
`;

const CarouselItem = styled(Carousel.Item)`
  transition: opacity 1s ease-in-out !important;
  /* width: ${({ widthOfItem }) => (widthOfItem ? widthOfItem : "100%")};
  height: ${({ heightOfItem }) => (heightOfItem ? heightOfItem : "100vh")}; */
`;

const CarouselCaption = styled(Carousel.Caption)`
  text-align: left;

  h3 {
    font-size: 50px;
    font-weight: bold;
  }

  button {
    transition: all 0.3s ease-in;
    padding: 0.8rem;
    min-width: 13vw;
    border-radius: 40px;
    text-transform: uppercase;
    color: #ae303c;
    background: #ffffff;
    margin: 20px 0;
  }

  button:hover {
    transition: all 0.3s ease-in;
    color: #ffffff;
    background: #ffb606;
  }
`;

const CarouselImage = styled.img`
  width: ${({ widthOfImage }) => (widthOfImage ? widthOfImage : "100%")};
  height: ${({ heightOfImage }) => (heightOfImage ? heightOfImage : "100vh")};
  object-fit: cover;
`;

export { CarouselContainer, CarouselCaption, CarouselImage, CarouselItem };
