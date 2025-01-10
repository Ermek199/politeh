import { Text, Div, Image, Switch, Dropdown, Button } from "atomize";
import Triangle from "../../assets/image-svg/triangle.svg";
import Tess from "../../assets/image-svg/tess.svg.svg";
import Switches from "./features/switch";
import VerticalDivider from "../../assets/image-svg/VerticalDivider.svg";
import Shit from "../../assets/image-svg/shit.svg.svg";
import Group_microsoft from "../../assets/image-svg/group_microsoft.svg";
import PHone from "../../assets/image-svg/phone.svg";
import Google from '../../assets/image-svg/google.svg';
import Appstore from '../../assets/image-svg/appstore.svg';
import Star37 from '../../assets/image-svg/star39.svg';
import Start47 from '../../assets/image-svg/star47.svg';
import Tesla from '../../assets/image-svg/tesla.svg';

function FirstStep() {
  return (
    <>
      <Div
        pos="absolute"
        d="flex"
        flexDir="column"
        bg="rgba(4, 11, 21, 1)"
        w="1440px"
        h="766px"
        align="center"
      >
        <Image
          w="990px"
          pos="absolute"
          h="766px"
          left="450px"
          src={Triangle}
          alt="triangle"
        />
        <Image
          pos="absolute"
          left="-31px"
          top="20px"
          w="200px"
          h="160px"
          src={Tess}
          alt="tess"
        />
        <Div pos="relative" d="flex" align="center" style={{ gap: "1rem" }}>
          <Image
            w="1px"
            h="160px"
            src={VerticalDivider}
            alt="VerticalDivider"
          />
          <Switches />
          <Div pos="relative" d="flex" align="center" style={{ gap: "1rem" }}>
            <Dropdown
              border="0px solid"
              fontFamily="Roboto"
              textWeight="500"
              textSize="16px"
              align="center"
              w="79px"
              h="38px"
              targetHover
              menu={undefined}
              bg="rgba(33, 84, 155, 0)"
              hoverBg="rgba(4, 102, 166, 1)"
              textColor="white"
              justify="center"
            >
              Рынки
            </Dropdown>
            <Dropdown
              border="0px solid"
              fontFamily="Roboto"
              textWeight="500"
              textSize="16px"
              align="center"
              w="101px"
              h="38px"
              targetHover
              menu={undefined}
              bg="rgba(33, 84, 155, 0)"
              textColor="white"
              hoverBg="rgba(4, 102, 166, 1)"
              justify="center"
            >
              Продукты
            </Dropdown>
            <Dropdown
              border="0px solid"
              fontFamily="Roboto"
              textWeight="500"
              textSize="16px"
              align="center"
              w="109px"
              h="38px"
              targetHover
              menu={undefined}
              bg="rgba(33, 84, 155, 0)"
              textColor="white"
              hoverBg="rgba(4, 102, 166, 1)"
              justify="center"
            >
              Обучение
            </Dropdown>
            <Dropdown
              border="0px solid"
              fontFamily="Roboto"
              textWeight="500"
              textSize="16px"
              align="center"
              w="fit-content"
              h="38px"
              targetHover
              menu={undefined}
              bg="rgba(33, 84, 155, 0)"
              textColor="white"
              hoverBg="rgba(4, 102, 166, 1)"
              justify="center"
            >
              Курсы криптовалют
            </Dropdown>
            <Dropdown
              border="0px solid"
              fontFamily="Roboto"
              textWeight="500"
              textSize="16px"
              align="center"
              w="57px"
              targetHover
              menu={undefined}
              bg="rgba(33, 84, 155, 0)"
              textColor="white"
              hoverBg="rgba(4, 102, 166, 1)"
              justify="center"
            >
              RU
            </Dropdown>
            <Button
              fontFamily="Roboto"
              textWeight="500"
              textSize="16px"
              w="200px"
              h="50px"
              textColor="white"
              bg="rgba(4, 102, 166, 1)"
              hoverBg="rgba(4, 102, 166, 0)"
              borderColor="rgba(4, 102, 166, 1)"
              border="2px solid"
            >
              Зарегистрироваться
            </Button>
            <Button
              fontFamily="Roboto"
              textWeight="500"
              textSize="16px"
              w="200px"
              h="50px"
              textColor="white"
              borderColor="rgba(4, 102, 166, 1)"
              border="2px solid"
              hoverBg="rgba(4, 102, 166, 1)"
              bg="rgba(4, 102, 166, 0)"
            >
              Войти
            </Button>
          </Div>
        </Div>
        <Div pos="relative" d="flex" align="center" style={{ gap: "2rem" }} top="20px">
          <Div
            pos="relative"
            d="flex"
            flexDir="column"
            maxW="670px"
            style={{ gap: "1.5rem" }}
          >
            <Div
              pos="relative"
              d="flex"
              align="center"
              style={{ gap: "0.5rem" }}
            >
              <Image w="18px" h="21px" src={Shit} alt="Shit" />
              <Text
                style={{ letterSpacing: "2px" }}
                fontFamily="Roboto"
                textWeight="400"
                textSize="16px"
                textColor="white"
              >
                ПОЛНОСТЬЮ РЕГУЛИРУЕМАЯ КРИПТОБИРЖА
              </Text>
            </Div>
            <Text
              style={{ letterSpacing: "0.5px" }}
              fontFamily="Roboto"
              textWeight="300"
              textSize="50px"
              textColor="white"
            >
              Открой для себя
            </Text>
            <Text
              style={{ letterSpacing: "0.5px" }}
              fontFamily="Roboto"
              textWeight="700"
              textSize="50px"
              textColor="white"
            >
              возможности криптовалют
            </Text>
            <Text
              style={{ lineHeight: "33px" }}
              fontFamily="Roboto"
              textWeight="400"
              w="445px"
              textSize="22px"
              textColor="white"
            >
              Криптобиржа для решения всех ваших задач: от обмена до торговли с
              плечом
            </Text>
            <Button
              fontFamily="Roboto"
              textWeight="500"
              textSize="16px"
              w="183px"
              h="60px"
              textColor="white"
              borderColor="rgba(4, 96, 157, 1)"
              border="2px solid"
              hoverBg="rgba(4, 102, 166, 1)"
              bg="rgba(4, 102, 166, 0)"
            >
              Создать аккаунт
            </Button>
            <Div
              pos="relative"
              d="flex"
              flexDir="column"
              style={{ gap: "0.5rem" }}
            >
              <Text
                textColor="white"
                fontFamily="Roboto"
                textWeight="400"
                textSize="15px"
              >
                или{" "}
                <Text
                  tag="a"
                  fontFamily="Roboto"
                  textWeight="400"
                  textSize="15px"
                  textColor="rgba(4, 102, 166, 1)"
                  hoverTextColor="darkblue"
                  cursor="pointer"
                  textDecor="none"
                  hoverTextDecor="underline"
                >
                  перейти на демо
                </Text>
              </Text>
              <Text
                textColor="white"
                fontFamily="Roboto"
                textWeight="400"
                textSize="15px"
              >
                *Начните с любой суммы
              </Text>
            </Div>
          </Div>
       
            <Image  w="69px" h="330px" src={Group_microsoft} alt="Group_microsoft" />
          
          <Div>
            <Image w="215px" h="430px" src={PHone} alt="PHone" />
            <Div pos="relative" d="flex">
             
            </Div>
          </Div>
          <Image w="192px" h="342px" src={Tesla} alt="Tesla" />
        </Div>
        <Div pos="relative" d="flex" align="center"  style={{ gap: "1rem" }} left="280px" top="40px">
          <Div pos="relative" d="flex" flexDir="column" align='center' style={{ gap: "0.5rem" }}>
                <Image w="126px" h="39px" src={Google} alt="Google" />
                <Image w="96px" h="34px" src={Star37} alt="Star37" />
              </Div>
              <Div pos="relative" d="flex" flexDir="column" align='center' style={{ gap: "0.5rem" }}>
                <Image w="126px" h="39px" src={Appstore} alt="Appstore" />
                <Image w="96px" h="34px" src={Start47} alt="Start47" />
              </Div> 
              </Div>
      </Div>
    </>
  );
}

export default FirstStep;
