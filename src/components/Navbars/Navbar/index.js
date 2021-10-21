import React, { useState, useEffect } from "react";
import { MenuItems } from "./MenuItems";
import collegeLogo from "../../../images/college-logo.png";
import {
  NavLinkDropdown,
  Brand,
  Collapse,
  MenuContainer,
  Menus,
  NavbarMainContainer,
  LinkR,
  SimpleLinkR,
  TogglerBtn,
} from "./NavbarElement";

const Menu = ({ item, collapse, setExpanded }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  if (!item.submenu) {
    return (
      <SimpleLinkR onClick={() => setExpanded(false)} to={item.path}>
        {item.title}
      </SimpleLinkR>
    );
  }

  const mouseLeave = () => {
    setIsHovered(false);
    setIsClicked(false);
  };

  return (
    <NavLinkDropdown
      renderMenuOnMount={true}
      title={<span className="p">{item.title}</span>}
      onMouseEnter={
        collapse ? () => setIsHovered(false) : () => setIsHovered(true)
      }
      onMouseLeave={mouseLeave}
      onToggle={() => setIsClicked(!isClicked)}
      show={isHovered || isClicked}
      id={item.title}
    >
      {(isHovered || isClicked) &&
        item.submenu.map((menu) => (
          <LinkR
            key={menu.id}
            onClick={() => setIsHovered(false)}
            to={menu.path}
          >
            <p onClick={() => setExpanded(false)}>{menu.title}</p>
          </LinkR>
        ))}
    </NavLinkDropdown>
  );
};

function MenuNavbar() {
  const [collapse, setCollapse] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const changeHover = () => {
    if (window.outerWidth <= 991) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }
  };

  useEffect(() => {
    checkRefreshPage();
  }, []);

  const checkRefreshPage = () => {
    if (window.performance) {
      if (performance.navigation.type === 1) {
        changeHover();
      } else {
        changeHover();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("resize", changeHover);
  }, []);

  return (
    <NavbarMainContainer
      sticky="top"
      className="shadow-sm p-2 mb-5 bg-white"
      expand="lg"
      expanded={expanded}
    >
      <MenuContainer>
        <TogglerBtn
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />

        <Brand href="/" className="App-logo">
          <img src={collegeLogo} alt="College Logo" />
        </Brand>

        <Collapse onEntered={() => console.log("Enter")} id="basic-navbar-nav">
          <Menus
            className="m-auto justify-content-end"
            style={{ width: "100%" }}
          >
            {MenuItems.map((item) => (
              <Menu
                key={item.id}
                item={item}
                collapse={collapse}
                setExpanded={(e) => setExpanded(e)}
              />
            ))}
          </Menus>
        </Collapse>
      </MenuContainer>
    </NavbarMainContainer>
  );
}

export default MenuNavbar;
