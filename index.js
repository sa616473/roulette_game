
const Airdrop = require('./airdrop')
const WalletBalance = require('./walletBalance')
const transfer = require('./transferSol')

const web3 = require("@solana/web3.js");


const connection=new web3.Connection(web3.clusterApiUrl("devnet"),"confirmed");

//For checking whether the connection is successfully made
// console.log(connection);

const userWallet_from=web3.Keypair.generate();
const userWallet_to=web3.Keypair.generate();


const userPublicKey = userWallet_from.publicKey
const userSecretKey = userWallet_from.secretKey



const main = async () => {
    await WalletBalance.getWalletBalance(userPublicKey)
    await Airdrop.airDropSol(userSecretKey, 2)
    await WalletBalance.getWalletBalance(userPublicKey)
    await WalletBalance.getWalletBalance(userWallet_to.publicKey)
    console.log( await transfer.transferSOL(userWallet_from, userWallet_to, 1))
    await WalletBalance.getWalletBalance(userWallet_from.publicKey)
}

main();

