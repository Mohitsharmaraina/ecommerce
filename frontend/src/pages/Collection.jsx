import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title.jsx";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let copyProducts = products.slice();

    if ((showSearch, search)) {
      copyProducts = copyProducts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      copyProducts = copyProducts.filter((item) =>
        category.includes(item.category)
      );

      setFilterProducts(copyProducts);
    }
    if (subCategory.length > 0) {
      copyProducts = copyProducts.filter((item) =>
        subCategory.includes(item.subCategory)
      );

      setFilterProducts(copyProducts);
    }
    switch (sortType) {
      case "low-high":
        copyProducts = copyProducts.sort((a, b) => a.price - b.price);
        break;

      case "high-low":
        copyProducts = copyProducts.sort((a, b) => b.price - a.price);
        break;

      default:
        break;
    }
    setFilterProducts(copyProducts);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, sortType, search, showSearch]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filters */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden transition ${
              showFilter ? "rotate-90" : ""
            }`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                onChange={toggleCategory}
                type="checkbox"
                value={"Men"}
                className="w-3"
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleCategory}
                type="checkbox"
                value={"Women"}
                className="w-3"
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleCategory}
                type="checkbox"
                value={"Kids"}
                className="w-3"
              />
              Kids
            </p>
          </div>
        </div>

        {/* sub-category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-3 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                onChange={toggleSubCategory}
                type="checkbox"
                value={"Topwear"}
                className="w-3"
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleSubCategory}
                type="checkbox"
                value={"Bottomwear"}
                className="w-3"
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleSubCategory}
                type="checkbox"
                value={"Winterwear"}
                className="w-3"
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* right side products */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"}></Title>
          {/* product sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relevant">Sorty by: Relevant</option>
            <option value="low-high">Sorty by: Low to High</option>
            <option value="high-low">Sorty by: High to Low</option>
          </select>
        </div>
        {/* display products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default Collection;
