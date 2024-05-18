import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PortApp from "./comps/portApp";
import RepoList from "./comps/repoList";
import RepoDetails from "./comps/repoDetails";
import ErringComponent from "./comps/erringComp";
import ErrorBoundary from "./comps/errorBoundary";
import Erro404 from "./comps/error404";

function App() {
  return (
    <Router>
      <section>
        <div className="main">
          <Routes>
            <Route path="/" element={<PortApp />} />
          </Routes>
          <div className="App">
            <Routes>
              <Route path="/" element={<RepoList />} />
              <Route path="/repository/:id" element={<RepoDetails />} />
              <Route
                path="/test-error-page"
                element={
                  <ErrorBoundary>
                    <ErringComponent />
                  </ErrorBoundary>
                }
              />
              <Route path="*" element={<Erro404 />} />
            </Routes>
          </div>
        </div>
      </section>
    </Router>
  );
}

export default App;
