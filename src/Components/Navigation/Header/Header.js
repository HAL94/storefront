import MiddleBar from "./MiddleBar/MiddleBar";
import BottomBar from "./BottomBar/BottomBar";
import TopBar from "./TopBar/TopBar";


const Header = (props) => {
  return (
    <header className="p-20">
      <TopBar/>
      <MiddleBar />
      <BottomBar />
    </header>
  );
};

export default Header;
