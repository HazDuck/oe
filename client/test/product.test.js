import { render, fireEvent } from "@testing-library/react";
import CartBadge from "../components/CartBadge";
import QuantitySelector from "../components/QuantitySelector";

test("should be able to increase and decrease product quantity", async () => {

  // My understanding is that because I am handling state via context api I my tests will fail (currently the test is failing on the .toHaveTextConent 
  // on anything that gets passed through state e.g. productCount. 
  // After some googling I believe I would need to mock both the data call and also using context. 

  // Upon reflection I'd take a much more TDD approach, rather than building first and testing second. 

  // Attempted to work out how to mock this but ran out of time 👇

  // jest.mock('../context', () => ({
  //   useProduct: () => ({
  //     productData: {},
  //     cart: {},
  //     productCount,
  //     setProductCount
  //   })
  // }));

  // const { getByText, getByTitle } = render(<Product />);
  const { getByText, getByTitle } = render(<QuantitySelector />);

  const increaseQuantity = getByText("+");

  const currentQuantity = getByTitle("Current quantity");

  expect(currentQuantity).toHaveTextContent("1");
  fireEvent.click(increaseQuantity);

  const newQuantity = getByTitle("Current quantity");
  expect(newQuantity).toHaveTextContent("2");

  const decreaseQuantity = getByText("-");

  fireEvent.click(decreaseQuantity);
  expect(currentQuantity).toHaveTextContent("1");
});

test("should be able to add items to the basket", async () => {
  //this test spans x3 components so this test would need to reflect this.
  const { getByText, getByTitle } = render(<QuantitySelector />);

  const increaseQuantity = getByText("+");

  const currentQuantity = getByTitle("Current quantity");

  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);

  expect(currentQuantity).toHaveTextContent("4");

  const addToBasketElement = getByText("Add to cart");
  fireEvent.click(addToBasketElement);

  const basketItems = getByTitle("Basket items");
  expect(basketItems).toHaveTextContent("4");
});
