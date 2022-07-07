import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import React, { useState } from "react";

export default function Home() {
  const [enteredText, setEnteredText] = useState("");
  const [fetchedText, setFetchedText] = useState("");

  const getText = () => {
    setFetchedText("Radhe Radhe");
    console.log(`you clicked the get-text button`);
  };
  const setText = () => {
    console.log(`you clicked the set-text button.`);
    console.log(`Entered text right now is: ${enteredText}`);
  };

  const onTextChange = (e) => {
    // console.log(e.target.value);
    setEnteredText(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>DAPP_01</title>
        <meta
          name="description"
          content="This is first full stack developed by Deependu Jha."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <button className="btn btn-primary my-4" onClick={getText}>
          Get Text
        </button>
        <span className="mx-3" id="text">
          {fetchedText}
        </span>
      </div>
      <div>
        <button className="btn btn-primary my-4" onClick={setText}>
          Get Text
        </button>
        <input className="mx-3" type="text" onChange={onTextChange}></input>
      </div>
    </div>
  );
}
