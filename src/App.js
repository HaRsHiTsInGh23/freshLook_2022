import "./App.css";
import Header from "./Header";
import NavBar from "./components/Navbar";
import HeaderTop from "./HeaderTop";
import MainBanner from "./MainBanner";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <HeaderTop />
      <Header />
      <div className="nav-area">
        <NavBar />
      </div>
      <MainBanner />
      <Footer />
    </div>
  );
}
export default App;
