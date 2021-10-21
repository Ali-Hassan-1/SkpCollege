import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  background: #9e0614;
  justify-content: center;
  flex-wrap: wrap;
  color: #fff;
  padding: 3rem;

  h2 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.1em;
  }

  li {
    text-transform: capitalize;
  }
`;

// LinksMenu
export const LinksMenu = styled.div`
  padding: 1rem;

  @media screen and (max-width: 991px) {
    width: 100%;
    text-align: center;
  }
`;

export const Links = styled.ul`
  display: inline;
  li {
    list-style: circle;
    cursor: pointer;
    padding: 0.7rem 0;
    color: darkgray;

    &:hover {
      color: yellow;
      transition: all 0.5s ease-in-out;
    }
  }

  @media screen and (max-width: 991px) {
    li {
      list-style: none;
    }
  }
`;

export const CollegeAddress = styled.div`
  width: 30%;
  height: 30%;
  margin-right: 3rem;

  ${LinksMenu} {
    padding: 0;

    ${Links} {
      li {
        margin-left: 1rem;
      }
    }
  }

  img {
    width: 100%;
    padding: 0 0 2rem 0;
  }

  @media screen and (max-width: 991px) {
    text-align: center;
    margin-right: 0;
    width: 100%;
    img {
      width: 50%;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin-bottom: 2rem;
    img {
      width: 100%;
    }
  }
`;

export const Description = styled.div``;

//  CopyWrite

export const CopyWriteContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px;
  text-align: center;

  & ${Links} {
    display: flex;
    margin-top: 8px;

    li {
      list-style: none;
    }
  }
`;

export const VerticalDivider = styled.div`
  height: 15px;
  top: 2px;
  margin: 0 1rem;
  position: relative;
  border-left: 1px solid darkgray;
`;
