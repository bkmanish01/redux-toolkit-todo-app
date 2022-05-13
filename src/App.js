import React from "react";
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
import './style/style.css';
import { Card} from 'antd';



function App() {
  return (
    <div className="App">
      <Card 
        title={<AddTodo />} 
        style={{ 
          width: 500,
          height: "50vh", 
          backgroundColor:"#ec680b",
          textAlign:"center",
          paddingBottom:"30px",
          borderRadius:"20px",
          marginLeft:"35%"}}>
          <ListTodo />
      </Card>
    </div>
  );
}

export default App;
