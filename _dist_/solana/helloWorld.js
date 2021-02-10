import {
  Account,
  Connection,
  PublicKey,
  TransactionInstruction,
  Transaction,
  sendAndConfirmTransaction
} from "../../_snowpack/pkg/@solana/web3js.js";
import {Buffer} from "../../_snowpack/pkg/buffer.js";
import BufferLayout from "../../_snowpack/pkg/buffer-layout.js";
import {url} from "./url.js";
const greetedAccountDataLayout = BufferLayout.struct([
  BufferLayout.u32("numGreets")
]);
const isCluster = (arg) => {
  return arg === "devnet" || arg === "testnet" || arg === "mainnet-beta" || arg === void 0;
};
export class HelloWorldExecutor {
  constructor(url2, privateKey, programId, greetedPubkey) {
    this.url = url2;
    this.connection = new Connection(url2, "singleGossip");
    this.payerAccount = new Account(privateKey.split(",").map((x) => parseInt(x, 10)));
    this.programId = new PublicKey(programId);
    this.greetedPubkey = new PublicKey(greetedPubkey);
  }
  async run() {
    const version = await this.connection.getVersion();
    console.log("Connection to cluster established:", url, version);
    console.log("Saying hello to", this.greetedPubkey.toBase58());
    console.log("Program already loaded to account", this.programId.toBase58());
    const instruction = new TransactionInstruction({
      keys: [{pubkey: this.greetedPubkey, isSigner: false, isWritable: true}],
      programId: this.programId,
      data: Buffer.alloc(0)
    });
    const transactionId = await sendAndConfirmTransaction(this.connection, new Transaction().add(instruction), [this.payerAccount], {
      commitment: "singleGossip",
      preflightCommitment: "singleGossip"
    });
    console.log("transaction: ", transactionId);
    const accountInfo = await this.connection.getAccountInfo(this.greetedPubkey);
    if (accountInfo === null) {
      throw "Error: cannot find the greeted account";
    }
    const info = greetedAccountDataLayout.decode(Buffer.from(accountInfo.data));
    return {
      url: this.url,
      payerAccount: this.payerAccount.publicKey.toBase58(),
      programId: this.programId.toBase58(),
      greetedPubkey: this.greetedPubkey.toBase58(),
      transactionId,
      numGreetes: info.numGreets
    };
  }
}
