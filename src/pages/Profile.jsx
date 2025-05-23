import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../store/reducers/reducer";
import { openModal, closeModal } from "../components/redux/actions/modalActions";
import { Button, Text, Div } from "atomize";
import { useNavigate } from "react-router-dom";
import BottomPanel from "../components/bottomPanel/BottomPanel";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/");
  };

  const handleOpenPanel = (type, title) => {
    dispatch(openModal(type, { title }));
  };

  return (
    <Div bg="white" d="flex" flexDir="column">
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
          менеджер магазина
        </Text>

        <Div d="flex" flexWrap="wrap" gap="0.5rem">
          <Button bg="white" hoverBg="info700" hoverTextColor="white" textWeight="500" textSize="16px" textColor="black"  onClick={() => handleOpenPanel("RECEIVE_GOODS", "Приём товара")}>Приём товара</Button>
          <Button bg="white" hoverBg="info700" hoverTextColor="white" textWeight="500" textSize="16px" textColor="black" onClick={() => handleOpenPanel("WRITE_OFF_GOODS", "Списание товара")}>Списание товара</Button>
          <Button bg="white" hoverBg="info700" hoverTextColor="white" textWeight="500" textSize="16px" textColor="black" onClick={() => handleOpenPanel("ORDER_FORMATION", "Формирование заказа")}>Формирование заказа</Button>
          <Button bg="white" hoverBg="info700" hoverTextColor="white" textWeight="500" textSize="16px" textColor="black" onClick={() => handleOpenPanel("STOCKS", "Остатки")}>Остатки</Button>
          <Button bg="white" hoverBg="info700" hoverTextColor="white" textWeight="500" textSize="16px" textColor="black" onClick={() => handleOpenPanel("HISTORY", "История операций")}>История операций</Button>
        </Div>
      </Div>

      <BottomPanel />
    </Div>
  );
};

export default Profile;
