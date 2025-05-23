import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Div, Text } from "atomize";

const HistoryPanel = () => {
  const history = useSelector((state) => state.operationHistory?.list || []);

  // Сортируем по убыванию времени (самые свежие сверху)
  const sortedHistory = [...history].sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );

  return (
    <Div p="1rem">
      <Text textSize="heading" m={{ b: "1rem" }}>
        История операций
      </Text>

      {/* Шапка таблицы */}
      <Div d="flex" p="0.5rem" bg="gray200" fontWeight="600" borderBottom="1px solid #ccc">
        <Text w="5%">№</Text>
        <Text w="15%">Дата и время</Text>
        <Text w="15%">Операция</Text>
        <Text w="20%">Товар</Text>
        <Text w="10%">Кол-во</Text>
        <Text w="10%">Цена</Text>
        <Text w="10%">Сумма</Text>
        <Text w="15%">Ответственный</Text>
      </Div>

      {/* Строки истории */}
      {sortedHistory.map((op, index) => (
        <Div
          key={op.id}
          d="flex"
          p="0.5rem"
          borderBottom="1px solid #eee"
          align="center"
        >
          <Text w="5%">{sortedHistory.length - index}</Text>
          <Text w="15%">{op.timestamp}</Text>
          <Text w="15%">{op.action}</Text>
          <Text w="20%">{op.item || "-"}</Text>
          <Text w="10%">{op.quantity || "-"}</Text>
          <Text w="10%">{op.price ? `${op.price} сом` : "-"}</Text>
          <Text w="10%">{op.total ? `${op.total} сом` : "-"}</Text>
          <Text w="15%">{op.user}</Text>
        </Div>
      ))}
    </Div>
  );
};

export default HistoryPanel;
