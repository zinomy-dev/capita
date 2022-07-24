import { Component } from "react";
export default class Banner extends Component {
    constructor(props) {
        super();
        this.state = {
            loading: true,
            loggedIn: false,
            myRef: props.myRef
        };
    }
    executeScroll = () => {
        return this.state.myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    componentWillReceiveProps(props) {
        this.setState({
            loading: props.loading,
            loggedIn: props.loggedIn,
            myRef: props.myRef
        });
    }
    github() {
        window.open("http://localhost:5000/auth/github", "_self");
    };
    render() {
        return <section className="homepage banner-section">
            <div className="container">
                <div className="content-wrap">
                    <h1>Protect and share the <br/>rights to your GitHub <br/>Project, on-chain</h1>
                    <p>Reward contributors, instantly. Secure your IP, <br/>forever, for free.</p>
                    <div className="btn-wrap">
                        <div className="btn-block">
                            <div className="btn-text-wrap">
                                <span onClick={this.executeScroll}>Get Started</span>
                            </div>
                        </div>
                        {
                            (!this.state.loggedIn) ?
                                <div className="btn-block" onClick={this.github}>
                                    <div className="btn-text-wrap btn-outline">
                                        <span>Login with your GitHub</span>
                                    </div>
                                </div> : ''
                        }

                    </div>
                </div>
            </div>
        </section>
    }
}