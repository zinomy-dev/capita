import logo from '../img/capita-logo.png' 
 const Footer = ()=>{
    return <footer className="footer">
    <div className="footer-content">
        <div className="logo-wrap">
            <img src={logo} alt="Capita"/>
        </div>
        <div className="links-wrap">
            <ul>
                <li><a href="">How it works</a></li>
                <li><a href="">About us</a></li>
            </ul>
        </div>
        <p className="subtext copyright">Copyright © 2022 Capita. All Rights Reserved.</p>
    </div>
</footer>;
};

export default Footer;