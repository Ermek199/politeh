import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Div, Button, Text } from "atomize";
import { addProduct } from "../../redux/actions/createProductActions";

const CreateProductsPanel = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([
    {
      id: "",
      name: "",
      article: "",
      unit: "",
      expiry: "",
      price: "",
      quantity: "",
    },
  ]);

  const handleChange = (index, e) => {
    const updatedProducts = [...products];
    updatedProducts[index][e.target.name] = e.target.value;
    setProducts(updatedProducts);
  };

  const handleAddRow = () => {
    if (products.length < 10) {
      setProducts([
        ...products,
        {
          id: "",
          name: "",
          article: "",
          unit: "",
          expiry: "",
          price: "",
          quantity: "",
        },
      ]);
    }
  };

  const handleSubmitAll = () => {
    products.forEach((product) => {
      const { price, quantity } = product;
      const sum = parseFloat(price) * parseFloat(quantity);
      dispatch(addProduct({ ...product, sum }));
    });
    setProducts([
      {
        id: "",
        name: "",
        article: "",
        unit: "",
        expiry: "",
        price: "",
        quantity: "",
      },
    ]);
  };

  return (
    <Div>
      <Div d="flex" p="0.5rem" bg="gray200" fontWeight="600" borderBottom="1px solid #ccc">
        <Text w="8%">№</Text>
        <Text w="10%">Товар</Text>
        <Text w="10%">Артикул</Text>
        <Text w="12%">Единица измерения</Text>
        <Text w="11%">Срок годности</Text>
        <Text w="8.5%">Цена</Text>
        <Text w="9%">Количество</Text>
        <Text w="10%">Сумма</Text>
      </Div>

      {products.map((product, index) => (
        <Div key={index} d="flex" gap="1rem" align="center" m={{ b: "0.5rem" }}>
          <Input w="95px" name="id" placeholder="ID" value={product.id} onChange={(e) => handleChange(index, e)} />
          <Input w="160px" name="name" placeholder="Название" value={product.name} onChange={(e) => handleChange(index, e)} />
          <Input w="140px" name="article" placeholder="Артикул" value={product.article} onChange={(e) => handleChange(index, e)} />
          <Input w="160px" name="unit" placeholder="Ед. изм." value={product.unit} onChange={(e) => handleChange(index, e)} />
          <Input w="160px" name="expiry" placeholder="Срок годности" value={product.expiry} onChange={(e) => handleChange(index, e)} />
          <Input w="120px" name="price" placeholder="Цена" value={product.price} onChange={(e) => handleChange(index, e)} type="number" />
          <Input w="120px" name="quantity" placeholder="Кол-во" value={product.quantity} onChange={(e) => handleChange(index, e)} type="number" />
          <Text p="8px" w="120px" textSize="body">
            {product.price && product.quantity ? parseFloat(product.price) * parseFloat(product.quantity) : 0}
          </Text>
        </Div>
      ))}

      <Div d="flex" justify="space-between" mt="1rem">
        <Button onClick={handleAddRow} bg="warning700" hoverBg="warning600" disabled={products.length >= 10}>
          Добавить строку товара
        </Button>
        <Button onClick={handleSubmitAll} bg="info700" hoverBg="info600">
          Добавить все товары
        </Button>
      </Div>
    </Div>
  );
};

export default CreateProductsPanel;
