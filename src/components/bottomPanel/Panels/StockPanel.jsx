import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Div, Text, Button } from "atomize";  
import { setStock } from "../../redux/actions/stockActions";

const sampleGoods = [
  {
    id: 1,
    name: "Молоко 3.2%",
    sku: "100001",
    expected: 50,
    unit: "шт",
    expiryDate: "2025-06-01",
    pricePerUnit: 350,
  },
  {
    id: 2,
    name: "Хлеб ржаной",
    sku: "100002",
    expected: 30,
    unit: "шт",
    expiryDate: "2025-05-20",
    pricePerUnit: 150,
  },
  {
    id: 3,
    name: "Сахар 1 кг",
    sku: "100003",
    expected: 20,
    unit: "кг",
    expiryDate: "2026-01-01",
    pricePerUnit: 400,
  },
  {
    id: 4,
    name: "Соль пищевая",
    sku: "100004",
    expected: 15,
    unit: "кг",
    expiryDate: "2028-01-01",
    pricePerUnit: 100,
  },
];

const StockPanel = () => {
  const dispatch = useDispatch();
  // убрал аннотации типов
  const stockItems = useSelector(state => state.stock?.items || []);

  useEffect(() => {
    dispatch(setStock(sampleGoods));
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
      

      {stockItems.length === 0 ? (
        <Text>Нет данных об остатках.</Text>
      ) : (
        stockItems.map((item, index) => (
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

export default StockPanel;
