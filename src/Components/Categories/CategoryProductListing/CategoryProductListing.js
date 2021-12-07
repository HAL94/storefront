import React from "react";

import ProductListingHeader from "./ProductListingHeader/ProductListingHeader";


import CategoryProducts from "./ProductListing/CategoryProducts";
function CategoryProductListing() {
  return (
    <>
      <ProductListingHeader />
      <CategoryProducts />
    </>
  );
}

export default CategoryProductListing;
