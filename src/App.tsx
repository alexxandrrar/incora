import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { PaginationPage } from "./pages/PaginationPage/PaginationPage";

import "antd/dist/antd.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/pagination">
          <PaginationPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
