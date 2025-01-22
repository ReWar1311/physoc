import Header from "./components/Header";
import './Home.css';
import Footer from "./components/Footer";
import Alert from "./components/Alert";

function Home() {
    return (

        <div className="home">            <Header />
        <div className="home-bg">
        <div className="home-content">
        <Alert className="alert-full" type="NEW" message="Physoc Varsity is out now" link="http://linksho.vercel.app/link/18"/>
        <div className="home-heading">PhySoc</div>
        <div className="home-para">"The supreme task of the physicist is to arrive at those universal elementary laws from which the cosmos can be built up by pure deduction"</div>
        <button className="home-btn">Explore More</button>
        </div>
        </div>          <Footer /></div>
    );
}

export default Home;