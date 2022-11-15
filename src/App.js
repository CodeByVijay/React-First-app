import Header from './component/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style/bootstrap.min.css';
import  Home  from './component/Home';
import Add  from './component/Add';
import Edit from './component/Edit';
function App() {
  return (
    <div className="App">
      <Header />
     {/* <h1>Hello Team</h1> */}

     <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/add" exact element={<Add />}></Route>
        <Route path="/edit" exact element={<Edit />}></Route>
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
