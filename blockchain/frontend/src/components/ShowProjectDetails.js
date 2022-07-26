
import React, { useState } from "react";

const ShowProjectDetails = ({ projectList, getSecOwners, setAllocation, disburse, getAllocation }) => {
  const [allocation, setAllocationValue] = useState([""]);

  function setAllocations(event) {
    const alloc = [];
    const input = event.target.value.split(" ").join("");
    const allocInput = input.split(",");

    const final = allocInput.map((ele) => {
      return ele;
    });

    alloc && setAllocationValue(final);
  }
  
  return (
    <div>
      <hr />
      <h3>Project Details</h3>
      {projectList.map((ele, index) => {
        return (
          <div key={index}>
            <hr />
            <p>Project ID: {index+1}</p>
            <p>Project URL: {ele[0]}</p>
            <p>Token Address (ERC20): {ele[1]}</p>
            <p>Number Of Secondary Owners: {Number(ele[2])}</p>
            <p>Owner: {ele[3]}</p>
            <p>Disbursal Status: {ele[4].toString()}</p>
            {/* <p>Address of secondary owners: {getSecOwners(index)}</p> */}
            <button
              onClick={(e) => {
                getSecOwners(index+1);
              }}
            >
              Get Secondary Owners
            </button>
            <button
              onClick={(e) => {
                getAllocation(index+1);
              }}
            >
              Get allocation
            </button>
          <form
              onSubmit={(event) => {
                event.preventDefault();

                setAllocation(
                  index+1, allocation
                );
              }}
            >
            <div className="form-group">
              {/* <label>Set allocation</label> */}
              <input
                className="form-control"
                type="text"
                placeholder="Enter Allocation percentages"
                onChange={setAllocations}
                required
              />
            </div>
            <div className="form-group">
            <input
              className="btn btn-primary"
              type="submit"
              value="Set Allocation"
            />
            </div>
          </form>
          <button 
            style={{backgroundColor: 'lime'}}
            onClick={ (e) => {
              disburse(index+1)
              }}>DISBURSE
          </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default ShowProjectDetails;
