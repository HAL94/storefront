import TopBar from "./TopBar/TopBar";
// import MiddleBar from './MiddleBar/MiddleBar';
import MiddleBarTemp from "./MiddleBarTemp/MiddleBarTemp";
import BottomBar from "./BottomBar/BottomBar";

const Header = (props) => {
    return (
        <header className="p-20">
            <TopBar/>
            {/* <MiddleBar/> */}
            <MiddleBarTemp/>
            <BottomBar/>
        </header>
    );
}

export default Header;