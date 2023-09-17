import React from "react";

import styles from "./WalletInfoDisplayer.module.scss";

interface props {
  info: infoType;
}

interface infoType {
  id: string;
  displayIcon: string;
  displayTitle: string;
  displayContent: string;
  iconSide: string;
}

const WalletInfoDisplayer = ({ info }: props) => {
  return (
    <div className={styles.wrapper}>
      {info.iconSide === "left" && (
        <img
          className={styles.left}
          src={info.displayIcon}
          alt={info.displayTitle}
        />
      )}
      <div
        className={styles.contentWrapper}
        style={{
          paddingLeft: info.iconSide === "left" ? "20%" : "10%",
        }}
      >
        <h2 id="title">{info.displayTitle}: </h2>
        <h2>{info.displayContent || "-"}</h2>
      </div>
      {info.iconSide === "right" && (
        <img
          className={styles.right}
          src={info.displayIcon}
          alt={info.displayTitle}
        />
      )}
    </div>
  );
};

export default WalletInfoDisplayer;
