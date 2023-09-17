import React from "react";
// import { ethers } from "ethers";

import WalletInfoDisplayer from "../../Components/WalletInfoDisplayer/WalletInfoDisplayer";
import MainContainer from "../../Components/UI/MainContainer/MainContainer";
import styles from "./Home.module.scss";
import { Button } from "antd";

const faqList = [
  { id: "1", question: "Satosh’s Mining Comedy是什么？", answer: "lorem" },
  {
    id: "2",
    question: "Satosh’s Mining Comedy的代币价值是什么？",
    answer: "lorem",
  },
  {
    id: "3",
    question: "Satosh’s Mining Comedy的代币价值是什么？",
    answer: "lorem",
  },
];

const Home = () => {
  const currentMinerCount = 23;
  const availablePower = 34;
  const smcBalance = 45;
  const cumuMineCount = Math.random() * (20000 - 1000) + 1000;
  const cumuSMCGet = Math.random() * (20000 - 1000) + 1000;
  const verifiedContract = "0x12345";
  const walletAddr = "0x678910";

  const statisticDataList = [
    { id: "1", title: "累计挖矿次数", data: cumuMineCount },
    { id: "2", title: "累计获得SMC", data: cumuSMCGet },
    { id: "3", title: "SMC余额", data: smcBalance },
  ];

  const contractAndWalletInfoList = [
    {
      id: "1",
      displayIcon: "/static/assets/images/Home/contractIcon.png",
      displayTitle: "已验证合约",
      displayContent: verifiedContract,
      iconSide: "right",
    },
    {
      id: "2",
      displayIcon: "/static/assets/images/Home/walletIcon.png",
      displayTitle: "当前钱包地址",
      displayContent: walletAddr,
      iconSide: "left",
    },
  ];
  return (
    <div className={styles.homeWrapper}>
      <MainContainer className={styles.homeContainer}>
        <section className={styles.bannerLogoWrapper}>
          <img src="/static/assets/images/Home/mainLogo.png" alt="mainlogo" />
        </section>

        <section className={styles.mineInfo}>
          <h2>{`当前矿工人数 ${currentMinerCount}`}</h2>
          <div className={styles.powerAndSmc}>
            <div className={styles.mineLogoWrapper}>
              <img
                src="/static/assets/images/Home/minelogo.png"
                alt="minelogo"
              />
            </div>
            <div className={styles.powerAndSMCDataWrapper}>
              <div className={styles.powerWrapper}>
                <h2>可用能量</h2>
                <h1>{availablePower}</h1>
                <Button type="primary">获取更多能量</Button>
              </div>
              <div className={styles.smcWrapper}>
                <h2>SMC余额</h2>
                <h1>{`${smcBalance} SMC`}</h1>
                <div className={styles.buttonWrapper}>
                  <Button type="primary">开启矿机</Button>
                  <Button type="primary" danger>
                    SMC基金
                  </Button>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </section>

        <section className={styles.statisticData}>
          {statisticDataList.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <h1>{item.data}</h1>
            </div>
          ))}
        </section>

        <section className={styles.contractAndWallet}>
          {contractAndWalletInfoList.map((item) => (
            <WalletInfoDisplayer info={item} key={item.id} />
          ))}
        </section>

        <section className={styles.FAQ}>
          <h1>常见问题</h1>
          {faqList.map((item) => (
            <div key={item.id} className={styles.faqWrapper}>
              <h2>{item.question}</h2>
              <p>{item.answer}</p>
            </div>
          ))}
        </section>
      </MainContainer>
    </div>
  );
};

export default Home;
