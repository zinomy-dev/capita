import gitHubIcon from '../../img/github-icon.png';
import percentIcon from '../../img/percent-icon.png';
import pencilIcon from '../../img/pencil-icon.png';
const HowItWorks = () => {
    return <section className="homepage howitworks-section coloured-bg">
    <div className="container">
        <div className="content-wrap">
            <p className="subtitle">easy start</p>
            <h2 className='section-heading-style'>3 Easy Steps</h2>
            <div className="column-container">
                <div className="each-column">
                    <div className="img-wrap">
                        <img src={gitHubIcon} alt="Step 1"/>
                    </div>
                    <h4>1. Login</h4>
                    <p className="subtext">Use your GitHub credentials to set up your Capita account, select the Project, and fetch the Project details (contributors, etc.).</p>
                </div>
                <div className="each-column">
                    <div className="img-wrap">
                        <img src={percentIcon} alt="Step 2"/>
                    </div>
                    <h4>2. Allocate</h4>
                    <p className="subtext">Assign tokens to co-authors, contributors and other team members who have added value to the Project.</p>
                </div>
                <div className="each-column">
                    <div className="img-wrap">
                        <img src={pencilIcon} alt="Step 3"/>
                    </div>
                    <h4>3. Mint</h4>
                    <p className="subtext">Add blockchain wallet addresses, launch the smart contract, and mint the tokens.</p>
                </div>
            </div>
        </div>
    </div>
</section>;
}

export default HowItWorks;