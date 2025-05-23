const initialState = {
    items: [
      {
        id: 1,
        name: 'Молоко 3.2%',
        sku: '100001',
        expected: 20,
        stock: 10,
        unit: 'л',
        expiryDate: '2025-12-01',
        pricePerUnit: 250,
      },
      // другие товары
    ],
  };
  
  const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      // пока без действий
      default:
        return state;
    }
  };
  
  export default productsReducer;
  