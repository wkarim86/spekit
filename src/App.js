import React from "react";
import { Row} from "antd";
import "antd/dist/antd.css";
import './App.css';
import Grid from "./Components/Grid";
import Header from "./Components/Header";

class App extends React.Component {
   render(){
      return (
         <>
               <Row gutter={[20,20]} align="middle">
                
                <Header />
                 
               </Row>
               <Row gutter={[16,20]}>
                  <Grid />
               </Row>
               </>
        );
   }
  
}

export default App;
