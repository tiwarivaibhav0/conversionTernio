import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import { Box, Button, Tooltip } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Comp1 />
      <Comp2 />
    </div>
  );
}
const Comp1 = () => {
  return (
    <header className="App-header">
      <Nav />
      <Box sx={{ flexGrow: 0 }}>
        <Button
          sx={{
            backgroundColor: "#5AA0EC",
            color: "white",
            fontSize: "12px",
            borderRadius: "30px",
            padding: ".5vw 2.5vw",
            marginTop: "200%",
            float: "left",
            marginBottom: "4%",
          }}
          variant="contained"
        >
          Receive Email Updates
        </Button>
      </Box>
    </header>
  );
};

const Comp2 = () => {
  return (
    <div style={{ marginTop: "2%" }}>
      <img
        src="https://logos-download.com/wp-content/uploads/2022/01/Ternio_Logo-700x700.png"
        alt=""
        width="100px"
      />
      <p style={{ color: "blue" }}>One BLOCK AT A TIME</p>
      <h2 style={{ color: "#1F354D" }}>One BlockChain To Meet All Needs</h2>
      <span style={{ color: "gray" }}>
        Decentralized scalable. lorem ipsinm gd e eideid eidhd ededu e;lded dd.
      </span>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",width:"95%",margin:"auto"}}>
        <Comp3 />
        <Comp3 />

        <Comp3 />
      </div>
    </div>
  );
};

const Comp3 = () => {
  return (
    <div style={{paddingLeft:"1%",paddingRight:"1%", paddingTop:"3%", marginTop: "3%", width: "280px",border:"2px solid black",marginLeft:"12px" }}>
      <img
        src="https://logos-download.com/wp-content/uploads/2022/01/Ternio_Logo-700x700.png"
        alt=""
        width="80px"
      />
      <h3 style={{ color: "#1F354D" }}>100% Decentralized</h3>
      <p style={{ color: "gray" }}>
        {" "}
        Decentralized scalable. lorem ipsinm gd e eideid eidhd ededu e;lded dd.
        Decentralized scalable. lorem ipsinm gd e eideid eidhd ededu e;lded dd.
      </p>
    </div>
  );
};

export default App;
