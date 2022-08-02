import {Component, createRef} from "react";
import {connect} from "react-redux";

import {createContract} from '../store/action/dashboard'

class ContractDetails extends Component {
    constructor() {
        super();
        this.tokenName = createRef("tokenName");
        this.tokenNameHidden = createRef("tokenNameHidden");
        this.tokenInput = createRef('tokenInput');
        this.consent = createRef('consent');
    }

    get inputToken() {
        const inputToken = this.tokenInput.current.value;
        if (inputToken && inputToken.length > 3) {
            return inputToken;
        }
        return undefined;
    }

    getTokenName() {
        if (this.inputToken) {
            const tokenSymbol = this.inputToken[0] + this.inputToken[Math.ceil(parseInt(this.inputToken.length - 1) / 2)] + this.inputToken[(this.inputToken.length - 1)];
            this.tokenName.current.innerText = tokenSymbol.toUpperCase();
            this.tokenNameHidden.current.value = tokenSymbol.toUpperCase();
        }
    }

    createContract(e){
        e.preventDefault()
        const _payload = {members: []};
        for (const {name, value, id} of e.target.querySelectorAll("input[name]")) {
            if (name === 'members[]') {
                _payload.members.push({
                    name: id,
                    value: value
                });
                continue;
            }
            _payload[name] = value;
        }
        _payload.numOfCollab = _payload.members.length;
        _payload.address = _payload.members.map((member) => member.value);
        _payload.repoName = this.props.repoName;
        _payload.orgName = this.props.organizationName;
        _payload.email = this.props.user.emails[0].value;
        _payload.totalSupply = parseInt(_payload.totalSupply);
        this.props.createContract(_payload);
    }

    render() {
        const {
            membersList,
            showContract
        } = this.props;
        const members = membersList ? [...membersList] : [];
        if(!showContract) {
            return  <></>;
        }
        return <div className="contract-details-container">
            <h2>Capita Contract Details</h2>
            <form onSubmit={this.createContract.bind(this)}>
                <div className="contract-form-wrap">
                    <div className="contract-form-columns">
                        <div className="contract-field-wrap">
                            <h4>Contract Name</h4>
                            <div className="text-input-wrap">
                                <input type="text" className="text-input-field" name="name"/>
                            </div>
                        </div>
                        <div className="contract-field-wrap">
                            <h4>Token Name &amp; Symbol</h4>
                            <div className="text-input-wrap token-field">
                                <input type="text" name="nameOfToken" className="text-input-field" onKeyUp={this.getTokenName.bind(this)}
                                       ref={this.tokenInput}/>
                                <input type="hidden" name="symbolOfToken" ref={this.tokenNameHidden}/>
                                <div className="token-symbol-block" ref={this.tokenName}>SCH</div>
                            </div>
                        </div>
                        <div className="contract-field-wrap">
                            <h4>Tokens to be minted</h4>
                            <div className="text-input-wrap">
                                <input type="text" className="text-input-field" name="totalSupply"/>
                            </div>
                        </div>
                    </div>
                    <div className="contract-form-columns">
                        <div className="contract-field-wrap">
                            <h4>Repository selected</h4>
                            <div className="text-input-wrap">
                                <input type="text" className="text-input-field" value={this.props.repoName} disabled/>
                                <input type="text" className="text-input-field" value={this.props.repoUri} hidden='true' name='repoUri'/>
                            </div>
                        </div>
                        <div className="contract-field-wrap set-address-wrap">
                            <h4>Set Ether Address</h4>
                            {
                                members.map((item, i) => (
                                    <div className="text-input-wrap">
                                        <label>{item['login']}</label>
                                        <input type="text" className="text-input-field" id={item['login']} name="members[]"/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="create-contract-action-container">
                    <div className="agree-tnc-wrap">
                        <input type="checkbox" ref={this.consent}/> <label>I have read and understood the terms and conditions of
                        Capita</label>
                    </div>
                    <div className="btn-block">
                        <div className="btn-text-wrap">
                            <button type='submit'><span>Create Contract</span></button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    }
}

const mapStateToProps = state => ({
    ...state
});
const mapDispatchToProps = dispatch => ({
    createContract:(_payload)=>dispatch(createContract(_payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContractDetails);