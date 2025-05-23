import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Div, Button, Text } from "atomize";
import { addProduct } from "../../redux/actions/createProductActions";

const CreateProductsPanel = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: "",
    article: "",
    unit: "",
    expiry: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    const { price, quantity } = formData;
    const sum = parseFloat(price) * parseFloat(quantity);
    dispatch(addProduct({ ...formData, sum }));
    setFormData({
      id: "",
      name: "",
      article: "",
      unit: "",
      expiry: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <Div >
        <Div d="flex" gap="1rem">
            <Text w="5%">ID</Text>
            <Text>Название товара</Text>
            <Text>Артикул</Text>
            <Text>Ед.</Text>
            <Text>Срок годности</Text>
            <Text>Цена</Text>
            <Text>Количество</Text>
        </Div>
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
      <Div d="flex" gap="1rem">
        <Input
          name="id"
          placeholder="ID"
          value={formData.id}
          onChange={handleChange}
        />
        <Input
          name="name"
          placeholder="Название товара"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          name="article"
          placeholder="Артикул"
          value={formData.article}
          onChange={handleChange}
        />
        <Input
          name="unit"
          placeholder="Единица измерения"
          value={formData.unit}
          onChange={handleChange}
        />
        <Input
          name="expiry"
          placeholder="Срок годности"
          value={formData.expiry}
          onChange={handleChange}
        />
        <Input
          name="price"
          placeholder="Цена"
          value={formData.price}
          onChange={handleChange}
          type="number"
        />
        <Input
          name="quantity"
          placeholder="Количество"
          value={formData.quantity}
          onChange={handleChange}
          type="number"
        />
        <Text textSize="body">
          Сумма:{" "}
          {formData.price && formData.quantity
            ? formData.price * formData.quantity
            : 0}
        </Text>
        <Button onClick={handleAdd} bg="info700" hoverBg="info600">
          Добавить товар
        </Button>
      </Div>
    </Div>
  );
};

export default CreateProductsPanel;
