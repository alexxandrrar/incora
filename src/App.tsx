import { Col, Row } from "antd";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { SideBar } from "./components/SideBar/SideBar";
import { PaginationPage } from "./pages/PaginationPage/PaginationPage";
import { TypeScriptPage } from "./pages/TypeScriptPage/TypeScriptPage";
import { LoginationPage } from "./pages/LoginationPage";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { SettingsPage } from "./pages/SettingsPage/SettingsPage";

import "antd/dist/antd.min.css";

function App() {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

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
          <Route path="/script" element={<TypeScriptPage />} />
          <Route path="/pagination" element={<PaginationPage />} />
          <Route path="/logination" element={<LoginationPage />} />
          <Route
            path="/settings"
            element={
              <ProtectedRoute token={token}>
                <SettingsPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Col>
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
}

export default App;
