import { Col, Row } from "antd";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { SideBar } from "./components/SideBar/SideBar";
import { PaginationPage } from "./pages/PaginationPage/PaginationPage";

import "antd/dist/antd.min.css";

function App() {
  return (
    <Row>
      <Col span={24}>
        <Header />
      </Col>
      <Col span={3}>
        <SideBar />
      </Col>
      <Col span={21}>
        <Routes>
          <Route path="/pagination" element={<PaginationPage />} />
        </Routes>
      </Col>
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
}

export default App;
