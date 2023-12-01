import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import ViewAllStudents from './components/ViewAllStudents';
import ProtectedRoute from "react-protected-route-component";
import {RequireAuth} from './components/Auth'


function App() {





  return (
    <BrowserRouter>

{/* <Routes>
        <Route path="/" component={<SearchStudent />} exact />
        <Route
  path="/protected"
  component={
    <RequireAuth>
      <AddStudent />
    </RequireAuth>
  }
/>
   


      </Routes> */}

    <Routes>
      <Route path='' element={<AddStudent/>} />
      <Route path='search' element={<SearchStudent/>} />
      <Route path='viewall' element={<ViewAllStudents/>} />

    </Routes>
    
    </BrowserRouter>
  );
}



export default App;
