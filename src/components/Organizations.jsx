import { Component } from "react";
import { connect } from "react-redux";
import Loader from "./Spinner";
import "../css/common.css";
import "../css/styles.css";
import {fetchMembers, fetchOrgData} from '../store/action/dashboard';


class Organizations extends Component {
    async componentDidMount() {
        this.props.fetchOrgData();
    }
    async fetchMembers(e, orgName){
        Array.from(document.getElementsByClassName("org-list-wrap")).map(el => el.classList.remove("selected"));
        e.target.classList.add('selected');
        this.props.fetchMembers(orgName);
      }
    render() {
        const {
            organizations
        } = this.props;
        if (!organizations) return <Loader />;
        return <>
            <div className="table-column">
            <h3>Organisation</h3>
            <div className="org-list-holder">
                <ul className="org-list-wrap">
                    {organizations.map((item, i) => (
                        <li className="org-list-wrap" key={i} onClick={(e) => {
                            this.fetchMembers(e, item['login']);
                        }}>
                            {/* <img src={item.avatar_url} alt="" className="img" /> */}
                            {item['login'].toLocaleUpperCase()}
                        </li>

                    ))}
                </ul>
                </div>
            </div>
        </>
    }
}

const mapStateToProps = state => ({
    ...state
  });
  const mapDispatchToProps = dispatch => ({
    fetchMembers: (orgName) => dispatch(fetchMembers(orgName)),
    fetchOrgData: (url) => dispatch(fetchOrgData(url)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Organizations);