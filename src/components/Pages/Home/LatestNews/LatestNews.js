import React, { useState } from "react";
import {
  Wrapper,
  Span,
  TickerWrapper,
  TickerTic,
  News,
} from "./LatestNewsElement.js";

const LatestNews = () => {
  const [move, setMove] = useState(true);

  return (
    <Wrapper>
      <Span>Latest News</Span>
      <TickerWrapper
        onMouseEnter={(e) => setMove(false)}
        onMouseLeave={(e) => setMove(!move)}
      >
        <TickerTic move={move}>
          {({ index }) => (
            <>
              <News>This is the Headline of element #{index}!</News>
              <img src="www.my-image-source.com/" alt="" />
            </>
          )}
        </TickerTic>
      </TickerWrapper>
    </Wrapper>
  );
};

export default LatestNews;
