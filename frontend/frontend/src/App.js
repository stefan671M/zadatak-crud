import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/ListPerson";
import AddUser from "./components/AddPerson";
import EditUser from "./components/EditPerson";
 
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<ListPerson />} />
          <Route path="add" element={<AddPerson />} />
          <Route path="edit/:id" element={<EditPerson />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
 
export default App;

