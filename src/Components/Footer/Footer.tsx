import React from "react";
import MainContainer from "../UI/MainContainer/MainContainer";
import styles from "./Footer.module.scss";

const socialList = [
  {
    id: "1",
    name: "twitter",
    imgSrc: "/static/assets/images/Footer/x.svg",
    link: "https://t.me/satoshiminingcomedy",
  },
  {
    id: "2",
    name: "telegram",
    imgSrc: "/static/assets/images/Footer/telegram.svg",
    link: "https://twitter.com/Smc_Bitcome",
  },
];
const Footer = () => {
  return (
    <MainContainer className={styles.footer}>
      <h3>Copyright © 2023</h3>
      <div className={styles.socialWrapper}>
        {socialList.map((item) => (
          <a href={item.link} rel="noopenner noreferrer" target="_blank">
            <img key={item.id} src={item.imgSrc} alt={item.name} />
          </a>
        ))}
      </div>
    </MainContainer>
  );
};

export default Footer;
