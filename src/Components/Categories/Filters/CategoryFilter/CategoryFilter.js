import React, { useState, useEffect } from "react";

function CategoryFilter() {
  const [data, setData] = useState([]);
  const getData = async () => {
      /** Modern ES6 Approach */
    const response = await fetch("data/category.json");
    const data = await response.json();
    setData(data);
  };
  useEffect(() => {
    const getDataTemp = async () => {
      await getData();
    };

    getDataTemp();
  }, []);

  const catFiltersComponents = data.map((catFilter) => {
    return (
      <li
        key={catFilter.category}
        className={`d-flex justify-content-between align-items-center filter_item my-1 cursor_pointer`}
      >
        <span className="cat_filter_text">{catFilter.category_name}</span>
        {/* <span className="cat_filter_number">({catFilter.productCount})</span> */}
      </li>
    );
  });
  return (
    <div className="filter_option p-2 filter_item_mg">
      <span className="filter_title">Category</span>
      <ul className="list-group">{catFiltersComponents}</ul>
    </div>
  );
}

export default CategoryFilter;
