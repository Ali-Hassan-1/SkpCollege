import React from "react";
import { Nav, Container } from "react-bootstrap";
import styles from "./Nav.module.css";

const SimpleNav = () => {
  return (
    <div className={styles.container}>
      <Container>
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <ul>
            <li>
              <i className="fa fa-map" />
              Civil Lines, Sheikhupura{" "}
            </li>
            <li className={styles.email}>
              <i className="fa fa-envelope-open" />
              gcbsheikhupura@gmail.com
            </li>
            <li>
              <i className={`fa fa-phone ${styles.phone}`} />
              (056) 3783030
            </li>
          </ul>
        </Nav>
      </Container>
    </div>
  );
};

export default SimpleNav;
