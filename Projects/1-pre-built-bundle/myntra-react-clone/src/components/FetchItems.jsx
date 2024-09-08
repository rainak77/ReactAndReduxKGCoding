import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsSliceActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const status = useSelector((store) => store.fetchstatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.setFetchStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.setFetchDone());
        dispatch(fetchStatusActions.setFetchFinished());
        dispatch(itemsSliceActions.addinitialItem(items));
      })
      .catch((err) => err);
    return () => {
      controller.abort("fetch function not needed");
    };
  }, [status]);

  return <></>;
};

export default FetchItems;
