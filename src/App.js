import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import Category from "./components/home/Category";
import Products from "./components/home/Products";

function App() {
  return (
    <div>
      <PageContainer>
        <Router>
          <Navbar />
          <Category/>
          <Products/>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="users/*" element={<Users />} /> */}
          </Routes>
        </Router>
      </PageContainer>
    </div>
  );
}
export default App;
