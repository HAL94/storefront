import TopBar from "./TopBar/TopBar";
import MiddleBar from './MiddleBar/MiddleBar';
// import BottomBar from "./BottomBar/BottomBar";
import BottomBarTemp from "./BottomBarTemp/BottomBarTemp";

const Header = (props) => {
    return (
        <header className="p-20">
            <TopBar/>
            <MiddleBar/>
            {/* <BottomBar/> */}
            <BottomBarTemp/>
        </header>
    );
}

export default Header;