import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Div, Text } from "atomize";
import { setDepoStock } from "../../redux/actions/depoStockActions";

const depoSampleGoods = [
  {
    id: 101,
    name: "Кофе растворимый",
    sku: "D100001",
    expected: 80,
    unit: "шт",
    expiryDate: "2026-03-01",
    pricePerUnit: 600,
  },
  {
    id: 102,
    name: "Макароны 450г",
    sku: "D100002",
    expected: 150,
    unit: "пачка",
    expiryDate: "2026-07-01",
    pricePerUnit: 120,
  },
  {
    id: 103,
    name: "Подсолнечное масло 1л",
    sku: "D100003",
    expected: 200,
    unit: "бут",
    expiryDate: "2025-12-31",
    pricePerUnit: 220,
  },
];

const DepoStocksPanel = () => {
  const dispatch = useDispatch();
  const depoItems = useSelector((state) => state.depoStock?.items || []);

  useEffect(() => {
    dispatch(setDepoStock(depoSampleGoods));
  }, [dispatch]);
  

  return (
    <Div p="1rem">
      <Div d="flex" borderBottom="2px solid #E0E0E0" p="0.5rem" bg="gray200" fontWeight="600">
        <Text w="3%">№</Text>
        <Text w="20%">Название</Text>
        <Text w="16%">Артикул</Text>
        <Text w="12%">Факт. кол-во</Text>
        <Text w="6%">Ед.</Text>
        <Text w="10%">Срок годности</Text>
        <Text w="8%">Цена (сом)</Text>
        <Text w="10%">Сумма (сом)</Text>
      </Div>

      {depoItems.length === 0 ? (
        <Text>Нет данных об остатках на складе.</Text>
      ) : (
        depoItems.map((item, index) => (
          <Div
            key={item.sku}
            d="flex"
            align="center"
            border={{ b: "1px solid" }}
            borderColor="gray300"
            p="0.75rem"
            m={{ b: "0.5rem" }}
            minH="40px"
            textSize="body"
          >
            <Text w="3%" textAlign="center">{index + 1}</Text>
            <Text w="20%">{item.name}</Text>
            <Text w="18%">{item.sku}</Text>
            <Text w="10%">{item.expected}</Text>
            <Text w="7%">{item.unit}</Text>
            <Text w="10%">{item.expiryDate}</Text>
            <Text w="8%">{item.pricePerUnit} сом</Text>
            <Text w="8%">{item.pricePerUnit * item.expected} сом</Text>
          </Div>
        ))
      )}
    </Div>
  );
};

export default DepoStocksPanel;
