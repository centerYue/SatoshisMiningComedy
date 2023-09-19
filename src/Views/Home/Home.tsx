import React from "react";
// import { ethers } from "ethers";

import WalletInfoDisplayer from "../../Components/WalletInfoDisplayer/WalletInfoDisplayer";
import MainContainer from "../../Components/UI/MainContainer/MainContainer";
import { Button } from "antd";
import { formatNumber } from "../../Utils/utils";

import styles from "./Home.module.scss";

const faqList = [
  {
    id: "1",
    question: "What is Satoshi’s Mining Comedy ($Bitcome)?",
    answer:
      "Similar to Bitcoin mining, Satoshi’s Mining Comedy introduced a new decentralized mining system that allows miners to mine $Bitcome by interacting with smart contracts.",
  },
  {
    id: "2",
    question: "What is the value of the $Bitcome token?",
    answer:
      "Bitcome is a fair mining project that can only be mined in a manner similar to BTC mining. There is no presale and no tokens are allocated to the team.",
  },
  {
    id: "3",
    question: "What is the total supply of Bitcome?",
    answer: "21,000,000,000,000",
  },
  {
    id: "4",
    question: "Where can I mine $Bitcome?",
    answer:
      "You can mine $Bitcome on the official website or by interacting with the mining contract.",
  },
  {
    id: "5",
    question: "How does Bitcome Mining work?",
    answer:
      "Bitcome Mining is set to launch in late September and will last for just 7 days. The mining contract will generate 3 trillion Bitcome daily, or 34,722,222 Bitcome per second, of which 25,000,000 is for mining and 9,722,222 is for the team wallet. Within 7 days, all 21 trillion Bitcome tokens will be fully mined.",
  },
  {
    id: "6",
    question: "When will Bitcome be listed for trading?",
    answer:
      "Theoretically, Bitcome will be available for trading upon the mining launch. The team won't provide liquidity since they mine just like everyone else and don't reserve tokens initially.",
  },
  {
    id: "7",
    question: "Tax?",
    answer: "3% for marketing, 3% for dividends, and 3% for LP.",
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
    { id: "1", title: "Cumulative Mining Times", data: cumuMineCount },
    { id: "2", title: "Cumulative Mined Bitcome", data: cumuSMCGet },
    { id: "3", title: "Your Bitcome Balance", data: smcBalance },
  ];

  const contractAndWalletInfoList = [
    {
      id: "1",
      displayIcon: "/static/assets/images/Home/contractIcon.png",
      displayTitle: "Bitcome Contract",
      displayContent: verifiedContract,
      iconSide: "right",
    },
    {
      id: "2",
      displayIcon: "/static/assets/images/Home/walletIcon.png",
      displayTitle: "Referral",
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
          <h2>{`Miner ${currentMinerCount}`}</h2>
          <div className={styles.powerAndSmc}>
            <div className={styles.mineLogoWrapper}>
              <img
                src="/static/assets/images/Home/mineLogo.png"
                alt="mineLogo"
              />
            </div>
            <div className={styles.powerAndSMCDataWrapper}>
              <div className={styles.powerWrapper}>
                <h2>Mining Pool</h2>
                <h1>{formatNumber(availablePower)}</h1>
                <div className={styles.buttonWrapper}>
                  <Button type="primary">Twitter</Button>
                  <Button type="primary">Telegram</Button>
                </div>
              </div>
              <div className={styles.smcWrapper}>
                <h2>Your Eth</h2>
                <h1>{`${formatNumber(smcBalance)} ETh`}</h1>
                <div className={styles.buttonWrapper}>
                  <Button type="primary">Start Miner</Button>
                  <Button type="primary" danger>
                    Uniswap
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.statisticData}>
          {statisticDataList.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <h1>{formatNumber(item.data)}</h1>
            </div>
          ))}
        </section>

        <section className={styles.contractAndWallet}>
          {contractAndWalletInfoList.map((item) => (
            <WalletInfoDisplayer info={item} key={item.id} />
          ))}
        </section>

        <section className={styles.FAQ}>
          <h1>FAQ</h1>
          {faqList.map((item) => (
            <div key={item.id} className={styles.faqWrapper}>
              <h2>Q: {item.question}</h2>
              <p>A: {item.answer}</p>
            </div>
          ))}
        </section>
      </MainContainer>
    </div>
  );
};

export default Home;
