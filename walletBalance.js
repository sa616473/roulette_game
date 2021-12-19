const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL,

  } = require('@solana/web3.js')



const getWalletBalance = async (publicKey) => {
    try {
      const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
    //   const myWallet = await Keypair.fromSecretKey(secretKey)
  
      //Querying the wallet balance
      const walletBalance = await connection.getBalance(
        new PublicKey(publicKey),
      )
  
      console.log(`=> For wallet address ${publicKey}`)
      console.log(
        `   Wallet balance: ${parseInt(walletBalance) / LAMPORTS_PER_SOL}SOL`,
      )
    } catch (err) {
      console.log(err)
    }
  }

exports.getWalletBalance = getWalletBalance;
