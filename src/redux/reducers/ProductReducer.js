import { actionTypes } from "redux/constants/ActionTypes";

const intialState = {
  product: [],
};

const productReducer = (state, action) => {
  switch (action.actionTypes) {
    case actionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }

  // if (action.type === "DISPLAYCATEGORYPRODCUTS") {
  //   const [data, setData] = useState([]);
  //   const getData = async () => {
  //     const response = await fetch("data/products_local.json");
  //     const data = await response.json();
  //     setData(data);
  //   };
  //   useEffect(() => {
  //     const getDataTemp = async () => {
  //       await getData();
  //     };
  //     getDataTemp();
  //   }, []);
  // }
};
