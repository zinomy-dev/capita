import { Link } from "react-router-dom";
const GetStarted = (props) => {
    return <section className="homepage getstarted-section coloured-bg">
    <div className="container" ref={props.myRef}>
        <div className="content-wrap">
            <p className="subtitle">SUBTITLE</p>
            <h2>Get started now</h2>
            <p className="subtext">Protect your future interest in any collaborative <br/>project, open source or closed</p>
            <div className="btn-wrap">
                <span className="btn-block">Get Started</span>
            </div>
        </div>
    </div>
</section>;
}

export default GetStarted;