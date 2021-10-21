import React from "react";
import styles from "./MessagePlusNews.module.css";
import { Card, Container } from "react-bootstrap";
import principle from "../../../../images/principle.jpg";

const NewsCard = () => (
  <Card className={`shadow bg-white rounded ${styles.card}`}>
    <Card.Header
      style={{
        background: "#9E0614",
        color: "#fff",
        height: "8vh",
        display: "flex",
        alignItems: "center",
        textIndent: ".7rem",
        fontWeight: 700,
        letterSpacing: "1px",
      }}
    >
      Latest News
    </Card.Header>
    <Container className="p-4">
      <Card style={{ background: "#EAEAEA", color: "#6D6D6D" }}>
        <Card.Body>
          <Card.Text>
            ADMISSIONS FALL 2021 - OPENING SOON UNDERGRADUATE STUDIES ADMISSION
            TEST (USAT) IS NOT REQUIRED. 2021-09-20 05:40:42
          </Card.Text>
        </Card.Body>
      </Card>
      <hr />
      <Card style={{ background: "#EAEAEA", color: "#6D6D6D" }}>
        <Card.Body>
          <Card.Text>
            ADMISSIONS FALL 2021 - OPENING SOON UNDERGRADUATE STUDIES ADMISSION
            TEST (USAT) IS NOT REQUIRED. 2021-09-20 05:40:42
          </Card.Text>
        </Card.Body>
      </Card>
      <hr />
      <a
        href="/"
        style={{
          textDecoration: "none",
        }}
        className={styles.message_title}
      >
        Browse All News
        <i className=" m-2 fa fa-angle-double-right" />
      </a>
    </Container>
  </Card>
);

const Message = () => (
  <>
    <h1 className={styles.message_title}>Message Of The Principal</h1>
    <img
      align="left"
      src={principle}
      alt="principle"
      style={{ padding: "0 1rem .4rem 0" }}
    />
    <h6
      style={{
        textAlign: "justify",
        lineHeight: 1.4,
        color: "gray",
      }}
    >
      It is a matter of great pleasure for me that you have chosen this splendid
      institute for education. It is not only a national duty but also religious
      obligation to get education as it has been made obligatory by Allah
      Almighty and the Prophet (S.A.W). In the current era, the dream to become
      a prosperous and developed nation cannot come true without economic,
      social, educational and scientific development. Besides, we will have to
      compete the developed nations in the field of knowledge, science and
      technology. The importance of education cannot be overlooked in the
      development of nations.
      <br />
      <br />
      The developed nations are ruling the world on the basis of knowledge and
      skill and all developing nations are their subordinates. It is impossible
      to count the advantages of knowledge. <br />
      <br />
      In this world of competition, educationally stable nation has great worth
      because it is the only weapon to resolve all issues. Government Graduate
      College, Civil Lines, Sheikhupura is performing its great role in
      providing the best and standard education to the middle class and the poor
      sections of society. Parents pay minor fee to enable their children to get
      education. Financial aid and concession in the government fee are also
      granted to the poor and deserving students. I hope you will take great
      care to uphold the dignity and sanctity of this institute after
      graduation. May Allah help you in days to come.
    </h6>
  </>
);

function MessagePlusNews() {
  return (
    <div className="container p-3 mt-3">
      <div className="row">
        <div className="col-lg-8 col-sm-12 col-md-12">
          <Message />
        </div>
        <div className="col-lg-4 col-sm-12 col-md-12">
          <NewsCard />
        </div>
      </div>
    </div>
  );
}

export default MessagePlusNews;
