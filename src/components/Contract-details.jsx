import { Component } from "react";
import { connect } from "react-redux";
class ContractDetails extends Component {
    constructor(props) {
        super();
    }

    render() {
        const {
            organizationName
        } = this.props
        return <div className="contract-details-container">
        <h2>Capita Contract Details</h2>
        <div className="contract-form-wrap">
            <div className="contract-form-columns">
                <div className="contract-field-wrap">
                    <h4>Contract Name</h4>
                    <div className="text-input-wrap">
                        <input type="text" className="text-input-field"/>
                    </div>
                </div>
                <div className="contract-field-wrap">
                    <h4>Token Name &amp; Symbol</h4>
                    <div className="text-input-wrap token-field">
                        <input type="text" className="text-input-field"/>
                        <div className="token-symbol-block">SCH</div>
                    </div>
                </div>
                <div className="contract-field-wrap">
                    <h4>Tokens to be minted</h4>
                    <div className="text-input-wrap">
                        <input type="text" className="text-input-field"/>
                    </div>
                </div>
            </div>
            <div className="contract-form-columns">
                <div className="contract-field-wrap">
                    <h4>Repository selected</h4>
                    <div className="text-input-wrap">
                        <input type="text" className="text-input-field"/>
                    </div>
                </div>
                <div className="contract-field-wrap set-address-wrap">
                    <h4>Set Ether Address</h4>
                    <div className="text-input-wrap">
                        <label>John Smith</label>
                        <input type="text" className="text-input-field"/>
                    </div>
                    <div className="text-input-wrap">
                        <label>Alex</label>
                        <input type="text" className="text-input-field"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="create-contract-action-container">
            <div className="agree-tnc-wrap">
                <input type="checkbox"/> <label>I have read and understood the terms and conditions of Capita</label>
            </div>
            <div className="btn-block">
                <div className="btn-text-wrap">
                    <span>Create Contract</span>
                </div>
            </div>
        </div>
    </div>
    }
}
const mapStateToProps = state => ({
    ...state
  });
  const mapDispatchToProps = dispatch => ({
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ContractDetails);