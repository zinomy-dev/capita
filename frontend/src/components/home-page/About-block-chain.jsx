import blockchain from '../../img/blockchain-explained.png';
const AboutBlockChain = () => {
    return <section className="homepage aboutblockchain-section coloured-bg">
    <div className="container">
        <div className="content-wrap">
            <div className="two-column-container">
                <div className="each-block">
                    <p className="subtitle">SUBTITLE</p>
                    <h2 className='section-heading-style'>Why Tokenize</h2>
                    <p className="subtext">Collaborative development platforms like GitHub have led to an explosion of creativity and value creation by teams of developers working remotely, on a global scale.  Unfortunately, the existing methods for securing and sharing the benefits of this work have not kept pace. Traditional legal structures, like partnerships or corporations, are expensive and time consuming to organize, and may be ineffective for Projects where contributors live and work in different countries.</p>
                    <p className="subtext">Blockchain technology overcomes these issues:  your Project license and IP are tokenized and recorded, immutably, on a decentralized public network for any future reference and use. And the tokens representing ownership of the Project convey all of the benefits of ownership, so you can reward contributors, anywhere in the world, without the need for lawyers, contracts, and intermediaries.</p>
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