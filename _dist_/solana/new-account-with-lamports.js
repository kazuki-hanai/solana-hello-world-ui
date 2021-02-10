import {Account} from "../../_snowpack/pkg/@solana/web3js.js";
import {sleep} from "../utils/sleep.js";
export async function newAccountWithLamports(connection, lamports = 1e6) {
  const account = new Account();
  let retries = 10;
  await connection.requestAirdrop(account.publicKey, lamports);
  for (; ; ) {
    await sleep(500);
    if (lamports == await connection.getBalance(account.publicKey)) {
      return account;
    }
    if (--retries <= 0) {
      break;
    }
    console.log(`Airdrop retry ${retries}`);
  }
  throw new Error(`Airdrop of ${lamports} failed`);
}
