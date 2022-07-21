import { PureComponent } from "react";
import { connect } from "react-redux";
import {fetchRepos} from '../store/action/dashboard'
import Loader from "./Spinner";
class Members extends PureComponent {
    constructor(props) {
        super(props);
        this.Members = new Set();
    }
    async fetchRepos(e, organizationName, refName){
        this.refs[refName].setAttribute('checked', true);
        this.Members.add(this.props.members.find(item => item['login'] === refName));
        this.props.fetchRepos(organizationName, this.Members)
      }
    render() {
        const {
            members,
            organizationName,
        } = this.props;
        if (!members) return <Loader />;
        return <>
            <div className="table-column">
                <h3>Members</h3>
                <div className="members-list-holder">
                    <ul className="members-list-wrap">
                        {members.map((item, i) => (
                            <li key={i} onClick={(e) => {
                                this.fetchRepos(e, organizationName, item['login']);
                            }}>
                                <div className="github-avtar">
                                    <img src={item.avatar_url} alt="" className="img" />
                                </div>
                                <p>{item['login'].toLocaleUpperCase()}</p>
                                <div>
                                    <input type="checkbox" value={item['login']} ref={item['login']} />
                                </div>
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
    fetchRepos: (organizationName, Members) => dispatch(fetchRepos(organizationName, Members))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Members);