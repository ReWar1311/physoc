import Header from "./components/Header";
import './Home.css';
import Footer from "./components/Footer";
import Alert from "./components/Alert";
import ExploreButton from "./components/ExploreButton";

function Home() {
    return (

        <div className="home">            <Header />
        <div className="home-bg">
        <div className="home-content">
        <Alert className="alert-full" type="NEW" message="Physoc Varsity is out now" link="http://linksho.vercel.app/link/18"/>
        <div className="home-heading">PhySoc</div>
        <div className="home-para">"The supreme task of the physicist is to arrive at those universal elementary laws from which the cosmos can be built up by pure deduction"</div>
        <div style={{height:"20px"}}></div>
       <ExploreButton/>
        </div>
        </div>          <Footer /></div>
    );
}

export default Home;