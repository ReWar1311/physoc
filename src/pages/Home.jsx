import Header from "./components/Header";
import "./Home.css";
import Footer from "./components/Footer";
import Alert from "./components/Alert";
import ExploreButton from "./components/ExploreButton";
import Grids from "./components/Grids";

function Home() {
  return (
    <div className="home-original">
      <div className="grid-elem"></div>
      <Grids className/>
      <div className="home">
        <Header />
        <div className="home-bg">
          <div className="home-content">
            <Alert
              className="alert-full"
              type="NEW"
              message="Freshers party forms out now"
              link="https://linksho.vercel.app/link/24"
            />
            <div className="home-heading">PhySoc</div>
            <div className="home-para">
              "The supreme task of the physicist is to arrive at those universal
              elementary laws from which the cosmos can be built up by pure
              deduction"
            </div>
            <div style={{ height: "20px" }}></div>
            <ExploreButton />
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
}

export default Home;
