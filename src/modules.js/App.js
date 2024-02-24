import "../allStyles.css/App.css";
import Header from "./Header.js";
/* import Content from "./Content.js"; */
import AuxContent from "./AuxContent.js";
import Banner from "./Banner.js";
import Popup from "../partials/Popup.js";
import Footer from "./Footer.js";
import BottomPopup from "../partials/BottomPopup.js";

function App() {
  return (
    <div className="App">
      <Header />

      <Banner />
      <AuxContent />
      <Popup />
      <BottomPopup />

      <Footer />
    </div>
  );
}

export default App;
