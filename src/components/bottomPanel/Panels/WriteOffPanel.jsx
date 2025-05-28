import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Div, Text, Input, Button } from "atomize";
import { addOperation } from "../../redux/actions/operationActions"; 
import { addWriteOffRequest } from "../../redux/actions/writeOffRequestsActions";
import { clearWriteOff } from "../../redux/actions/writeOffActions";

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

const WriteOffPanel = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user?.name || "Неизвестный");

  const [query, setQuery] = useState("");
  const [filteredGoods, setFilteredGoods] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [writeOffQuantities, setWriteOffQuantities] = useState({});

  const handleQueryChange = (val) => {
    setQuery(val);
    if (val.length > 0) {
      const filtered = sampleGoods.filter(
        (item) =>
          item.name.toLowerCase().includes(val.toLowerCase()) &&
          !selectedItems.find((selected) => selected.id === item.id)
      );
      setFilteredGoods(filtered);
    } else {
      setFilteredGoods([]);
    }
  };

  const handleSelectItem = (item) => {
    setSelectedItems([...selectedItems, item]);
    setQuery("");
    setFilteredGoods([]);
    setWriteOffQuantities({ ...writeOffQuantities, [item.id]: "" });
  };

  const handleQuantityChange = (id, val) => {
    if (val === "" || (/^\d+$/.test(val) && Number(val) >= 0)) {
      setWriteOffQuantities({ ...writeOffQuantities, [id]: val });
    }
  };

  const handleConfirm = () => {
    if (selectedItems.length === 0) {
      alert("Выберите хотя бы один товар для списания");
      return;
    }
  
    for (const item of selectedItems) {
      const qty = writeOffQuantities[item.id];
      if (!qty || Number(qty) === 0) {
        alert(`Введите корректное количество списания для товара "${item.name}"`);
        return;
      }
      if (Number(qty) > item.expected) {
        alert(`Нельзя списать больше, чем есть на складе для товара "${item.name}"`);
        return;
      }
    }
  
    // Создаём заявку на списание
    const newRequest = {
      id: Date.now(), // уникальный ID
      timestamp: new Date().toLocaleString(),
      user: user,
      items: selectedItems.map((item) => ({
        id: item.id,
        name: item.name,
        sku: item.sku,
        quantity: Number(writeOffQuantities[item.id]),
        pricePerUnit: item.pricePerUnit,
      })),
      status: "pending",
    };
  
    dispatch(addWriteOffRequest(newRequest));
  
    alert("Заявка на списание отправлена на согласование!");
    selectedItems.forEach((item) => {
      const qty = Number(writeOffQuantities[item.id]);
      const total = qty * item.pricePerUnit;
    
      dispatch(
        addOperation({
          id: Date.now() + Math.random(),
          timestamp: new Date().toLocaleString(),
          action: "Списание товара",
          user: user,
          item: item.name,
          quantity: qty,
          price: item.pricePerUnit,
          total: total,
        })
      );
    });
    
  };

  return (
    <Div p="1rem" mx="auto">
      <Text tag="h3" textAlign="center" m={{ b: "1rem" }}>
        Списание товара
      </Text>

      <Div pos="relative" mb="1.5rem">
        <Input
          maxW="px"
          placeholder="Введите название товара"
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          autoComplete="off"
        />
        {filteredGoods.length > 0 && (
          <Div
            pos="absolute"
            top="100%"
            left={0}
            right={0}
            bg="white"
            border="1px solid #ccc"
            zIndex={1000}
            maxH="150px"
            overflowY="auto"
            m={{ t: "0.25rem" }}
            borderRadius="4px"
            shadow="3"
          >
            {filteredGoods.map((item) => (
              <Div
                key={item.id}
                p="0.5rem"
                hoverBg="gray200"
                cursor="pointer"
                onClick={() => handleSelectItem(item)}
              >
                {item.name}
              </Div>
            ))}
          </Div>
        )}
      </Div>

      {selectedItems.length > 0 &&
  selectedItems.map((item, index) => {
    const qty = Number(writeOffQuantities[item.id] || 0);
    const total = qty * item.pricePerUnit;

    return (
      <Div
        key={item.id}
        d="flex"
        align="center"
        justify="space-between"
        border="1px solid #ccc"
        p="5px"
        mb="0.5rem"
        borderRadius="6px"
        flexWrap="wrap"
      >
        <Text minW="30px" m={{ r: "0.5rem" }}>#{index + 1}</Text>
        <Text minW="150px" m={{ r: "0.5rem" }}>{item.name}</Text>
        <Text minW="90px" m={{ r: "0.5rem" }}>Артикул: {item.sku}</Text>
        <Text minW="100px" m={{ r: "0.5rem" }}>Срок: {item.expiryDate}</Text>
        <Text minW="80px" m={{ r: "0.5rem" }}>Цена: {item.pricePerUnit} сом</Text>
        
        <Div d="flex" align="center" m={{ r: "0.5rem" }}>
          <Input
            w="80px"
            type="number"
            min="0"
            max={item.expected}
            placeholder="Кол-во"
            value={writeOffQuantities[item.id] || ""}
            onChange={(e) =>
              handleQuantityChange(item.id, e.target.value)
            }
          />
          <Text m={{ l: "0.25rem" }}>{item.unit}</Text>
        </Div>

        <Text minW="100px" fontWeight="600">
          Сумма: {total} сом
        </Text>
      </Div>
    );
  })}


      <Div d="flex" justify="flex-end">
        <Button
          bg="danger700"
          hoverBg="danger800"
          textColor="white"
          onClick={handleConfirm}
          disabled={selectedItems.length === 0}
        >
          Подтвердить списание
        </Button>
      </Div>
    </Div>
  );
};

export default WriteOffPanel;
