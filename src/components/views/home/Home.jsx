import React from "react";
import Styles from "./Home.module.css";

import Tabs from "./tabs/Tabs";

const Home = () => {
  return (
    <section className={Styles.wrapperHome}>
      <div className={Styles.title}>
        <p>Bienvenue</p>
        <p>sur</p>
        <h1>Recette en folie</h1>
      </div>
      <Tabs />
    </section>
  );
};

export default Home;
