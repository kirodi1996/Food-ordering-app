import React from "react";
import { CON_URL } from "../constants/api-url";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";


const ItemList = (props) => {
  const { items } = props;
  
  const dispatch = useDispatch()
  
  const handleAddItem = (item) => {
    dispatch(addItems(item))
  }

  return items.map((item) => (
    <div
      key={item?.card?.info?.id}
      className="p-2 m-2 border border-gray-200 border-b-2 text-left flex justify-between"
    >
      <div className="w-9/12">
        <div className="py-2">
          <span>{item?.card?.info?.name}</span>
          <span>
            - &#8377;
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </span>
        </div>
        <p className="text-xs">{item?.card?.info?.description}</p>
        </div>
        <div className="w-3/12">
          <div className="absolute">
            <img src={CON_URL + item?.card?.info?.imageId} className="w-24" />
            <button onClick={() => handleAddItem(item)} className="p-2 mx-4 text-xs rounded-lg bg-black text-white shadow-lg">Add+</button>
          </div>
        </div>
    </div>
  ));
};

export default ItemList;
