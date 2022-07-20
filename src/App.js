import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className='container'>
            <Routes>
              <Route path='/' exact element={<ListEmployeeComponent />}></Route>
              <Route path='/employees' element={<ListEmployeeComponent />}></Route>
              <Route path='/createEmployees' element={<CreateEmployeeComponent />}></Route>
            </Routes>
          </div>
      </Router>
    </div>
  );
}

export default App;
