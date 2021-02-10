import {clusterApiUrl} from "../../_snowpack/pkg/@solana/web3js.js";
function chooseCluster() {
  return "devnet";
}
export const cluster = chooseCluster();
export const url = clusterApiUrl("devnet", false);
export const urlTls = clusterApiUrl("devnet", true);
export const walletUrl = "https://solana-example-webwallet.herokuapp.com/";
