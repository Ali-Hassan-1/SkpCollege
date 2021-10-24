import React, { useState, useEffect } from "react";
import Home from "./components/Pages/Home";
import SimpleNav from "./components/Navbars/Nav";
import MenuNavbar from "./components/Navbars/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./components/Pages/ContactUs";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./components/Pages/NotFound";

import "./App.css";
import MyLoader from "./components/Loader";

const images = [
  {
    src: "https://res.cloudinary.com/tpostr/image/upload/v1553865338/paparouna/IMG_7638-01.jpg",
    alt: "slide 1",
    caption: "slide 1",
  },
  {
    src: "https://res.cloudinary.com/tpostr/image/upload/v1553865338/paparouna/IMG_7621-01.jpg",
    alt: "slide 2",
    caption: "slide 2",
  },
  {
    src: "https://res.cloudinary.com/tpostr/image/upload/v1553865337/paparouna/IMG_7615-01.jpg",
    alt: "slide 3",
    caption: "slide 3",
  },
];

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <MyLoader />;
  }

  return (
    <div className="App bg-light">
      <SimpleNav />
      <MenuNavbar />
      <>
        <Switch>
          <Route
            path="/home"
            render={(props) => <Home {...props} images={images} />}
          />
          <Route path="/contact" component={ContactUs} />
          <Route path="/notfound" component={NotFound} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="notfound" />
        </Switch>
      </>
      <Footer />
    </div>
  );
};

export default App;
