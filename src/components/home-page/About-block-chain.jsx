import blockchain from '../../img/blockchain-explained.png';
const AboutBlockChain = () => {
    return <section className="homepage aboutblockchain-section coloured-bg">
    <div className="container">
        <div className="content-wrap">
            <div className="two-column-container">
                <div className="each-block">
                    <p className="subtitle">SUBTITLE</p>
                    <h2>Blockchain Licensing explained</h2>
                    <p className="subtext">Traditionally, creating a partnership contract requires one to float a company, have a lawyer draft a contract adhering to the local jurisdiction. The problem is that in today's world, the collaborators of most projects reside in different countries with different legal implications and hence creating an organization that complies with different geographies is not only difficult, time consuming and expensive, it is also impossible in many cases.
                    <br/>With Blockchain your project license and IP are tokenized and recorded on a decentralized network for any future reference and use. This record is permanent, transparent and untemperable.</p>
                </div>
                <div className="each-block">
                    <div className="img-wrap">
                        <img src={blockchain} alt="Blockchain Licensing explained"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>;
}

export default AboutBlockChain;