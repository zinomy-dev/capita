import gitHubIcon from '../../img/github-icon.png';
import percentIcon from '../../img/percent-icon.png';
import pencilIcon from '../../img/pencil-icon.png';
const HowItWorks = () => {
    return <section className="homepage howitworks-section coloured-bg">
    <div className="container">
        <div className="content-wrap">
            <p className="subtitle">easy start</p>
            <h2>How Capita Works</h2>
            <div className="column-container">
                <div className="each-column">
                    <div className="img-wrap">
                        <img src={gitHubIcon} alt="Step 1"/>
                    </div>
                    <h4>Step 1</h4>
                    <p className="subtext">Login with your Github account to fetch the team details</p>
                </div>
                <div className="each-column">
                    <div className="img-wrap">
                        <img src={percentIcon} alt="Step 2"/>
                    </div>
                    <h4>Step 2</h4>
                    <p className="subtext">Assign % ownership to each of the team members</p>
                </div>
                <div className="each-column">
                    <div className="img-wrap">
                        <img src={pencilIcon} alt="Step 3"/>
                    </div>
                    <h4>Step 3</h4>
                    <p className="subtext">Add your blockchain wallet addresses and mint the contract</p>
                </div>
            </div>
        </div>
    </div>
</section>;
}

export default HowItWorks;