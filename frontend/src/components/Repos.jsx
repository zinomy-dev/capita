import { PureComponent } from "react";
import { connect } from "react-redux";
import Loader from "./Spinner";
import {setRepoName} from '../store/action/dashboard';
class Repos extends PureComponent {

    render() {
        const {
            repos
        } = this.props;
        if (!repos) return <Loader />;
        return <div className="table-column">
            <h3>Repositories</h3>
            <div className="repos-list-holder">
                <ul className="repos-list-wrap">
                    {repos.map((item, i) => (
                        <li key={i} onClick={(e) => {
                            this.props.setRepoName(item['name'], item['html_url']);
                        }}>
                            {/* <img src={item.avatar_url} alt="" className="img" /> */}
                            <p >{item['name'].toLocaleUpperCase()}</p>
                            <div>
                                <input type="checkbox" value={item['login']} />
                            </div>
                        </li>

                    ))}
                </ul>
            </div>
        </div>
    }
}

const mapStateToProps = state => ({
    ...state
  });
  const mapDispatchToProps = dispatch => ({
    setRepoName: (repoName, uri)=> dispatch(setRepoName(repoName, uri))
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(Repos);