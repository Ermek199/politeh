import { Div, Image, Text, Button } from "atomize";
import BgAmplitude from "../../assets/image-svg/bgAmplitude.svg";
import Visa from "../../assets/image-svg/visa.svg";
import Master from "../../assets/image-svg/master.svg";
import PhotoA from "../../assets/image-svg/1photo.svg";
import PhotoB from "../../assets/image-svg/2photo.svg";
import PhotoC from "../../assets/image-svg/3photo.svg";
import PhotoD from "../../assets/image-svg/4photo.svg";
import Microsoft from "../../assets/image-svg/microsoft.svg";
import Tesla from "../../assets/image-svg/tesla1.svg";
import Amazon from "../../assets/image-svg/amazon.svg";
import Apple from "../../assets/image-svg/apple1.svg";
import XIcon from "../../assets/image-svg/x.svg";
import SIcon from "../../assets/image-svg/s.svg";
import PIcon from "../../assets/image-svg/p.svg";
import OIcon from "../../assets/image-svg/o.svg";
import Bitcoin from "../../assets/image-svg/bitcoin.svg";

const FifthStep = () => {
  return (
    <Div
      pos="relative"
      d="flex"
      flexDir="column"
      w="1440px"
      h="1350px"
      bg="rgba(4, 11, 21, 1)"
    >
      <Image
        pos="absolute"
        left="0px"
        top="546px"
        w="1432px"
        h="800px"
        src={BgAmplitude}
        alt="BgAmplitude"
      />
      <Div pos="relative" d="flex" flexDir="column" top="16px" left="120px">
        <Text
          textColor="white"
          textSize="34px"
          textWeight="700"
          fontFamily="Arial"
        >
          Широкая линейка продуктов
        </Text>
        <Div pos="relative" d="flex" top="48px" style={{ gap: "20px" }}>
          <Div
            style={{ gap: "30px" }}
            p={{ l: "28px", t: "65px" }}
            pos="relative"
            d="flex"
            flexDir="column"
            w="388px"
            h="585px"
            bg="rgba(11, 29, 53, 1)"
          >
            <Div pos="relative" align="center" d="flex" style={{ gap: "30px" }}>
              <Image w="52px" h="16px" src={Visa} alt="Visa" />
              <Image w="28px" h="18px" src={Master} alt="Master" />
            </Div>
            <Button
              w="152px"
              h="37px"
              rounded="6px"
              border="1px solid"
              textColor="white"
              fontFamily="Arial"
              textWeight="400"
              textSize="16px"
              borderColor="rgba(89, 20, 171, 1)"
              bg="rgba(89, 20, 171, 0)"
            >
              Быстрый обмен
            </Button>
            <Text
              textColor="white"
              fontFamily="Arial"
              w="234px"
              textSize="24px"
              textWeight="700"
              style={{ lineHeight: "32px" }}
            >
              Покупка Bitcoin банковской картой
            </Text>
            <Text
              w="313px"
              h="109px"
              textColor="white"
              fontFamily="Arial"
              textWeight="400"
              textSize="16px"
              style={{ lineHeight: "23px", letterSpacing: "0.5px" }}
            >
              Если вы хотите купить Bitcoin, Ethereum, Litecoin или Tether с
              использованием банковской карты и не думать о сложных биржевых
              механизмах, вам сюда.
            </Text>
            <Div pos="relative" d="flex" align="center" h="150px">
              <Button
                w="180px"
                h="46px"
                rounded="6px"
                textColor="white"
                fontFamily="Arial"
                textWeight="400"
                textSize="16px"
                bg="rgba(4, 102, 166, 1)"
              >
                Обменять сейчас
              </Button>
            </Div>
          </Div>
          <Div
            style={{ gap: "25px" }}
            p={{ l: "28px", t: "50px" }}
            pos="relative"
            d="flex"
            flexDir="column"
            w="388px"
            h="585px"
            bg="rgba(11, 29, 53, 1)"
          >
            <Div pos="relative" d="flex" align="center" style={{ gap: "30px" }}>
              <Image w="24px" h="24px" src={PhotoA} alt="photo1" />
              <Image w="38px" h="38px" src={PhotoB} alt="photo2" />
              <Image w="30px" h="30px" src={PhotoC} alt="photo3" />
              <Image w="23px" h="23px" src={PhotoD} alt="photo4" />
            </Div>
            <Button
              w="175px"
              h="37px"
              rounded="6px"
              border="1px solid"
              textColor="white"
              fontFamily="Arial"
              textWeight="400"
              textSize="16px"
              borderColor="rgba(89, 20, 171, 1)"
              bg="rgba(89, 20, 171, 0)"
            >
              Спотовая торговля
            </Button>
            <Text
              textColor="white"
              fontFamily="Arial"
              w="294px"
              textSize="24px"
              textWeight="700"
              style={{ lineHeight: "32px" }}
            >
              Инвестиции и торговля криптовалютой
            </Text>
            <Text
              w="313px"
              h="109px"
              textColor="white"
              fontFamily="Arial"
              textWeight="400"
              textSize="16px"
              style={{ lineHeight: "23px", letterSpacing: "0.5px" }}
            >
              Если вы хотите инвестировать в Биткоин или сотни других
              криптоактивов, выбирайте платформу для спотовой торговли.
              Максимальная надежность и продвинутый инструментарий, который
              подойдет как новичку, так и опытному трейдеру.
            </Text>
            <Div pos="relative" d="flex" align="center" h="180px">
              <Button
                w="177px"
                h="46px"
                rounded="6px"
                textColor="white"
                fontFamily="Arial"
                textWeight="400"
                textSize="16px"
                bg="rgba(4, 102, 166, 1)"
              >
                Начать торговать
              </Button>
            </Div>
          </Div>
          <Div
            style={{ gap: "20px" }}
            p={{ l: "28px", t: "50px" }}
            pos="relative"
            d="flex"
            flexDir="column"
            w="388px"
            h="585px"
            bg="rgba(11, 29, 53, 1)"
          >
            <Div align="center" pos="relative" d="flex" style={{ gap: "30px" }}>
              <Image w="94px" h="24px" src={Microsoft} alt="Microsoft" />
              <Image w="33px" h="33px" src={Tesla} alt="Tesla" />
              <Image w="67px" h="25px" src={Amazon} alt="Amazon" />
              <Image w="26px" h="26px" src={Apple} alt="Apple" />
            </Div>
            <Button
              w="173px"
              h="37px"
              rounded="6px"
              border="1px solid"
              textColor="white"
              fontFamily="Arial"
              textWeight="400"
              textSize="16px"
              borderColor="rgba(89, 20, 171, 1)"
              bg="rgba(89, 20, 171, 0)"
            >
              Торговля с плечом
            </Button>
            <Text
              textColor="white"
              fontFamily="Arial"
              w="234px"
              textSize="24px"
              textWeight="700"
              style={{ lineHeight: "32px" }}
            >
              Торговля токенизированными активами
            </Text>
            <Text
              w="313px"
              h="109px"
              textColor="white"
              fontFamily="Arial"
              textWeight="400"
              textSize="16px"
              style={{ lineHeight: "23px", letterSpacing: "0.5px" }}
            >
              Если вы не хотите ограничивать собственные возможности торговли
              размером депозита, используйте по- максимуму силу левереджа.
              Пользуйтесь заемными средствами и получите доступ к мировому
              финансовому рынку, чтобы кратно преумножать капитал
            </Text>
            <Div pos="relative" d="flex" align="center" h="180px" >
              <Button
                w="180px"
                h="46px"
                rounded="6px"
                textColor="white"
                fontFamily="Arial"
                textWeight="400"
                textSize="16px"
                bg="rgba(4, 102, 166, 1)"
              >
                Обменять сейчас
              </Button>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div  pos="relative" d="flex" flexDir="column" align="center" top="200px" style={{ gap: "60px" }}>
        <Text
          textColor="white"
          fontFamily="Arial"
          textWeight="400"
          textSize="50px"
          style={{ letterSpacing: "0.5px" }}
        >
          Начните торговать сейчас
        </Text>
        <Button
          w="235px"
          h="60px"
          rounded="6px"
          textColor="white"
          fontFamily="Arial"
          textWeight="400"
          textSize="16px"
          bg="rgba(4, 102, 166, 1)"
        >
          Зарегистрироваться
        </Button>
        <Div maxH="500px" pos="relative" d="flex" style={{ gap: "32px" }}>
        <Image pos="relative" p={{t:"80px"}} w="140px" h="143px" src={XIcon} alt="XIcon" />
        <Image w="162px" h="175px" src={SIcon} alt="SIcon" />
        <Image pos="relative" p={{t:"80px"}} w="158px" h="146px" src={PIcon} alt="PIcon" />
        <Image w="151px" h="154px" src={OIcon} alt="OIcon" />
        <Image pos="relative" m={{t:"-80px"}} w="161px" h="169px" src={Bitcoin} alt="Bitcoin" />
      </Div>
      </Div>
     
    </Div>
  );
};
export default FifthStep;
