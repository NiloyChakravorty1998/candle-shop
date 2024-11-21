import BackgroundImage from "../../components/BackgroundImage";
import Description from "../../components/Description";
import Popular from "../../components/Popular";
import Products from "../../components/Products";

const HomePage = () => {
    return (
        <>
            <BackgroundImage />
            <Products />
            <Description />
            <Popular />
        </>
    )
}

export default HomePage;