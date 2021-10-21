import React from "react";
import {
  CarouselContainer,
  CarouselItem,
  CarouselCaption,
  CarouselImage,
} from "./ImageSliderElement";

// const fadeImages = [
//   "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//   "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
//   "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
// ];

export default function ImageSlider({
  images,
  widthOfContainer,
  heightOfContainer,
  widthOfItem,
  heightOfItem,
  heightOfImage,
  widthOfImage,
  caption,
  btnShow,
}) {
  return (
    <CarouselContainer
      fade
      widthOfContainer={widthOfContainer}
      heightOfContainer={heightOfContainer}
    >
      {images.map((image, index) => (
        <CarouselItem
          key={index}
          widthOfItem={widthOfItem}
          heightOfItem={heightOfItem}
          interval={2000}
        >
          <CarouselImage
            className="d-block w-100"
            src={image.src}
            alt={image.alt}
            widthOfImage={widthOfImage}
            heightOfImage={heightOfImage}
          />

          {caption && (
            <CarouselCaption>
              <h3>{caption}</h3>
              {btnShow && <button>View Courses</button>}
            </CarouselCaption>
          )}
        </CarouselItem>
      ))}
    </CarouselContainer>
  );
}
