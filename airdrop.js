const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL,
  } = require('@solana/web3.js')

  const WalletBalance = require('./walletBalance')

//Airdrop
const airDropSol = async (secretKey, numSol) => {
    try {
        const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
        const walletKeyPair = await Keypair.fromSecretKey(secretKey);
        console.log(`-- Airdropping 5 SOL --`)
        const fromAirDropSignature = await connection.requestAirdrop(
            walletKeyPair.publicKey,
            numSol * LAMPORTS_PER_SOL
        );
        await connection.confirmTransaction(fromAirDropSignature);
        // console.log(WalletBalance.getWalletBalance(secretKey, walletKeyPair.publicKey))
    } catch (err) {
        console.log(err);
    }
};

exports.airDropSol = airDropSol;
