import { Div, Text, Image, Input } from "atomize";
import CIcon from "../../assets/image-svg/c.svg";
import MIcon from "../../assets/image-svg/m.svg";
import IIcon from "../../assets/image-svg/i.svg";
import Onliner from "../../assets/image-svg/onliner.svg";
import Fork from "../../assets/image-svg/fork.svg";
import Rbk from "../../assets/image-svg/rbk.svg";
import Minfin from "../../assets/image-svg/minfin.svg";
import Yahoo from "../../assets/image-svg/yahoo.svg";

import React, { useState } from "react";

const SmiImage = () => {
  const questions = [
    "Какие комиссии на Free2ex?",
    "Зачем нужна дополнительная верификация, обязательно ли ее проходить?",
    "Какие документы нужны для верификации аккаунта?",
    "Почему вы пишете, что FREE2EX – регулируемая криптобиржа?",
    "Что такое токенизированные активы?",
    "Есть ли у вас торговля деривативами?",
    "Резидентам каких стран доступна торговля и инвестиции на FREE2EX?",
    "Нужно ли подтверждать источник происхождения средств при пополнении аккаунта?",
    "Подходит ли FREE2EX профессиональным трейдерам?",
    "Я юридическое лицо – могу ли я зарегистрироваться и торговать, какие есть нюансы?",
  ];

  // Массив состояний для чекбоксов
  const [checkboxes, setCheckboxes] = useState(Array(10).fill(false));

  // Обработчик изменения состояния чекбокса
  const toggleCheckbox = (index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <>
      <Div
        pos="relative"
        w="1440px"
        h="410px"
        bg="rgba(4, 11, 21, 1)"
        style={{
          borderTop: "1px solid",
          borderBottom: "1px solid",
          borderColor: "rgba(49, 64, 85, 1)",
        }}
      >
        <Image
          pos="absolute"
          top="25px"
          left="185px"
          w="256px"
          h="350px"
          src={CIcon}
          alt="c"
        />
        <Image
          pos="absolute"
          top="25px"
          left="548px"
          w="295px"
          h="350px"
          src={MIcon}
          alt="c"
        />
        <Image
          pos="absolute"
          top="25px"
          left="952px"
          w="254px"
          h="350px"
          src={IIcon}
          alt="c"
        />
        <Div
          pos="relative"
          d="flex"
          flexDir="column"
          p={{ t: "54px", l: "120px" }}
          style={{ gap: "80px" }}
        >
          <Text
            fontFamily="Arial"
            textSize="34px"
            textWeight="700"
            textColor="white"
          >
            О нас пишут
          </Text>
          <Div
            w="1440px"
            pos="relative"
            d="flex"
            align="center"
            justify="center"
            left="-120px"
            style={{ gap: "80px" }}
          >
            <Image w="168px" h="42px" src={Onliner} alt="onliner" />
            <Image w="187px" h="45px" src={Fork} alt="fork" />
            <Image w="121px" h="51px" src={Rbk} alt="rbk" />
            <Image w="195px" h="43px" src={Minfin} alt="minfin" />
            <Image w="182px" h="92px" src={Yahoo} alt="yahoo" />
          </Div>
        </Div>
      </Div>
      <Div bg="rgba(4, 11, 21, 1)" pos="relative" w="1440px" h="100px">
        <Text
          pos="relative"
          zIndex="999"
          top="90px"
          left="140px"
          fontFamily="Arial"
          textSize="34px"
          textWeight="700"
          textColor="white"
        >
          Вопрос-ответ
        </Text>
      </Div>
      <Div
        bg="rgba(4, 11, 21, 1)"
        pos="relative"
        d="flex"
        flexDir="column"
        align="center"
        justify="center"
        w="1440px"
        h="956px"
      >
        {questions.map((question, index) => (
          <Div
            key={index}
            bg="rgba(4, 11, 21, 1)"
            w="1160px"
            h="82px"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid rgba(49, 64, 85, 1)",
              borderBottom: "1px solid rgba(49, 64, 85, 1)",
              padding: "10px",
            }}
          >
            <Text
              fontFamily="Inter"
              textSize="18px"
              textWeight="700"
              textColor="white"
            >
              {question}
            </Text>
            <Input
              type="checkbox"
              checked={checkboxes[index]}
              onChange={() => toggleCheckbox(index)}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid black",
                backgroundColor: checkboxes[index]
                  ? "black"
                  : "rgba(49, 64, 85, 1)",
                appearance: "none",
                outline: "none",
                cursor: "pointer",
              }}
            />
          </Div>
        ))}
      </Div>
    </>
  );
};
export default SmiImage;
