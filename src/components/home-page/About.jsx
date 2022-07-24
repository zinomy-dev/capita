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
                    <h2 className='section-heading-style'>Why Use <strong>Capita</strong></h2>
                    <p className="subtext">Today’s technology stack is built upon open source software, created collaboratively by developers like you.  But, the engineers and developers who contribute to these vital projects receive little, if any, benefit, from the value they create.  We are on a mission to change this.</p>
                    <p className="subtext"><strong>Capita</strong> enables developers to tokenize collaborative software projects, including open source, commercial, and hybrid projects.  Once a Project is on-chain, the ownership and provenance of the underlying code and associated intellectual property (IP) is forever associated with the author and selected contributors.  Importantly, any revenues or other benefits from licensing or use of the software flows directly to the token holders. </p>
                </div>
            </div>
        </div>
    </div>
</section>;
}

export default Abount;