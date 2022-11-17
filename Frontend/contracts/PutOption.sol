// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/utils/math/SafeCast.sol";

contract putOption is Ownable{

    event Purchase(bool purchased);
    event BuyerProfit(bool profit);
    event BuyerLoss(bool loss);
    event Retrieve(bool retrieve);
   
    AggregatorV3Interface internal priceFeed;
    address seller;
    bool funded;
    bool locked;
    mapping(address => bool) public purchased;
    uint strikePriceValue;
    uint strikePrice;
    uint premium;
    uint quantity;
    uint expiry;

constructor(uint _premium, uint _strikePrice, uint _strikePriceValue, uint _quantity, uint _expiry){
    priceFeed = AggregatorV3Interface(0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e);
    funded = false;
    locked = false;
    premium = _premium;
    strikePriceValue = _strikePriceValue;
    strikePrice = _strikePrice;
    quantity = _quantity;
    expiry = _expiry;
    seller = msg.sender;
}
    
   function getLatestPrice() public view returns(int) {
        (
            /*uint80 roundID*/,
            int price,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = priceFeed.latestRoundData();

        return (price / 1e6);
    }

    function fundContract() public payable onlyOwner{
        require(funded == false,"You have already funded the contract");
        require(msg.value == strikePriceValue * quantity,"Wrong price");
        funded=true;
    }


    function getBalance() public view returns(uint256) {
    return address(this).balance;
    }


     function purchase() public payable{
        require(block.timestamp < expiry,"Contract has expired");
        require(locked==false,"The contract is locked");
        require(funded == true,"Contract not funded");
        require(msg.value == premium,"Invalid purchase amount");
        purchased[msg.sender] = true;
        locked = true; 
        emit Purchase(locked);
    }

      function sell() public{
        uint ethPrice = (SafeCast.toUint256(getLatestPrice()));
        require (purchased[msg.sender] == true,"You have not purchased the call");
        if (block.timestamp >= expiry){
            payable(seller).transfer(address(this).balance);
             purchased[msg.sender] = false; 
             locked = false;
             funded=false;
             emit BuyerLoss(locked);
        }
        if (ethPrice < strikePrice && block.timestamp <= expiry){
            payable(msg.sender).transfer(address(this).balance - premium);
            payable(seller).transfer(address(this).balance);
            purchased[msg.sender] = false;
            locked = false;
            funded=false;
            emit BuyerProfit(locked);
        }else if (ethPrice > strikePrice && block.timestamp <= expiry){
        payable(seller).transfer(address(this).balance);
         purchased[msg.sender] = false;
         locked = false;
         funded=false;
         emit BuyerLoss(locked);
        }

    }

     function sellerRetrieve() public onlyOwner{
         require(block.timestamp >= expiry,"Contract has not expired");
         payable(seller).transfer(address(this).balance);
         purchased[msg.sender] = false;
         locked = false;
         funded=false;
         emit Retrieve(locked);
     }


    function viewStrikePrice() public view returns(uint){
        return strikePrice;
    } 

    function viewStrikeValue() public view returns(uint){
        return strikePriceValue;
    }

    function viewPremium() public view returns(uint){
        return premium;
    } 

     function viewQuantity() public view returns(uint){
        return quantity;
     }

      function viewExpiry() public view returns(uint){
        return expiry;
    } 

}