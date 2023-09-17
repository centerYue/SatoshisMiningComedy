import React from "react";
import { Button } from "antd";
import MainContainer from "../UI/MainContainer/MainContainer";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <MainContainer className={styles.headerWrapper}>
      <Button
        type="default"
        ghost
        style={{ borderColor: "#2788E1", color: "#2788E1" }}
      >
        Connect Wallet
      </Button>
    </MainContainer>
  );
};

export default Header;
