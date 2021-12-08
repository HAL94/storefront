import Footer from "./Components/Navigation/Footer/Footer";
import Header from "./Components/Navigation/Header/Header";
import Common from "./Components/Pages/Common";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { categoryProductActions } from 'Store-h/category-product';

const getData = async () => {    
  /** Modern ES6 Approach */
  const response = await fetch("products_local.json");
  const data = await response.json();
  // console.log(data);
  return data;
};

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchData = async () => {
      const products = await getData();
      dispatch(categoryProductActions.setProducts(products));
    }
    fetchData();
  }, [dispatch])

  return (
    <>
      <Header />
      <Common />
      <Footer />
    </>
  );
}

export default App;
