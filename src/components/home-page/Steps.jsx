import okIcon from '../../img/ok-icon.png';
import smileIcon from '../../img/ok-icon.png';
import focusIcon from '../../img/focus-icon.png';
const Steps = () => {
    return <section className="homepage steps-section coloured-bg">
    <div className="container">
        <div className="content-wrap">
            <p className="subtitle">easy start</p>
            <h2>Set up your partnership contract <br/>in 3 easy steps</h2>
            <div className="column-container">
                <div className="each-column">
                    <div className="img-wrap">
                        <img src={okIcon} alt="Simple"/>
                    </div>
                    <h4>Simple</h4>
                    <p className="subtext">one minute setup with your <br/>GitHub credentials</p>
                </div>
                <div className="each-column">
                    <div className="img-wrap">
                        <img src={smileIcon} alt="Free"/>
                    </div>
                    <h4>Free</h4>
                    <p className="subtext">to establish and maintain your <br/>on-chain license</p>
                </div>
                <div className="each-column">
                    <div className="img-wrap">
                        <img src={focusIcon} alt="Flexible"/>
                    </div>
                    <h4>Flexible</h4>
                    <p className="subtext">reward contributors, accept <br/>payments, and manage your IP <br/>with a few clicks</p>
                </div>
            </div>
        </div>
    </div>
</section>;
}

export default Steps;