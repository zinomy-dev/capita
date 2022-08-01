//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Capita {

    struct Project {
        string projectURL;
        address erc20;
        uint numOfsecOwners;
        address[] secOwners;
        uint[] allocation;
        address owner;
        bool disbursed;
    }

    mapping (uint => Project) public projects;
    uint public numOfProjects;

    function createProject(string memory _projectURL, uint _numOfsecOwners, address[] memory _secOwners, uint _totalSupply, string memory _tokenName, string memory _symbol) public returns (uint projectID){
        numOfProjects++;
        projects[numOfProjects].projectURL = _projectURL;
        projects[numOfProjects].numOfsecOwners = _numOfsecOwners;
        projects[numOfProjects].secOwners = _secOwners;
        projects[numOfProjects].owner = payable(msg.sender);
        TokenCreator token = new TokenCreator(_totalSupply, _tokenName, _symbol);
        projects[numOfProjects].erc20 = address(token);
        return numOfProjects;
    }

    function getSecOwners(uint projectID) public view returns(address[] memory){
        return(projects[projectID].secOwners);
    }

    function getAllocation(uint projectID) public view returns(uint[] memory){
        return(projects[projectID].allocation);
    }

    function setAllocation(uint projectID, uint[] memory _allocation) public {
        require(projects[projectID].owner == msg.sender, "You are not the owner of this project");
        projects[projectID].allocation = _allocation;
    }

    function disburse(uint projectID) public {
        require(projects[projectID].owner == msg.sender, "You are not the owner of this project");
        IERC20 token;
        token = IERC20(projects[projectID].erc20);
        for (uint i = 0;i < projects[projectID].secOwners.length; i++) {
            token.transfer(projects[projectID].secOwners[i], (projects[projectID].allocation[i]*token.totalSupply())/100);
        }
        projects[projectID].disbursed = true;
    }
}


contract TokenCreator is ERC20 {
    constructor(uint initialSupply, string memory name, string memory abbr) ERC20(name, abbr) {
        _mint(msg.sender, initialSupply *10**18);
    }
}