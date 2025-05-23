import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToOrder } from "../../redux/actions/orderActions";
import { Input, Button, Text, Div } from "atomize";
import { addOperation } from "../../redux/actions/operationActions";

const OrderPanel = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [orderStatus, setOrderStatus] = useState({}); // { sku: true }
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products?.items || []);
  const user = useSelector((state) => state.auth?.user?.name || "Неизвестный");

  const filteredSuggestions = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectSuggestion = (product) => {
    setSelectedProduct(product);
    setSearchTerm(product.name);
    setShowSuggestions(false);
    const recommendedQty = Math.max(0, product.expected - (product.stock || 0));
    setQuantity(recommendedQty);
  };

  const handleAddAllRecommended = () => {
    const newOrderStatus = { ...orderStatus };

    products.forEach((product) => {
      const recommendedQty = Math.max(
        0,
        product.expected - (product.stock || 0)
      );
      if (recommendedQty > 0 && !orderStatus[product.sku]) {
        const total = recommendedQty * product.pricePerUnit;

        dispatch(addItemToOrder({ ...product, quantity: recommendedQty }));

        dispatch(
          addOperation({
            id: Date.now() + Math.random(),
            timestamp: new Date().toLocaleString(),
            action: "Формирование заказа",
            user,
            item: product.name,
            quantity: recommendedQty,
            price: product.pricePerUnit,
            total,
          })
        );

        newOrderStatus[product.sku] = true; // ставим галочку
      }
    });

    setOrderStatus(newOrderStatus);
  };

  return (
    <Div p="2rem" border="1px solid" borderColor="gray200" rounded="md">
      <Text tag="h3" textSize="heading" m={{ b: "1rem" }}>
        Формирование заказа
      </Text>

      <Div pos="relative" m={{ b: "1rem" }}>
        <Input
          placeholder="Введите название товара"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowSuggestions(true);
            setSelectedProduct(null);
            setQuantity(0);
          }}
        />

        {showSuggestions && searchTerm && (
          <Div
            pos="absolute"
            top="100%"
            left="0"
            w="100%"
            bg="white"
            border="1px solid"
            borderColor="gray300"
            shadow="2"
            zIndex="10"
            maxH="200px"
            overflow="auto"
          >
            {filteredSuggestions.length > 0 ? (
              filteredSuggestions.map((product) => (
                <Div
                  key={product.sku}
                  p="0.5rem"
                  hoverBg="gray200"
                  cursor="pointer"
                  onClick={() => handleSelectSuggestion(product)}
                >
                  {product.name}{" "}
                  {orderStatus[product.sku] && (
                    <span style={{ color: "green", fontWeight: "bold" }}>
                      ✓
                    </span>
                  )}
                </Div>
              ))
            ) : (
              <Div p="0.5rem" textColor="gray700">
                Ничего не найдено
              </Div>
            )}
          </Div>
        )}
      </Div>

      {selectedProduct && (
        <Div
          justify="space-between"
          d="flex"
          flexWrap="wrap"
          align="center"
          p="1rem"
          border="1px solid"
          borderColor="gray300"
          rounded="md"
          m={{ b: "1rem" }}
        >
          <Text textDecor="underline" m={{ r: "1rem" }}>
            {selectedProduct.name}
          </Text>
          <Text m={{ r: "1rem" }}>
            <b>Артикул:</b> {selectedProduct.sku}
          </Text>
          <Text m={{ r: "1rem" }}>
            <b>Ед. изм.:</b> {selectedProduct.unit}
          </Text>
          <Text m={{ r: "1rem" }}>
            <b>Срок годн.:</b> {selectedProduct.expiryDate}
          </Text>
          <Text m={{ r: "1rem" }}>
            <b>Цена:</b> {selectedProduct.pricePerUnit} ₸
          </Text>
          <Text m={{ r: "1rem" }}>
            <b>Ожидается:</b> {selectedProduct.expected}
          </Text>
          <Text m={{ r: "1rem" }}>
            <b>В наличии:</b> {selectedProduct.stock ?? 0}
          </Text>
          <Text m={{ r: "1rem" }}>
            <b>Рек-но:</b>{" "}
            {Math.max(
              0,
              selectedProduct.expected - (selectedProduct.stock ?? 0)
            )}
          </Text>
          <Input
            w="100px"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            placeholder="Количество"
            disabled
          />{" "}
          {orderStatus[selectedProduct.sku] && (
            <span style={{ color: "green", fontWeight: "bold" }}>✓</span>
          )}
        </Div>
      )}

      <Div d="flex" justify="flex-end">
        <Button
          bg="success700"
          textColor="white"
          onClick={handleAddAllRecommended}
          disabled={products.every(
            (product) =>
              Math.max(0, product.expected - (product.stock ?? 0)) <= 0 ||
              orderStatus[product.sku]
          )}
        >
          Подтвердить всё
        </Button>
      </Div>
    </Div>
  );
};

export default OrderPanel;
