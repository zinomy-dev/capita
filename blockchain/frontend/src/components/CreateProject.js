import React, { useState } from "react";

export function CreateProject({ createProject }) {
  const [address, setAddress] = useState([""]);

  function sendCollaboratorAddress(event) {
    const addr = [];
    const input = event.target.value.split(" ").join("");
    const allAddress = input.split(",");

    const final = allAddress.map((ele) => {
      return ele;
    });

    addr && setAddress(final);
  }

  return (
    <div>
      <h4>Create Project</h4>
      <form
        onSubmit={(event) => {
          // This function just calls the transferTokens callback with the
          // form's data.
          event.preventDefault();

          const formData = new FormData(event.target);
          const url = formData.get("url");
          const numOfCollab = formData.get("numOfCollab");
          const totalSupply = formData.get("totalSupply");
          const nameOfToken = formData.get("nameOfToken");
          const symbolOfToken = formData.get("symbolOfToken");

          createProject(
            url,
            numOfCollab,
            address,
            totalSupply,
            nameOfToken,
            symbolOfToken
          );
        }}
      >
        <div className="form-group">
          <label>GitHub Project repository URL</label>
          <input
            className="form-control"
            type="text"
            name="url"
            placeholder="URL"
            required
          />
        </div>
        <div className="form-group">
          <label>Number of Collaborators</label>
          <input
            className="form-control"
            type="number"
            name="numOfCollab"
            placeholder="Number of Collaborators"
            required
          />
        </div>
        <div className="form-group">
          <label>Addreses of Collaborators</label>
          <input
            className="form-control"
            type="text"
            name="addrOfCollab"
            placeholder="Addreses of Collaborators"
            onChange={sendCollaboratorAddress}
            required
          />
        </div>
        <div className="form-group">
          <label>Total tokens to be minted</label>
          <input
            className="form-control"
            type="number"
            name="totalSupply"
            placeholder="Total Supply"
            required
          />
        </div>
        <div className="form-group">
          <label>Name of the Token</label>
          <input
            className="form-control"
            type="text"
            name="nameOfToken"
            placeholder="Token Name"
            required
          />
        </div>
        <div className="form-group">
          <label>Token Symbol</label>
          <input
            className="form-control"
            type="text"
            name="symbolOfToken"
            placeholder="Token Symbol"
            required
          />
        </div>
        <div className="form-group">
          <input
            className="btn btn-primary"
            type="submit"
            value="Create Project"
          />
        </div>
      </form>
    </div>
  );
}
