import { Component, createRef } from "react";
import Banner from "../components/home-page/Banner";
import Steps from "../components/home-page/Steps";
import About from "../components/home-page/About";
import HowItWorks from "../components/home-page/How-it-works";
import GetStarted from "../components/home-page/Get-started";
import AboutBlockChain from "../components/home-page/About-block-chain";
export default class Home extends Component {
    constructor(props) {
        super();
        this.myRef = createRef();
        this.state = {
            loading: true,
            data: null
        };
    }

    componentWillReceiveProps(props){
        this.setState({
            loading: props.loading,
            user: props.data
        });
    }
    
    render() {
        return <>
            <Banner loading={this.state.loading} loggedIn = {!this.state.loading} myRef = {this.myRef}/>
            <Steps></Steps>
            <About></About>
            <HowItWorks></HowItWorks>
            <GetStarted myRef = {this.myRef}></GetStarted>
            <AboutBlockChain></AboutBlockChain>
        </>
    }
}