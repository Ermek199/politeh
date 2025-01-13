import React, { useState } from "react";
import "./styles.css";
import { Text, Div } from "atomize";

const SecondStep = () => {
  return (
    <div>
      <Tabs />
    </div>
  );
};

export default SecondStep;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("USD");
  const tabsContent = {
    USD: {
      title: (
        <Div
        pos="relatvie"
        d="flex"
        style={{
          gap: "90px",
        }}
      >
        <Div
        pos="relatvie"
        d="flex"
        flexDir='column'
        style={{
          gap: "15px",
        }} >
        <Text
          textSize="18px"
          textWeight="700"
          fontFamily="Arial"
          textColor="white"
        >
          BNB/USD
        </Text>
        <Text
          textSize="18px"
          textWeight="400"
          fontFamily="Arial"
          textColor="white"
        >
          USD 561.411
        </Text>
        </Div>
        <Div
        pos="relatvie"
        d="flex"
        flexDir='column'
        style={{
          gap: "15px",
        }} >
        <Text
          textSize="18px"
          textWeight="700"
          fontFamily="Arial"
          textColor="white"
        >
          SOL/USD
        </Text>
        <Text
          textSize="18px"
          textWeight="400"
          fontFamily="Arial"
          textColor="red"
        >
          USD 561.411
        </Text>
        </Div>
        <Div
        pos="relatvie"
        d="flex"
        flexDir='column'
        style={{
          gap: "15px",
        }} >
        <Text
          textSize="18px"
          textWeight="700"
          fontFamily="Arial"
          textColor="white"
        >
          ADA/USD{" "}
        </Text>
        <Text
          textSize="18px"
          textWeight="400"
          fontFamily="Arial"
          textColor="red"
        >
          USD 561.411
        </Text>
        </Div>
        <Div
        pos="relatvie"
        d="flex"
        flexDir='column'
        style={{
          gap: "15px",
        }} >
        <Text
          textSize="18px"
          textWeight="700"
          fontFamily="Arial"
          textColor="white"
        >
          BTC/USD
        </Text>
        <Text
          textSize="18px"
          textWeight="400"
          fontFamily="Arial"
          textColor="white"
        >
          USD 561.411
        </Text>
        </Div>
        <Div
        pos="relatvie"
        d="flex"
        flexDir='column'
        style={{
          gap: "15px",
        }} >
        <Text
          textSize="18px"
          textWeight="700"
          fontFamily="Arial"
          textColor="white"
        >
          ETH/USD{" "}
        </Text>
        <Text
          textSize="18px"
          textWeight="400"
          fontFamily="Arial"
          textColor="white"
        >
          USD 561.411
        </Text>
        </Div>
        <Div
        pos="relatvie"
        d="flex"
        flexDir='column'
        style={{
          gap: "15px",
        }} >
        <Text
          textSize="18px"
          textWeight="700"
          fontFamily="Arial"
          textColor="white"
        >
          DOT/USD
        </Text>
        <Text
          textSize="18px"
          textWeight="400"
          fontFamily="Arial"
          textColor="white"
        >
          USD 561.411
        </Text>
        </Div>
      </Div>
      ),
    },
    EUR: {
      title: "Paris",
    },
    RUB: {
      title: "Tokyo",
    },
    BTC: {
      title: "Tokyo",
    },
    BYN: {
      title: "Tokyo",
    },
    USDT: {
      title: "Tokyo",
    },
  };

  return (
    <div className="tab-container">
      {/* Вкладки */}
      <div className="tab">
        {Object.keys(tabsContent).map((tab) => (
          <button
            key={tab}
            className={`tablinks ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Контент активной вкладки */}
      <Div
      p="50px"
        className="custom-line"
        w="1440px"
        h="101px"
        pos="relative"
        d="flex"
        style={{
          gap: "10px",
        }}
        flexDir="column"
        justify="center"
      >
        <Div pos="relative" d="flex" align="center">
          {tabsContent[activeTab].title}
        </Div>
        
      </Div>
    </div>
  );
};
