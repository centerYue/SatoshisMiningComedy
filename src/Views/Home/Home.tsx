import React from "react";

import MainContainer from "../../Components/UI/MainContainer/MainContainer";
import styles from "./Home.module.scss";
import { Button } from "antd";

const Home = () => {
  const currentMinerCount = 23;
  const availablePower = 34;
  const smcBalance = 45;
  const cumuMineCount = Math.random() * (20000 - 1000) + 1000;
  const cumuSMCGet = Math.random() * (20000 - 1000) + 1000;

  const statisticDataList = [
    { id: "1", title: "累计挖矿次数", data: cumuMineCount },
    { id: "2", title: "累计获得SMC", data: cumuSMCGet },
    { id: "3", title: "SMC余额", data: smcBalance },
  ];
  return (
    <div className={styles.homeWrapper}>
      <MainContainer className={styles.homeContainer}>
        <div className={styles.bannerLogoWrapper}>
          <img src="/static/assets/images/Home/mainLogo.png" alt="mainlogo" />
        </div>
        <div className={styles.mineInfo}>
          <h2>{`当前矿工人数 ${currentMinerCount}`}</h2>
          <div className={styles.powerAndSmc}>
            <div className={styles.mineLogoWrapper}>
              <img
                src="/static/assets/images/Home/minelogo.png"
                alt="minelogo"
              />
            </div>
            <div className={styles.powerAndSMCDataWrapper}>
              <div className={styles.powerInfo}>
                <h2>可用能量</h2>
                <h1>{availablePower}</h1>
                <Button>获取更多能量</Button>
              </div>
              <div className={styles.smcInfo}>
                <h2>SMC余额</h2>
                <h1>{`${smcBalance} SMC`}</h1>
                <div className={styles.buttonWrapper}>
                  <Button>开启矿机</Button>
                  <Button>SMC基金</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.statisticData}>
          {statisticDataList.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <h1>{item.data}</h1>
            </div>
          ))}
        </div>
        <div className={styles.contractAnd}></div>
      </MainContainer>
    </div>
  );
};

export default Home;
