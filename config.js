var api = 'http://127.0.0.1:45501';
var donationAddress = "";
var blockTargetInterval = 120; // enter the block interval in seconds
var coinUnits = 100000;  // enter in the amount of atomic units in 1 coin, eg. 100 shells = 1 trtl
var totalSupply =  25000000000000; // enter the total supply in atomic units
var symbol = 'elph'; // enter the coin's ticker
var refreshDelay = 30000;

// pools stats by MainCoins
var networkStat = {
 "elph": [
	["pool.elphyrecoin.xyz", "http://pool.elphyrecoin.xyz:9999"]
 ]
};

var networkStat2 = {
    "elph": [
	[""]
 ]
};
