import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../css/common.css";
import "../css/styles.css";
import Organizations from '../components/Organizations';
import Members from "../components/Members";
import Repos from '../components/Repos'
import ContractDetails from "../components/Contract-details";
import ContractCard from "../components/Contract-card";
import {} from '../store/action/dashboard';
class Dashboard extends Component {
  
  render() {
    return <>
      <aside className="aside sidenav-wrap">
            <ul>
                <li><Link to='/dashboard' >Dashboard</Link></li>
                <li><Link to='/dashboard'>Create Contract</Link></li>
            </ul>
          </aside>
          <article className="main">
          <div className="intro-heading-wrap">
                <h2 className="intro-line1">Let’s get you started...</h2>
                <h2 className="intro-line2">Select your Github Organisation for Capita Contracts...</h2>
            </div>
            <div className="data-table-container">
            <Organizations></Organizations>
            <Members />
            <Repos />
            </div>
          <ContractDetails></ContractDetails>
          <ContractCard></ContractCard>
          </article>
      
    </>
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
