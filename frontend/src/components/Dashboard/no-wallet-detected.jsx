import React from "react";

export default function NoWalletDetected() {
    return (
        <article className="main">
            <div className="row justify-content-md-center">
                <div className="col-6 p-4 text-center">
                    <p>
                        No Ethereum wallet was detected. <br />
                        Please install{" "}
                        <a
                            href="http://metamask.io"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            MetaMask
                        </a>
                        .
                    </p>
                </div>
            </div>
        </article>
    );
}
