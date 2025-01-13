import { Div, Image, Text } from "atomize";
import BgLeft from "../../assets/image-svg/bg-left.svg";
import Shild from "../../assets/image-svg/shit.svg.svg";
import Kilit from "../../assets/image-svg/kilit.svg";
import Earth from "../../assets/image-svg/earth.svg";
import Percent from "../../assets/image-svg/percent.svg";

const FourthStep = () => {
  return (
    <Div
      pos="relative"
      d="flex"
      flexDir="column"
      w="1440px"
      h="536px"
      bg="rgba(4, 11, 21, 1)"
    >
      <Image
        zIndex="0"
        pos="absolute"
        left="0px"
        w="1075px"
        h="535px"
        src={BgLeft}
        alt="first-image"
      />
      <Text
        top="73px"
        left="120px"
        pos="relative"
        zIndex="2"
        textColor="white"
        textSize="34px"
        textWeight="700"
      >
        Криптобиржа FREE2EX
      </Text>
      <Div top="118px" left="120px" pos="relative" d="flex" style={{ gap: "2rem" }}>
        <Div pos="relative" d="flex" flexDir="column" style={{ gap: "2rem" }}>
          <Image w="25px" h="29px" src={Shild} alt="first-image" />
          <Text
            fontFamily="Arial"
            textWeight="700"
            textColor="white"
            textSize="24px"
          >
            Надежно
          </Text>
          <Text
            style={{ lineHeight: "26px" }}
            fontFamily="Arial"
            textWeight="400"
            textColor="white"
            textSize="16px"
            w="274px"
            h="173px"
          >
            Законодательно контролируемый уставный фонд, призванный обеспечить
            выполнение обязательств перед клиентами. С нами работают Visa,
            Mastercard, SWIFT и SEPA – гарантия четких бизнес-процессов
          </Text>
        </Div>
        <Div pos="relative" d="flex" flexDir="column" style={{ gap: "2rem" }}>
          <Image w="25px" h="29px" src={Kilit} alt="first-image" />
          <Text
            fontFamily="Arial"
            textWeight="700"
            textColor="white"
            textSize="24px"
          >
            Безопасно
          </Text>
          <Text
            style={{ lineHeight: "26px" }}
            fontFamily="Arial"
            textWeight="400"
            textColor="white"
            textSize="16px"
            w="274px"
            h="173px"
          >
            Обязательный аудит компаниями Большой четверки (такими как Deloitte,
            EY, PWC, KPMG).<br></br> Средства клиентов надежно защищены
            многоуровневой системой безопасности
          </Text>
        </Div>
        <Div pos="relative" d="flex" flexDir="column" style={{ gap: "2rem" }}>
          <Image w="25px" h="29px" src={Earth} alt="first-image" />
          <Text
            fontFamily="Arial"
            textWeight="700"
            textColor="white"
            textSize="24px"
          >
            Удобно
          </Text>
          <Text
            style={{ lineHeight: "26px" }}
            fontFamily="Arial"
            textWeight="400"
            textColor="white"
            textSize="16px"
            w="274px"
            h="173px"
          >
            Поддержка 24/7. Пополнение и вывод USD, EUR, RUB и BYN из любой
            точки мира: карты 24/7, SWIFT и SEPA 24/5.
          </Text>
        </Div>
        <Div pos="relative" d="flex" flexDir="column" style={{ gap: "2rem" }}>
          <Image w="25px" h="29px" src={Percent} alt="first-image" />
          <Text
            fontFamily="Arial"
            textWeight="700"
            textColor="white"
            textSize="24px"
          >
            Выгодно
          </Text>
          <Text
            style={{ lineHeight: "26px" }}
            fontFamily="Arial"
            textWeight="400"
            textColor="white"
            textSize="16px"
            w="274px"
            h="173px"
          >
            Возможность начать торговлю с любой суммы с комиссией от 0%. Узкие
            спреды. Низкие комиссии по фиату. 300+ инструментов для инвестиций и
            торговли
          </Text>
        </Div>
      </Div>
    </Div>
  );
};
export default FourthStep;
