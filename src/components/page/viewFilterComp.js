"use client";

import { useState, useEffect } from "react";
import { Button, Dropdown, Label } from "flowbite-react";
import { getBasketCategories } from "@/app/api/basket/route";
import { BiFilterAlt } from "react-icons/bi";
import ViewFilterBasketCategory from "../admin/viewFilterBasketCategory";
import { useSelector } from "react-redux";
import generateClassNames from "@/utils/generateClassNames";

const ViewFilterComponent = ({
  basketType,
  setBasketType,
  basketCategory,
  setBasketCategory,
  handleFetch,
  setHandleFetch,
  filteredBaskets,
  fetchBaskets,
  setMessage,
}) => {
  // local state
  const [basketCategoryList, setBasketCategoryList] = useState([]);
  const [selected, setSelected] = useState("");

  const themeColor = useSelector((state) => state.event.themeColor);

  // // handling customer selection for basket category
  // const handleCustomerSelection = (e) => {
  //     e.preventDefault();
  //     const newValue = e.target.value;
  //     setBasketCategory(newValue);
  // }

  // function to reset filter menu options
  const resetFilters = () => {
    setBasketCategory("");
    setBasketType("");
    setSelected("");
    filteredBaskets("");
    fetchBaskets();
    setMessage("");
  };

  // function handling when filter button is clicked
  const handleFilter = async (e) => {
    e.preventDefault();
    // setHandleFetch(!handleFetch);
    filteredBaskets(basketType);
  };

  // useEffect to fetch basket category data to show in dropdown
  // useEffect(() => {
  //     const fetchData = async () => {
  //         const response = await getBasketCategories();
  //         const result = response.map((obj) => obj.basketCategory);
  //         setBasketCategoryList(result);
  //     };
  //     fetchData();
  // }, []);

  return (
    <div>
      <form onSubmit={handleFilter}>
        {/* Start of Filter dropdown */}
        <Dropdown
          placement="bottom"
          renderTrigger={() => (
            <div className="hover:cursor-pointer rounded-lg bg-gray-100 p-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200">
              <BiFilterAlt className="h-5 w-5 text-gray-500" />
            </div>
          )}
          className="px-6 py-4 w-max"
        >
          <div className="flex justify-between">
            <h1 className="mb-2 font-semibold">Filter</h1>
          </div>
          <div className="space-y-2">
            {/* Basket Category */}
            {/* <div className="flex flex-col">
                        <label className="font-medium text-sm">Basket Category</label>
                        <select 
                            className="rounded-md border-gray-200 text-sm"
                            value={basketCategory}
                            onChange={(e) => {handleCustomerSelection(e)}}
                            required
                        >
                            <option disabled value={""} className=" text-sm">- Select -</option>
                            <option value={"ALL"} className=" text-sm">All</option>
                            {
                                basketCategoryList?.map((id, index) => (
                                    <option 
                                        key={index} 
                                        value={id} 
                                        className=" text-sm"
                                    >
                                        {id}
                                    </option>
                                ))
                            }
                        </select>
                    </div> */}
            {/* <div>
                        <label className="font-medium text-sm">Basket Category</label>
                        <div className="border rounded-md">
                            <ViewFilterBasketCategory
                                basketCategory={basketCategory} 
                                setBasketCategory={setBasketCategory} 
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </div>
                    </div> */}

            {/* Basket Type */}
            <div className="flex flex-col">
              <label className="font-medium text-sm">Basket Type</label>
              <select
                name="basketType"
                id="basketType"
                value={basketType}
                onChange={(e) => {
                  setBasketType(e.target.value);
                }}
                className="border border-gray-200 rounded-md text-sm"
              >
                <option disabled value="">
                  -Select -
                </option>
                <option value="ALL">All</option>
                <option value="MODEL">Model</option>
                <option value="BUY">Buy</option>
                <option value="SELL">Sell</option>
              </select>
            </div>
          </div>

          {/* Buttons group */}
          <div className="mt-4 flex space-x-2 justify-center">
            <button
              type="submit"
              className={generateClassNames(`text-sm hover:opacity-90 border p-1 rounded-md text-white w-16`, `bg-${themeColor}`)}
            >
              Filter
            </button>
            <Button
              size={"sm"}
              color={"gray"}
              onClick={() => {
                resetFilters();
              }}
            >
              Reset
            </Button>
          </div>
        </Dropdown>
      </form>
    </div>
  );
};

export default ViewFilterComponent;
