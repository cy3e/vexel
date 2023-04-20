import React from "react";
import {useConnections } from "../provider/ConnectionProvider";

export default async function buy() {
    //sendSol.js
const web3 =  require("@solana/web3.js");

(async () => {
  const web3 =  require("@solana/web3.js");

  // Connect to cluster
  const connection = new web3.Connection(
     useConnections, // check
    'confirmed',
  );
  // console.log(connection) Uncomment this to test if your connection is working

    //sendSol.js
const from = web3.Keypair.generate();
const airdropSignature = await connection.requestAirdrop(
  from.publicKey,
  web3.LAMPORTS_PER_SOL, // 10000000 Lamports in 1 SOL
);
await connection.confirmTransaction(airdropSignature);
 const to = web3.Keypair.generate();''

    const transaction = new web3.Transaction().add(
        web3.SystemProgram.transfer({
            fromPubkey: from.publicKey,
            toPubkey: to.publicKey,
            lamports:web3.LAMPORTS_PER_SOL/100,
        }),
    )
    const signature = web3.sendAndConfirmTransaction(
        connection,
        transaction,
        [from],
    );
    console.log ('Signature', signature)
    })
}