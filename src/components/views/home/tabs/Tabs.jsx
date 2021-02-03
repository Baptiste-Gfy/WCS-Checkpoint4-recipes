import React, { useState } from "react";
import Styles from "./Tabs.module.css";

export default function Tabs() {
  const [tabs, setTabs] = useState(1);

  const goSignIn = () => {
    setTabs(1);
  };
  const goSignUp = () => {
    setTabs(2);
  };

  return (
    <section className={Styles.wrapperTabs}>
      <div className={Styles.btnTabs}>
        <div
          onClick={goSignIn}
          className={`${Styles.tabs} 
          ${tabs === 1 ? Styles.active : Styles.null}`}
        >
          Connection
        </div>
        <div
          onClick={goSignUp}
          className={`${Styles.tabs} 
          ${tabs === 2 ? Styles.active : Styles.null}`}
        >
          Inscription
        </div>
      </div>
      <div className={Styles.container}>
        {tabs === 1 ? (
          <p>FORMULAIRE DE CONNECTION</p>
        ) : (
          <p>FORMULAIRE D'INSCRIPTION</p>
        )}
      </div>
    </section>
  );
}
