import { useDispatch, useSelector } from "react-redux";
import { bagSliceActions } from "../store/bagSlice";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoMdRemoveCircleOutline } from "react-icons/io";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagitems = useSelector((store) => store.bag);
  const itemFound = bagitems.includes(item.id);

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {!itemFound ? (
        <button
          className="btn btn-add-bag btn-success"
          onClick={() => dispatch(bagSliceActions.addItemToBag(item.id))}
        >
          <IoAddCircleOutline /> Add to Bag
        </button>
      ) : (
        <button
          className="btn btn-add-bag btn-danger"
          onClick={() => dispatch(bagSliceActions.removeFromBag(item.id))}
        >
          <IoMdRemoveCircleOutline />
          Remove
        </button>
      )}
    </div>
  );
};

export default HomeItem;
