import React, { useState } from "react";
import { Div, Text, Input, Button } from "atomize";
import { useDispatch, useSelector } from "react-redux";
import { addOperation } from "../../redux/actions/operationActions";

const sampleGoods = [
  { id: 1, name: "Молоко 3.2%", sku: "100001", expected: 50, unit: "шт", expiryDate: "2025-06-01", pricePerUnit: 350 },
  { id: 2, name: "Хлеб ржаной", sku: "100002", expected: 30, unit: "шт", expiryDate: "2025-05-20", pricePerUnit: 150 },
  { id: 3, name: "Сахар 1 кг", sku: "100003", expected: 20, unit: "кг", expiryDate: "2026-01-01", pricePerUnit: 400 },
  { id: 4, name: "Соль пищевая", sku: "100004", expected: 15, unit: "кг", expiryDate: "2028-01-01", pricePerUnit: 100 },
];

const ReceiveGoodsPanel = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user?.name || "Неизвестный");

  const [factQuantities, setFactQuantities] = useState({});
  const [confirmedRows, setConfirmedRows] = useState({});

  const handleQuantityChange = (id, value) => {
    if (value === "" || (/^\d+$/.test(value) && Number(value) >= 0)) {
      setFactQuantities({ ...factQuantities, [id]: value });
    }
  };

  const handleConfirm = (item) => {
    const actual = factQuantities[item.id] || "0";
    const total = Number(actual) * item.pricePerUnit;

    console.log("✅ Подтверждён приём:", {
      id: item.id,
      name: item.name,
      expected: item.expected,
      actual,
      expiryDate: item.expiryDate,
      pricePerUnit: item.pricePerUnit,
      total,
    });

    setConfirmedRows((prev) => ({ ...prev, [item.id]: true }));

    dispatch(
      addOperation({
        id: Date.now(),
        timestamp: new Date().toLocaleString(),
        action: "Прием товара",
        user: user,
        item: item.name,
        quantity: actual,
        price: item.pricePerUnit,
        total,
      })
    );
  };

  return (
    <Div overflow="auto" maxH="calc(100vh - 100px)" p="1rem">
      <Div d="flex" borderBottom="2px solid #E0E0E0" p="0.5rem" bg="gray200" fontWeight="600">
        <Text w="3%">№</Text>
        <Text w="20%">Название</Text>
        <Text w="8%">Артикул</Text>
        <Text w="7%">Ожидается</Text>
        <Text w="10%">Факт. кол-во</Text>
        <Text w="7%">Ед.</Text>
        <Text w="10%">Срок годности</Text>
        <Text w="8%">Цена (сом)</Text>
        <Text w="10%">Сумма (сом)</Text>
        <Text w="7%">Статус</Text>
      </Div>

      {sampleGoods.map((item, index) => {
        const quantity = Number(factQuantities[item.id] || 0);
        const total = quantity * item.pricePerUnit;
        const isConfirmed = confirmedRows[item.id];

        return (
          <Div
            key={item.id}
            d="flex"
            align="center"
            borderBottom="1px solid #f0f0f0"
            p="0.5rem"
            minH="50px"
          >
            <Text w="3%">{index + 1}</Text>
            <Text w="20%">{item.name}</Text>
            <Text w="8%">{item.sku}</Text>
            <Text w="7%">{item.expected}</Text>

            <Div w="10%">
              <Input
                w="80px"
                type="number"
                min="0"
                value={factQuantities[item.id] || ""}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                placeholder="Введите"
                p="0.5rem"
                borderColor="#ccc"
                hoverBorderColor="#888"
                disabled={isConfirmed}
              />
            </Div>

            <Text w="7%">{item.unit}</Text>
            <Text w="10%">{item.expiryDate}</Text>
            <Text w="8%">{item.pricePerUnit} сом</Text>
            <Text w="10%">{total || 0} сом</Text>

            <Text w="7%" textColor={isConfirmed ? "success700" : "gray600"}>
              {isConfirmed ? "✓" : "-"}
            </Text>
          </Div>
        );
      })}

      {/* Кнопка подтверждения всех строк */}
      <Div d="flex" justify="flex-end" p="1rem">
        <Button
          bg="info700"
          textColor="white"
          onClick={() => {
            sampleGoods.forEach((item) => {
              if (!confirmedRows[item.id]) {
                handleConfirm(item);
              }
            });
          }}
          disabled={sampleGoods.every((item) => confirmedRows[item.id])}
        >
          Подтвердить всё
        </Button>
      </Div>
    </Div>
  );
};

export default ReceiveGoodsPanel;
