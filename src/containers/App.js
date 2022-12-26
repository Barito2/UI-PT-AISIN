import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import routes from "../configs/routes";
import Footer from "../components/commons/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Routes>
            {
              routes.map((e, i) => {
                return (
                  <Route exact={e.exact} path={e.path} key={i} element={e.component} />
                )
              })
            }
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
