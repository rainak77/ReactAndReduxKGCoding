import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummury from "../components/BagSummury";

const Bag = () => {
  const itemsIdFromBAg = useSelector((store) => store.bag);
  const storeItems = useSelector((store) => store.items);
  const items = storeItems.filter((item) => {
    if (itemsIdFromBAg.includes(item.id)) return item;
  });

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {items.map((bagItem) => (
            <BagItem key={bagItem.id} item={bagItem} />
          ))}
        </div>
        <div className="bag-summary">
          <BagSummury />
        </div>
      </div>
    </main>
  );
};

export default Bag;
