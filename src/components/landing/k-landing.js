import { Div, Text, Image, Button } from "atomize";
import Image1 from "../../assets/image-svg/image1.svg";
import Image2 from "../../assets/image-svg/image2.svg";
import Image3 from "../../assets/image-svg/image3.svg";
import Image4 from "../../assets/image-svg/image4.svg";
import Image5 from "../../assets/image-svg/image5.svg";
import Image6 from "../../assets/image-svg/image6.svg";
import Image7 from "../../assets/image-svg/image7.svg";
import LastImage from '../../assets/image-svg/last-image.svg';

const Footer = () => {
  return (
    <>
      <Div
        d="flex"
        pos="relative"
        top="100px"
        w="1200px"
        align="center"
        justify="space-between"
      >
        <Div d="flex" pos="realtive" style={{ gap: "20px" }}>
          <Button
            w="225px"
            h="50px"
            rounded="5px"
            fontFamily="Roboto"
            textWeight="500"
            border="1px solid"
            borderColor=" rgba(4, 102, 166, 1)"
            hoverBg="rgba(4, 102, 166, 1)"
          >
            Зарегистрироваться
          </Button>
          <Button
            fontFamily="Roboto"
            w="107px"
            h="50px"
            border="1px solid"
            borderColor=" rgba(4, 102, 166, 1)"
            hoverBg="rgba(4, 102, 166, 1)"
            rounded="5px"
          >
            Войти
          </Button>
        </Div>
        <Div d="flex" pos="relative" style={{ gap: "20px" }}>
          <Image cursor="pointer" w="31px" h="31px" src={Image1} alt="image1" />
          <Image cursor="pointer" w="31px" h="31px" src={Image2} alt="Image2" />
          <Image cursor="pointer" w="31px" h="31px" src={Image3} alt="Image3" />
          <Image cursor="pointer" w="31px" h="31px" src={Image4} alt="Image4" />
          <Image cursor="pointer" w="31px" h="31px" src={Image5} alt="Image5" />
          <Image cursor="pointer" w="39px" h="39px" src={Image6} alt="Image6" />
          <Image cursor="pointer" w="30px" h="30px" src={Image7} alt="Image7" />
        </Div>
      </Div>
      <Div
        d="flex"
        pos="relative"
        top="100px"
        w="1200px"
        align="center"
        justify="space-between"
      >
        <Text
          hoverTextColor="info700"
          cursor="pointer"
          fontFamily="Roboto"
          textWeight="700"
          textSize="11px"
          textColor="white"
        >
          ДОГОВОР
        </Text>
        <Text
          hoverTextColor="info700"
          cursor="pointer"
          fontFamily="Roboto"
          textWeight="700"
          textSize="11px"
          textColor="white"
        >
          ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
        </Text>
        <Text
          hoverTextColor="info700"
          cursor="pointer"
          fontFamily="Roboto"
          textWeight="700"
          textSize="11px"
          textColor="white"
        >
          УВЕДОМЛЕНИЕ О РИСКАХ
        </Text>
        <Text
          hoverTextColor="info700"
          cursor="pointer"
          fontFamily="Roboto"
          textWeight="700"
          textSize="11px"
          textColor="white"
        >
          ОБЩАЯ ИНФОРМАЦИЯ
        </Text>
        <Text
          hoverTextColor="info700"
          cursor="pointer"
          fontFamily="Roboto"
          textWeight="700"
          textSize="11px"
          textColor="white"
        >
          ДОКУМЕНТЫ И УСЛОВИЯ
        </Text>
        <Text
          hoverTextColor="info700"
          cursor="pointer"
          fontFamily="Roboto"
          textWeight="700"
          textSize="11px"
          textColor="white"
        >
          Юрисдикции
        </Text>
      </Div>
      <Div d="flex" pos="relative" top="100px" w="1200px" align="center">
        <Text
          fontFamily="Roboto"
          textWeight="400"
          textSize="13px"
          textColor="white"
          style={{lineHeight:'23px'}}
        >
          Информация о рисках <br />
          1. Деятельность, связанная со сделками (операциями) с токенами,
          связана с высоким уровнем риска полной потери денежных средств и иных
          объектов гражданских прав (инвестиций), переданных в обмен на токены
          (в том числе в результате волатильности стоимости токенов; технических
          сбоев (ошибок); совершения противоправных действий, включая хищение).
          <br />
          2. Помните, что токены не являются средством платежа и не
          обеспечиваются государством.
          <br />
          3. Правовое регулирование сделок с токенами не имеет единообразного
          подхода, и последствия совершения таких сделок могут иметь разную
          правовую оценку в различных государствах.
          <br />
          4. Используемые технологии (в том числе технология реестра блоков
          транзакций (блокчейн), иной распределенной информационной системы и
          аналогичные ей технологии) не исключают рисков технических сбоев и
          ошибок в работе.
        </Text>
      </Div>
      <Div d="flex" justify='center' bottom='0' zIndex='0' pos="absolute" h='36px'  w="1440px" align="center" bg='rgba(255, 255, 255, 1)'>
       
            <Image pos='relative' d='flex' zIndex='999' w="582px" h="36px"  src={LastImage} alt='lastImage'/>

        
      </Div>
    </>
  );
};
export default Footer;
