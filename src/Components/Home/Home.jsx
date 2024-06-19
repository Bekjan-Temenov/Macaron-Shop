import Banner from "./Banner";
import News from "./News/News";
import Sale from "./Sale/Sale";
import Sets from "./Sets"
import Happy from "./happy/Happy";
import Producs from "./products/Producs";
import Care from "../Home/Care/Care"

function Home() {
  return (
    <>
      <Banner />
      <Sets />
      <Sale />
      <Happy />
      <Producs />
      <News />
      <Care />
    </>
  );
}

export default Home;
