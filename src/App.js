import './app.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from './pages/EmployeeList';
import User from './pages/Employee';
import Hierarchy from './pages/Hierarchy';

function App() {
  return (
    <Router>
        <Routes>
            <Route index path="/" element={
                <UserList />
            }/>
            <Route path="/employee/:name" element={
                <User />
            }/>
            <Route path="/tree" element={
                <Hierarchy />
            }/>
        </Routes>
    </Router>
  );
}

export default App;
