import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Restorant from "./Restorant";
function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Restorant/>}/>
    </Routes>
   </Router>
  );
}

export default App;
