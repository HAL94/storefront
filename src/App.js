import Footer from "./Components/Navigation/Footer/Footer";
import Header from "./Components/Navigation/Header/Header";
import Common from "./Components/Pages/Common";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, selectFetchProductsStatus } from 'Store-h/category-product';
import LoadingSpinner from "Components/Shared/LoadingSpinner";

function App() {
  const dispatch = useDispatch();
  const fetchProductsStatus = useSelector(selectFetchProductsStatus);

  useEffect(() => {
    if (fetchProductsStatus === 'idle') {
      dispatch(getProducts());
    }
  }, [fetchProductsStatus, dispatch])

  return (
    <>
      <Header />
      {fetchProductsStatus === 'fulfilled' && <Common />}
      {fetchProductsStatus === 'pending' && <LoadingSpinner/>}
      <Footer />
    </>
  );
}

export default App;
