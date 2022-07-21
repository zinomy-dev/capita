import Navbar from "./components/Navbar";
import "./css/common.css";
import "./css/styles.css";
import Dashboard from './pages/Dashboard'
import Home from "./pages/Home";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Component } from "react";
import Footer from "./components/Footer";
import {logIn, logOut, isLoggedIn} from './store/action/login'

class App extends Component {
    
  async componentDidMount() {
    this.props.isLoggedIN();
  }
  render() {
    const { user = false, error, loading } = this.props;
    return <BrowserRouter>
    <div id="page-home" className="home">
    <Navbar user={user} />
    <div id="main-content" className="main-content-wrapper">
     <Routes>
        <Route
          path="/"
          element={ <Home  {...this.props}/> }
        />
        <Route path="/dashboard"
          element={!user ? <Navigate to="/" /> : <Dashboard/>}/>
      </Routes>
      <Footer></Footer>
      </div>
    </div>
  </BrowserRouter>
  }
}
const mapStateToProps = state => ({
    ...state
  });
const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(logOut()),
  stopAction: () => dispatch(logIn()),
  isLoggedIN: () => dispatch(isLoggedIn())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

