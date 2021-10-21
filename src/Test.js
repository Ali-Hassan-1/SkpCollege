import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import styled from "styled-components";
import alihaider from "./images/alihaider.jpg";
import alihamza from "./images/alihamza.jpg";
import woman from "./images/woman.jpg";

const Wrapper = styled.div`
  background: #9e0614;
  color: #fff;

  .react-horizontal-scrolling-menu--wrapper {
    justify-content: center !important;
    .react-horizontal-scrolling-menu--scroll-container {
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;

const Icon = styled.i`
  height: 300px;
  width: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const getItems = [
  {
    id: 1,
    src: alihaider,
    message:
      "This is message! This is message This is message This is message This is message This is message This is message",
  },
  { id: 2, src: alihamza, message: "This is message!" },
  { id: 3, src: woman, message: "This is message!" },
];

function App() {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <Wrapper>
      <ScrollMenu
        scrollContainerClassName="w-50"
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
      >
        {items.map(({ id, src, message }) => (
          <Card
            itemId={id} // NOTE: itemId is required for track items
            title={id}
            key={id}
            onClick={handleClick(id)}
            selected={isItemSelected(id)}
            src={src}
            message={message}
          />
        ))}
      </ScrollMenu>
    </Wrapper>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <Icon
      className="fa fa-chevron-left fs-5"
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
    />
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Icon
      className="fa fa-chevron-right fs-5"
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
    />
  );
}

function Card({ onClick, selected, title, itemId, src, message }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div onClick={() => onClick(visibility)} tabIndex={0}>
      <div className="me-5 d-flex">
        <img src={src} width="300px" height="300px" />
        <h5 className="ms-4">{message}</h5>
      </div>
    </div>
  );
}

export default App;
