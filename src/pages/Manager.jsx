import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../store/reducers/reducer";
import { Button, Text, Div } from "atomize";
import { useNavigate } from "react-router-dom";
import { openModal } from "../components/redux/actions/modalActions";
import BottomPanelManager from "../components/bottomPanel/BottomPanelManager";

const Manager = () => {
  const dispatch = useDispatch();

  const handleOpen = (type, title) => {
    dispatch(openModal(type, { title }));
  };

  return (
    <Div bg="white" d="flex" flexDir="column">
      <BottomPanelManager/>
      <Div
        w="100%"
        h="63px"
        border="2px solid"
        borderColor="#D8DADD"
        d="flex"
        align="center"
        justify="space-between"
        p={{ x: "1rem" }}
        overflowX="auto"
      >
        <Text tag="h2" textSize="header" m={{ r: "1rem" }}>
          менеджер склада
        </Text>

        <Div d="flex" flexWrap="wrap" gap="0.5rem">
          <Button
            h="40px"
            textSize="body"
            p={{ x: "1rem" }}
            align="center"
            justify="center"
            bg="white"
            textColor="black"
            hoverBg="#3477D52E"
            onClick={() =>
              handleOpen("WRITE_OFF_APPROVAL", "Согласование списаний")
            }
          >
           Остаток на складе
          </Button>

          <Button
            h="40px"
            textSize="body"
            p={{ x: "1rem" }}
            align="center"
            justify="center"
            bg="white"
            textColor="black"
            hoverBg="#3477D52E"
            onClick={() => handleOpen("ORDER_APPROVAL", "Согласование заказов")}
          >
            Согласование заказов
          </Button>

          <Button
            h="40px"
            textSize="body"
            p={{ x: "1rem" }}
            align="center"
            justify="center"
            bg="white"
            textColor="black"
            hoverBg="#3477D52E"
            onClick={() => handleOpen("LIMITS", "Лимиты")}
          >
            Лимиты
          </Button>

          <Button
            h="40px"
            textSize="body"
            p={{ x: "1rem" }}
            align="center"
            justify="center"
            bg="white"
            textColor="black"
            hoverBg="#3477D52E"
            onClick={() => handleOpen("STORE_STOCKS", "Остаток в магазине")}
          >
            Остаток в магазине
          </Button>
        </Div>
      </Div>

      <Div>{/* Основной контент ниже */}</Div>
    </Div>
  );
};
export default Manager;
