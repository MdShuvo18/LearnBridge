import Banner from "./Banner";
import Footer from "./Footer";
import HighlightSection from "./HighlightSection/HighlightSection";
import Navbar from "./Navbar";
import Partners from "./Partner/Partners";



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="space-y-20">
                <Banner></Banner>
                <Partners></Partners>
                <HighlightSection></HighlightSection>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;