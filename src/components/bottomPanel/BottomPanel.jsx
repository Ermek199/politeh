import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Div, Text, Icon } from "atomize";
import { closeModal } from "../redux/actions/modalActions";

import ReceiveGoodsPanel from "./Panels/ReceiveGoodsPanel";
import WriteOffPanel from "./Panels/WriteOffPanel";
import OrderPanel from "./Panels/OrderPanel";
import StockPanel from "./Panels/StockPanel";
import HistoryPanel from "./Panels/HistoryPanel";

const PANEL_COMPONENTS = {
  RECEIVE_GOODS: ReceiveGoodsPanel,
  WRITE_OFF_GOODS: WriteOffPanel,
  ORDER_FORMATION: OrderPanel,
  STOCKS: StockPanel,
  HISTORY: HistoryPanel,
};

const BottomPanel = () => {
  const dispatch = useDispatch();
  const { modalType, modalProps } = useSelector((state) => state.modal);

  if (!modalType) return null;

  const PanelComponent = PANEL_COMPONENTS[modalType];

  return (
    <Div
      pos="fixed"
      top="63px"
      h="calc(100% - 63px)"
      left="0"
      right="0"
      bg="white"
      border={{ t: "1px solid" }}
      borderColor="gray400"
      p="1rem"
      shadow="2"
      zIndex="1000"
      overflow="auto"
    >
      <Div d="flex" justify="space-between" align="center" m={{ b: "0.5rem" }}>
        <Text textSize="subheader">{modalProps?.title || ""}</Text>
        <Icon cursor="pointer" onClick={() => dispatch(closeModal())} name="Close" size="40px" />
      </Div>

      {PanelComponent ? <PanelComponent {...modalProps} /> : null}
    </Div>
  );
};

export default BottomPanel;
