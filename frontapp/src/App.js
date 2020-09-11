import React from "react";
import Layout from "./containers/layout"
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <React-Fragment>
      <BrowserRouter>
      <Layout/>
      </BrowserRouter>
    </React-Fragment>
  );
}
export default App;
