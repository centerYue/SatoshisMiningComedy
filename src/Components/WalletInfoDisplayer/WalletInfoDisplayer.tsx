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
  isReferral: boolean;
}

const WalletInfoDisplayer = ({ info }: props) => {
  return (
    <div className={styles.wrapper}>
      {info.iconSide === "left" && (
        <img src={info.displayIcon} alt={info.displayTitle} />
      )}
      <div className={styles.contentWrapper}>
        <h2 id="title">
          {info.displayTitle}: {info.displayContent || "-"}
        </h2>

        {info.isReferral && (
          <>
            <h2 id="title">Total Referral: {info.displayContent || "-"}</h2>
            <h2 id="title">Referral Rewards: {info.displayContent || "-"}</h2>
          </>
        )}
      </div>
      {info.iconSide === "right" && (
        <img src={info.displayIcon} alt={info.displayTitle} />
      )}
    </div>
  );
};

export default WalletInfoDisplayer;
