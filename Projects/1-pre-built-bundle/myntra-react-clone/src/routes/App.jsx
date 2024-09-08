import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import { LoadingSpinner } from "../components/LoadingSpinner";

function App() {
  const status = useSelector((store) => store.fetchstatus);

  return (
    <div>
      <Header />
      <FetchItems />
      {status.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </div>
  );
}

export default App;
