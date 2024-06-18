import Home from "../Components/Home/Home";
import BasketPage from "./Basket/BasketPage";
import Deliv from "./Deliv/Deliv";

function HomePage() {
  return (
    <div>
      <Home/>
      <BasketPage/>
      <Deliv/>
    </div>
  );
}

export default HomePage;