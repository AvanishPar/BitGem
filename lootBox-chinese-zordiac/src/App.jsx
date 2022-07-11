import "./App.css";
import Homepage from "./pages/homePage/homePage";
import Button from "./components/button/button";
import TableComponent from "./components/tableComponent/table";

function App() {
  return (
    <div id="grad"  className="App">
      <div id="main-heading">LOOTBOX GAME – CHINESE ZODIAC</div>
      <Button /> 
      <div className="home">
        <div style={{display:"flex",flexFlow:"column"}}>
        <div style={{margin:"auto"}}>
        <Homepage />
        </div>
        <div style={{display:"flex"}}>
        <div id="start-btn">(Click on the Yin-Yang  to get started)</div>
        <div id="crt-price">Current spin price: 5.17 FTM</div>
        </div>
</div>
        <div style={{}}>
      <div id="table-txt">  Collect all twelve 
zodiacs to receive 
the Yin-Yang NFT!
</div>
        <TableComponent style={{width:"40%",magin:"auto!important"}}/>
        </div>
        {/* <Button /> */}
      </div>
    </div>
  );
}

export default App;
