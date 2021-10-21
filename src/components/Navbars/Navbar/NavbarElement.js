import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
// MenuNavbar

export const NavbarMainContainer = styled(Navbar)`
  transition: cubic-bezier(0.55, 0.085, 0.68, 0.53);

  .dropdown-menu {
    width: 12vw;
    a {
      color: #000;
    }
  }
`;

export const MenuContainer = styled(Container)`
  justify-content: flex-start !important;
`;

export const TogglerBtn = styled(Navbar.Toggle)`
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
`;

export const Brand = styled(Navbar.Brand)`
  @media screen and (max-width: 991px) {
    flex: 1 !important;
    text-align-last: center !important;

    img {
      width: 180px;
    }
  }
`;

export const Collapse = styled(Navbar.Collapse)`
  /* background: red !important; */
  @media screen and (max-width: 991px) {
    border-top: 1px solid #dddddd;
    margin-top: 1rem;

    .navbar-nav {
      margin-top: 0.5rem !important;
      .nav-link {
        border-bottom: 1px solid lightgray;
      }
      .dropdown-menu {
        width: 100%;
      }
    }
    .dropdown-toggle::after {
      float: right;
      margin-right: 0.255em !important;
    }
  }
`;

export const Menus = styled(Nav)``;

// Menu

export const LinkR = styled(Link)`
  text-decoration: none;
  color: gray;
  &:hover {
    color: #000;
    transition: all 0.2s ease-in-out;
  }

  p {
    padding: 5px 10px;
    margin: 0;
    :hover {
      transition: all 0.2s ease-in-out;
      background: #9e0614;
      color: #fff;
    }
  }
`;

export const SimpleLinkR = styled(LinkR)`
  padding: 7px 5px 0 13px !important;
  @media screen and (max-width: 991px) {
    padding: 6px 0 !important;
    border-bottom: 1px solid lightgray;
  }
`;

export const NavLinkDropdown = styled(NavDropdown)``;
