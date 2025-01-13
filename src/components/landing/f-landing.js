import { Div, Text, Button, Image } from "atomize";
import Link from "../../assets/image-svg/Link.svg";
import Link1 from "../../assets/image-svg/Link1.svg";
import Link2 from "../../assets/image-svg/Link2.svg";
import  { useState } from 'react';

const SixthStep = () => {
    const [borderColor1, setBorderColor1] = useState("rgba(4, 102, 166, 1)");
  const [borderColor2, setBorderColor2] = useState("rgba(4, 102, 166, 1)");
  const [borderColor3, setBorderColor3] = useState("rgba(4, 102, 166, 1)");

  const handleMouseEnter1 = () => {
    setBorderColor1("rgb(40, 58, 71)");
  };
  const handleMouseLeave1 = () => {
    setBorderColor1("rgba(4, 102, 166, 1)");
  };

  const handleMouseEnter2 = () => {
    setBorderColor2("rgb(40, 58, 71)");
  };
  const handleMouseLeave2 = () => {
    setBorderColor2("rgba(4, 102, 166, 1)");
  };

  const handleMouseEnter3 = () => {
    setBorderColor3("rgb(40, 58, 71)");
  };
  const handleMouseLeave3 = () => {
    setBorderColor3("rgba(4, 102, 166, 1)");
  };

  const style = (borderColor) => ({
    borderBottom: "4px solid rgb(45, 74, 114)",
    borderColor: borderColor,
    transition: "border-color 0.3s ease", // Плавный переход для цвета границы
  });
  return (
    <>
      <Div
        pos="relative"
        d="flex"
        flexDir="column"
        w="1440px"
        h="240px"
        bg="rgba(4, 11, 21, 1)"
      >
        <Div
          align="center"
          pos="relative"
          d="flex"
          w="1329px"
          h="193px"
          bg="linear-gradient(267.2deg, #0466A6 4.76%, rgba(29, 36, 48, 0) 102.53%)"
          style={{
            clipPath: "polygon(0 0, 90% 0, 100% 100%, 0 100%)",
          }}
        >
          <Div
            align="center"
            justify="center"
            pos="relative"
            d="flex"
            left="-223px"
            w="683px"
            h="88px"
            style={{
              clipPath: "polygon(0 0, 90% 0, 100% 100%, 0 100%)",
            }}
            bg="linear-gradient(265.29deg, #101C30 16.43%, #0466A6 54.74%);"
          >
            <Text
              pos="relative"
              left="100px"
              fontFamily="Arial"
              textSize=" 50px"
              textWeight="700;"
              textColor="white"
            >
              FAQ
            </Text>
          </Div>
          <Text
            fontFamily="Arial"
            pos="relative"
            left="-150px"
            w="600px"
            textSize=" 18px"
            textWeight="400;"
            textColor="white"
          >
            Изучите наши материалы о том, как начать работу с криптовалютой и
            торговать на криптобирже
          </Text>
        </Div>
      </Div>
      <Div
      pos="relative"
      align="center"
      justify="center"
      d="flex"
      w="1440px"
      h="43px"
      bg="rgba(4, 11, 21, 1)"
      style={{ gap: "0px" }}
    >
      <Button
        border="none"
        bg="rgba(4, 102, 166, 0)"
        style={style(borderColor3)}
        onMouseEnter={handleMouseEnter3}
        onMouseLeave={handleMouseLeave3}
        fontFamily="Inter"
        hoverTextColor="info700"
        textColor="rgb(255, 255, 255)"
        textWeight="500"
        textSize="13.5px"
        rounded="0px"
        w="400px"
        h="43px"
      >
        С чего начать
      </Button>

      <Button
        border="none"
        bg="rgba(4, 102, 166, 0)"
        style={style(borderColor1)}
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}
        fontFamily="Inter"
        hoverTextColor="info700"
        textColor="rgb(255, 255, 255)"
        textWeight="500"
        textSize="13.5px"
        rounded="0px"
        w="400px"
        h="43px"
      >
        Основы торговли
      </Button>

      <Button
        border="none"
        bg="rgba(4, 102, 166, 0)"
        style={style(borderColor2)}
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}
        fontFamily="Inter"
        hoverTextColor="info700"
        textColor="rgb(255, 255, 255)"
        textWeight="500"
        textSize="13.5px"
        rounded="0px"
        w="400px"
        h="43px"
      >
        Чем торговать
      </Button>
    </Div>
      <Div
        bg="rgba(4, 11, 21, 1)"
        pos="relative"
        d="flex"
        align='center'
        justify='center'
        w="1440px"
        h="270px"
        style={{gap:'20px'}}
      >
        <Image w='390px' h='157px' src={Link} alt="link" />
        <Image w='390px' h='157px' src={Link1} alt="link1" />
        <Image w='390px' h='157px' src={Link2} alt="link2" />
      </Div>
    </>
  );
};
export default SixthStep;
