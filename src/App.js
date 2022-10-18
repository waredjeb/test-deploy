import './index.css';
import Home from "./components/Home";
import Title from "./components/Title";
import Introduction from "./components/Introduction";
import TICL from "./components/TICL";
import CLUE3D from "./components/CLUE3D";
import Linking from "./components/Linking";
import Footer from './components/Footer';
import Test from './components/Test';


function App() {
  return (
    <div className="App">
     <Home></Home>
     <Title></Title>
     <Introduction></Introduction>
     <TICL></TICL>
     <CLUE3D></CLUE3D>
     <Linking></Linking>
     <Footer></Footer>

     {/* <Test></Test> */}
     <script src='./index.js'></script>
    </div>
  );
}

export default App;
