import { Component } from "react";
import { connect } from "react-redux";
class ContractCard extends Component {
    render() {
        const {
            recentContract, 
            contractPayload
        } = this.props;
        if(!recentContract && !contractPayload) {
            return <></>;
        }
        const contract = recentContract ? recentContract : contractPayload;
        return <div className="contract-card-container">
        <div className="contract-details-wrap">
            <div className="contract-heading-bar-holder">
                <div className="contract-name-token">
                    <h2>Chained-Simplex</h2>
                    <div className="token-info">
                    {contract.nameOfToken} <div className="token-symbol-block">{contract.symbolOfToken}</div>
                    </div>
                </div>
                <div className="contract-status-date">
                    <div className="contract-status">{contract.status}</div>
                    <div className="contract-created-at-wrap">
                        <span className="date-label">Created at</span>
                        <span className="date-info">{contract.created}</span>
                    </div>
                </div>
            </div>
            <div className="contract-github-info-wrap">
                <div className="org-data block-data-line">
                    <div className="block-label">Organisation</div>
                    <div className="block-value">{contract.orgName}</div>
                </div>
                <div className="repo-data block-data-line">
                    <div className="block-label">Repository</div>
                    <div className="block-value">{contract.repoName}</div>
                </div>
            </div>
            <div className="contract-members-info-holder">
                <div className="member-data block-data-line">
                    <div className="block-label">Members</div>
                    <div className="block-value">
                        <div className="btn-block">
                            <div className="btn-text-wrap btn-outline">
                                <span>Allot Tokens</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contract-members-list">
                    <ul>
                        {
                           contract.members.map((item,i)=> (
                                <li>
                                    <div className="github-avtar">
                                        <img src={item.avatarUrl} alt={item['name']} />
                                    </div>
                                    <p>{item['name']}</p>
                                    <div>
                                        <input type="text" id={item['name'] + "_" + i} />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
        <div className="contract-tokens-deatils-wrap">
            <h3>Disbursement Details</h3>
            <div className="contract-disbursement-record-table-wrap">
                <table>
                    <tbody><tr><th>
                        </th><td>Date &amp; Time</td>
                        <td>Tokens Disbursed</td>
                    
                    </tr><tr>
                        <td>12 May 2022</td>
                        <td>2000</td>
                    </tr>
                    <tr>
                        <td>12 May 2022</td>
                        <td>2000</td>
                    </tr>
                    <tr>
                        <td>12 May 2022</td>
                        <td>2000</td>
                    </tr>
                </tbody></table>
            </div>
            <div className="contract-disbursement-action-holder">
                <div className="balance-data block-data-line">
                    <div className="block-label">Balance</div>
                    <div className="block-value">50000</div>
                </div>
                <div className="btn-block">
                    <div className="btn-text-wrap btn-outline">
                        <span>Disburse Tokens</span>
                    </div>
                </div>
            </div>
        </div>
    </div>;
    }
}

const mapStateToProps = state => ({
    ...state
  });
  const mapDispatchToProps = dispatch => ({
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ContractCard);