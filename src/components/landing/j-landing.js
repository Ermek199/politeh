import { Div, Text, Image, Button } from "atomize";
import Container1 from "../../assets/image-svg/Container1.svg";
import Container2 from "../../assets/image-svg/Container2.svg";
import Container3 from "../../assets/image-svg/Container3.svg";
import Tess from "../../assets/image-svg/tess.svg.svg";
import Google from "../../assets/image-svg/google.svg";
import Appstor from "../../assets/image-svg/appstore.svg";

const SpanImages = () => {
  return (
    <>
      <Div
        pos="relative"
        d="flex"
        flexDir="column"
        align="center"
        w="1440px"
        h="667px"
        bg="rgba(4, 11, 21, 1)"
      >
        <Div
          w="1200px"
          h="442px"
          d="flex"
          pos="relative"
          style={{ gap: "40px" }}
        >
          <Div
            w="360px"
            h="442px"
            d="flex"
            pos="relative"
            flexDir="column"
            style={{ gap: "15px" }}
          >
            <Image w="360px" h="240px" src={Container1} alt="Container1" />
            <Text
              style={{ lineHeight: "27px" }}
              textWeight="700"
              textColor="white"
              fontFamily="Inter"
              textSize="18px"
            >
              Как выбрать криптобиржу: что нужно новичку, а что опытному
              трейдеру
            </Text>
            <Text
              style={{ lineHeight: "23px" }}
              textWeight="400"
              textColor="white"
              fontFamily="Inter"
              textSize="13px"
            >
              При выборе криптобиржи новички часто ведутся на рекламные
              заявления. Но что действительно важно учесть, а какие критерии не
              так важны. Разбираемся вместе с порталом MYFIN.  
            </Text>
          </Div>
          <Div
            w="360px"
            h="442px"
            d="flex"
            pos="relative"
            flexDir="column"
            style={{ gap: "15px" }}
          >
            <Image w="360px" h="240px" src={Container2} alt="Container2" />
            <Text
              style={{ lineHeight: "27px" }}
              textWeight="700"
              textColor="white"
              fontFamily="Inter"
              textSize="18px"
            >
              Токенизированные активы: объясняем, почему они становятся всё
              популярнее
            </Text>
            <Text
              style={{ lineHeight: "23px" }}
              textWeight="400"
              textColor="white"
              fontFamily="Inter"
              textSize="13px"
            >
              Токенизированные активы – новый тренд в трейдинге и
              инвестировании. Это интересный способ получить выгоду от роста
              курса акций, золота, нефти и других активов с минимальными
              затратами.
            </Text>
          </Div>
          <Div
            w="360px"
            h="442px"
            d="flex"
            pos="relative"
            flexDir="column"
            style={{ gap: "14px" }}
          >
            <Image w="360px" h="240px" src={Container3} alt="Container3" />
            <Text
              style={{ lineHeight: "27px" }}
              textWeight="700"
              textColor="white"
              fontFamily="Inter"
              textSize="18px"
            >
              Рассказываем, как законно не платить налоги от операций с
              криптовалютой
            </Text>
            <Text
              style={{ lineHeight: "23px" }}
              textWeight="400"
              textColor="white"
              fontFamily="Inter"
              textSize="13px"
            >
              Специально для портала Onliner наш юрист подготовил развернутый
              комментарий на самый волнующий вопрос – а что с налогами от
              операций с криптовалютой.
            </Text>
          </Div>
        </Div>
        <Button
          pos="relative"
          top="80px"
          w="251px"
          h="60px"
          hoverBg="rgba(4, 102, 166, 1)"
          textSize="16px"
          border="1px solid"
          borderColor=" rgba(4, 102, 166, 1)"
        >
          ЗАГРУЗИТЬ ЕЩЕ
        </Button>
      </Div>
      <Div
        d="flex"
        flexDir="column"
        pos="relative"
        bg="rgba(4, 11, 21, 1)"
        w="1440px"
        h="838px"
      >
        <Div d="flex" pos="relative" justify="center" style={{ gap: "90px" }}>
          <Div d="flex" pos="relative" flexDir="column" style={{ gap: "20px" }}>
            <Image
              pos="relative"
              right="30px"
              w="200px"
              h="160px"
              src={Tess}
              alt="tess"
            />
            <Image
              pos="relative"
              bottom="30px"
              w="126px"
              h="39px"
              src={Google}
              alt="google"
            />
            <Image
              pos="relative"
              bottom="30px"
              w="126px"
              h="39px"
              src={Appstor}
              alt="Appstore"
            />
          </Div>
          <Div
            w="150px"
            d="flex"
            pos="relative"
            flexDir="column"
            top="50px"
            style={{ gap: "45px" }}
          >
            <Text
              fontFamily="Roboto"
              textWeight="700"
              cursor="pointer"
              textColor="white"
              textSize="16px"
              hoverTextColor="info700"

            >
              ПРОДУКТЫ
            </Text>
            <Text
              fontFamily="Roboto"
              textWeight="500"
              cursor="pointer"
              textColor="white"
              textSize="16px"
              hoverTextColor="info700"

            >
              Быстрый обмен
            </Text>
            <Text
              fontFamily="Roboto"
              textWeight="500"
              cursor="pointer"
              textColor="white"
              textSize="16px"
              hoverTextColor="info700"

            >
              Торговля с плечом
            </Text>
            <Text
              fontFamily="Roboto"
              textWeight="500"
              cursor="pointer"
              textColor="white"
              textSize="16px"
              hoverTextColor="info700"

            >
              Спотовая торговля
            </Text>
          </Div>
          <Div
            w="150px"
            d="flex"
            pos="relative"
            flexDir="column"
            top="50px"
            style={{ gap: "45px" }}
          >
            <Text
              fontFamily="Roboto"
              textWeight="700"
              cursor="pointer"
              textColor="white"
              textSize="16px"
              hoverTextColor="info700"

            >
              ТЕРМИНАЛ
            </Text>
            <Text
              fontFamily="Roboto"
              textWeight="500"
              cursor="pointer"
              textColor="white"
              textSize="16px"
              hoverTextColor="info700"

            >
              Web
            </Text>
            <Text
              fontFamily="Roboto"
              textWeight="500"
              cursor="pointer"
              textColor="white"
              textSize="16px"
              hoverTextColor="info700"

            >
              Windows
            </Text>
            <Text
              fontFamily="Roboto"
              textWeight="500"
              cursor="pointer"
              textColor="white"
              textSize="16px"
              hoverTextColor="info700"

            >
              Android
            </Text>
            <Text
              fontFamily="Roboto"
              textWeight="500"
              cursor="pointer"
              textColor="white"
              textSize="16px"
              hoverTextColor="info700"

            >
              iOS
            </Text>
          </Div>
          <Div
            w="150px"
            d="flex"
            pos="relative"
            flexDir="column"
            top="50px"
            style={{ gap: "45px" }}
          >
            <Text
              fontFamily="Roboto"
              textWeight="700"
              cursor="pointer"
              textColor="white"
              textSize="16px"
              hoverTextColor="info700"

            >
              О НАС
            </Text>
            <Text
              fontFamily="Roboto"
              textWeight="500"
              cursor="pointer"
              textColor="white"
              textSize="16px"
              hoverTextColor="info700"

            >
              Рынки
            </Text>
            <Text
              fontFamily="Roboto"
              textWeight="500"
              cursor="pointer"
              textColor="white"
              textSize="16px"
              hoverTextColor="info700"

            >
              Поддержка
            </Text>
            <Text
              fontFamily="Roboto"
              textWeight="500"
              cursor="pointer"
              textColor="white"
              textSize="16px"
              hoverTextColor="info700"

            >
              FAQ
            </Text>
            <Text
              fontFamily="Roboto"
              textWeight="500"
              cursor="pointer"
              textColor="white"
              textSize="16px"
              hoverTextColor="info700"

            >
              Комиссии
            </Text>
            <Text
              fontFamily="Roboto"
              textWeight="500"
              cursor="pointer"
              textColor="white"
              textSize="16px"
              hoverTextColor="info700"

            >
              Блог
            </Text>
          </Div>
          <Div
            w="150px"
            d="flex"
            pos="relative"
            flexDir="column"
            top="50px"
            style={{ gap: "45px" }}
          >
            <Text
              fontFamily="Roboto"
              textWeight="700"
              cursor="pointer"
              textColor="white"
              textSize="16px"
              hoverTextColor="info700"

            >
              API
            </Text>
            <Text
              fontFamily="Roboto"
              textWeight="500"
              cursor="pointer"
              textColor="white"
              textSize="16px"
              hoverTextColor="info700"

            >
              WebREST API
            </Text>
            <Text
              fontFamily="Roboto"
              textWeight="500"
              cursor="pointer"
              textColor="white"
              textSize="16px"
              hoverTextColor="info700"

            >
              WebSocket Feed API
            </Text>
            <Text
              fontFamily="Roboto"
              textWeight="500"
              cursor="pointer"
              textColor="white"
              textSize="16px"
              hoverTextColor="info700"

            >
              WebSocket Trade API
            </Text>
            <Text
              fontFamily="Roboto"
              textWeight="500"
              cursor="pointer"
              textColor="white"
              textSize="16px"
              hoverTextColor="info700"

            >
              FIX API
            </Text>
          </Div>
        </Div>
      </Div>
    </>
  );
};
export default SpanImages;
