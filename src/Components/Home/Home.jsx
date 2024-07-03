import Banner from "./Banner";
import News from "./News/News";
import Sale from "./Sale/Sale";
import Sets from "./Sets";
import Happy from "./happy/Happy";
import Products from "./products/Producs"; // corrected the import
import Care from "../Home/Care/Care";

function Home() {
  return (
    <>
      <Banner />
      <Sets />
      <Sale />
      <Happy />
      <Products /> {/* corrected the component name */}
      <News />
      <Care />
    </>
  );
}

export default Home;
