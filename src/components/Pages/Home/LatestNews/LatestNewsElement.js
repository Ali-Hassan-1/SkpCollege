import Ticker from "react-ticker";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333333;
  color: #fff;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const Span = styled.span`
  padding-right: 20px;
  border-right: 2px solid #fff;
  margin-right: 20px;

  @media only screen and (max-width: 992px) {
    border-right: none;
  }
`;

export const TickerWrapper = styled.div`
  display: inline-block;
  width: 80vw;
  height: 5vh;
  overflow: hidden;
`;

export const TickerTic = styled(Ticker)``;

export const News = styled.h6`
  padding-top: 0.5rem;
`;
