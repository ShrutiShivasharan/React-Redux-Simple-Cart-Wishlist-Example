import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Wishlist from "./components/Wishlist";

const App = () => {

  const Products = [
    { id: 1, name: "product1", price: 100 },
    { id: 2, name: "product2", price: 200 },
    { id: 3, name: "product3", price: 300 },
    { id: 4, name: "product4", price: 400 },
  ]

  return (
    <>
      <Provider store={store}>
        <ProductList products={Products} />
        <hr></hr>
        <Cart />
        <hr></hr>
        <Wishlist />
      </Provider>
    </>
  );
};

export default App;
