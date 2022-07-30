// lib import
import {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
// css import
import "../css/common.css";
import "../css/styles.css";
// components
import Organizations from '../components/Organizations';
import Members from "../components/Members";
import Repos from '../components/Repos'
import ContractDetails from "../components/Contract-details";
import NoWalletDetected from '../components/Dashboard/no-wallet-detected'
// store actoins
import {connectToWallet} from '../store/action/dashboard';

class Dashboard extends Component {

    render() {
        const divStyle = {
            color: 'blue',
        };
        return <>
            <aside className="aside sidenav-wrap">
                <ul>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/dashboard'>Create Contract</Link></li>
                    <li onClick={this.props.connectToWallet} style={divStyle}>Connect To Wallet
                    </li>
                </ul>
            </aside>
            {
                this.props.ethereumNotAvail ? <NoWalletDetected/> :
                    <article className="main">
                        <div className="intro-heading-wrap">
                            <h2 className="intro-line1">Let’s get you started...</h2>
                            <h2 className="intro-line2">Select your Github Organisation for Capita Contracts...</h2>
                        </div>
                        <div className="data-table-container">
                            <Organizations></Organizations>
                            <Members/>
                            <Repos/>
                        </div>
                        <ContractDetails></ContractDetails>
                        {/*<ContractCard></ContractCard>*/}
                    </article>
            }

        </>
    }
}

const mapStateToProps = state => ({
    ...state
});
const mapDispatchToProps = dispatch => ({
    connectToWallet: () => dispatch(connectToWallet())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
