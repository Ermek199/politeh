import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Div, Text, Icon } from "atomize";
import { closeModal } from "../redux/actions/modalActions";

import WriteOffApprovalPanel from "./panels-manager/WriteOffApprovalPanel";
import CreateProductsPanel from "./panels-manager/CreateProductsPanel";
import DepoStocksPanel from "./panels-manager/DepoStocksPanel";
import StockPanel from "./Panels/StockPanel";

const PANEL_COMPONENTS1 = {
  WRITE_OFF_APPROVAL: WriteOffApprovalPanel,
  CREATE_PRODUCTS: CreateProductsPanel,
  DEPO_STOCKS: DepoStocksPanel,
  STOCKS: StockPanel,
};

const BottomPanelManager = () => {
  const dispatch = useDispatch();
  const { modalType, modalProps } = useSelector((state) => state.modal);

  if (!modalType) return null;

  const PanelComponent1 = PANEL_COMPONENTS1[modalType];

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

      {PanelComponent1 ? <PanelComponent1 {...modalProps} /> : null}
    </Div>
  );
};

export default BottomPanelManager;
