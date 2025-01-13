import { Div, Text, Button, Image } from "atomize";
import Human from "../../assets/image-svg/human.svg";
import Walet from "../../assets/image-svg/walet.svg";
import Shild from "../../assets/image-svg/shit.svg.svg";
import Tess from "../../assets/image-svg/tess.svg.svg";

const SeventhStep = () => {
  return (
    <>
      <Div
        w="1440px"
        h="638px"
        pos="relative"
        d="flex"
        flexDir="column"
        bg="rgba(4, 11, 21, 1)"
        p={{ t: "85px", l: "120px" }}
      >
        <Text
          fontFamily="Arial"
          textWeight="400"
          textSize="34px"
          textColor="white"
          style={{ letterSpacing: "0.5px" }}
        >
          Выполните простые шаги,
        </Text>
        <Text
          fontFamily="Arial"
          w="311px"
          textWeight="700"
          textSize="34px"
          textColor="white"
          style={{ lineHeight: "48px", letterSpacing: "0.5px" }}
        >
          чтобы начать уже сейчас:
        </Text>
        <Div pos="relative" d="flex" style={{ gap: "20px" }}>
          <Div
            hoverBg="rgba(11, 29, 53, 1)"
            pos="relative"
            d="flex"
            flexDir="column"
            w="290px"
            h="420px"
            style={{ gap: "40px" }}
            p={{ t: "20px", l: "20px" }}
          >
            <Image w="39px" h="44px" src={Human} alt="human" />
            <Text
              textWeight="700"
              textSize="20px"
              textColor="white"
              fontFamily="Arial"
            >
              ШАГ 1
            </Text>
            <Text
              w="226px"
              textWeight="400"
              textSize="18px"
              textColor="white"
              fontFamily="Arial"
              style={{ lineHeight: "25px", letterSpacing: "0.5px" }}
            >
              Пройдите регистрацию и начните свой путь в мире криптовалют и
              торговли.
            </Text>
            <Button
              w="232px"
              h="50px"
              border="1px solid"
              borderColor=" rgba(4, 102, 166, 1)"
              bg=" rgba(4, 102, 166, 0)"
            >
              Зарегистрироваться
            </Button>
          </Div>
          <Div
            hoverBg="rgba(11, 29, 53, 1)"
            pos="relative"
            d="flex"
            flexDir="column"
            w="290px"
            h="420px"
            style={{ gap: "32px" }}
            p={{ t: "20px", l: "20px" }}
          >
            <Image w="39px" h="44px" src={Human} alt="human" />
            <Image top='60px' left='30px' pos='absolute' w="18px" h="21px" src={Shild} alt="human" />
            <Text
              textWeight="700"
              textSize="20px"
              textColor="white"
              fontFamily="Arial"
            >
              ШАГ 2
            </Text>
            <Text
              w="226px"
              textWeight="400"
              textSize="18px"
              textColor="white"
              fontFamily="Arial"
              style={{ lineHeight: "25px", letterSpacing: "0.5px" }}
            >
              Пройдите верификацию, чтобы обезопасить свои средства и получить
              больше возможностей
            </Text>
            <Button
              w="232px"
              h="50px"
              border="1px solid"
              borderColor=" rgba(4, 102, 166, 1)"
              bg=" rgba(4, 102, 166, 0)"
            >
              Пройти верификацию
            </Button>
          </Div>
          <Div
            hoverBg="rgba(11, 29, 53, 1)"
            pos="relative"
            d="flex"
            flexDir="column"
            w="290px"
            h="420px"
            style={{ gap: "40px" }}
            p={{ t: "20px", l: "20px" }}
          >
            <Image w="39px" h="44px" src={Walet} alt="walet" />
            <Text
              textWeight="700"
              textSize="20px"
              textColor="white"
              fontFamily="Arial"
            >
              ШАГ 3
            </Text>
            <Text
              w="226px"
              textWeight="400"
              textSize="18px"
              textColor="white"
              fontFamily="Arial"
              style={{ lineHeight: "25px", letterSpacing: "0.5px" }}
            >
              Пополните свой кошелек на Free2ex удобным для вас способом.
            </Text>
            <Button
              w="232px"
              h="50px"
              border="1px solid"
              borderColor=" rgba(4, 102, 166, 1)"
              bg=" rgba(4, 102, 166, 0)"
            >
              Пополнить Ewallet
            </Button>
          </Div>
          <Div
            hoverBg="rgba(11, 29, 53, 1)"
            pos="relative"
            d="flex"
            flexDir="column"
            w="290px"
            h="420px"
            style={{ gap: "10px" }}
            p={{ t: "20px", l: "20px" }}
          >
            <Image
              left="-50px"
              top="-20px"
              pos="relative"
              w="170px"
              h="136px"
              src={Tess}
              alt="tess"
            />
            <Text
              top="-60px"
              pos="relative"
              textWeight="700"
              textSize="20px"
              textColor="white"
              fontFamily="Arial"
            >
              ШАГ 4
            </Text>
            <Text
              top="-40px"
              pos="relative"
              w="226px"
              textWeight="400"
              textSize="18px"
              textColor="white"
              fontFamily="Arial"
              style={{ lineHeight: "25px", letterSpacing: "0.5px" }}
            >
              Теперь для вас открыты возможности торговли. Пора начинать!
            </Text>
            <Button
              w="232px"
              h="50px"
              border="1px solid"
              borderColor=" rgba(4, 102, 166, 1)"
              bg=" rgba(4, 102, 166, 0)"
            >
              Начать торговать
            </Button>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default SeventhStep;
