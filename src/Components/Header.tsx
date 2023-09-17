import React from "react";
import { Button } from "antd";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <Button>Connect Wallet</Button>
    </div>
  );
};

export default Header;
