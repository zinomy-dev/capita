import aboutIcon from '../../img/about-section.png';
const Abount = () => {
    return <section className="homepage about-section white-bg">
    <div className="container">
        <div className="content-wrap">
            <div className="two-column-container">
                <div className="each-block">
                    <div className="img-wrap">
                        <img src={aboutIcon} alt="About Capita"/>
                    </div>
                </div>
                <div className="each-block">
                    <p className="subtitle">SUBTITLE</p>
                    <h2>About Capita</h2>
                    <p className="subtext">Technology as we know today is powered by open source software and pieces of code developed by developers like you. However the profits and gains made by these softwares haven’t translated into proportionate rewards to the engineers and developers who actually contributed to it. We are on a mission to change this.
                    <br/>Capita is a platform for tokenizing collaborative software projects, including open source, commercial, and hybrid Projects. Capita is built to integrate with Github and, in some respects, is a corollary technology: Github enables the management of inputs to a Project, while Capita enables the management of outputs from such Project.</p>
                </div>
            </div>
        </div>
    </div>
</section>;
}

export default Abount;