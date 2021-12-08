import React, { useState, useEffect, createContext } from 'react';

const CategoryProductContext = createContext({
    displayedProducts: [],
    onSetSearchTerm: (searchTerm) => {},
    onSortLowToHigh: () => {}
});

export const CategoryProductContextProvider = (props) => {
    const [data, setData] = useState([]);
    const [displayedData, setDisplayedData] = useState([]);
    
    const getData = async () => {    
        /** Modern ES6 Approach */
        const response = await fetch("products_local.json");
        const data = await response.json();
        // console.log(data);
        setData(data);
        setDisplayedData(data);
    };


    const onSetSearchTermHandler = (term) => {
        // setSearchTerm(term);
        if (term !== '') {       
            const filteredData = displayedData.filter((product) => product.item.toLowerCase().indexOf(term.toLowerCase()) !== -1);
            setDisplayedData(filteredData);
        } else {
            setDisplayedData(data);
        }

    }

    const onSortLowToHighHandler = () => {
        const compare = ( a, b ) => {
            if ( a.price < b.price ){
              return -1;
            }
            if ( a.price > b.price ){
              return 1;
            }
            return 0;
        }
          
        const sortedData = [...displayedData.sort(compare)];
        // console.log(sortedData);
        setDisplayedData(sortedData);
        
    };

    useEffect(() => {
        console.log(displayedData);
    }
    ,[displayedData]);

    useEffect(() => {
        const getDataTemp = async () => {
            await getData();
        }

        getDataTemp();
    }, []);

    return (
        <CategoryProductContext.Provider value={{
            displayedProducts: displayedData,
            onSetSearchTerm: onSetSearchTermHandler,
            onSortLowToHigh: onSortLowToHighHandler
        }}>
            {props.children}
        </CategoryProductContext.Provider>
    )
}

export default CategoryProductContext;