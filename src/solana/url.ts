import { clusterApiUrl, Cluster } from '@solana/web3.js';
import dotenv from 'dotenv';

function chooseCluster(): Cluster | undefined {
  return 'devnet';
  // dotenv.config();
  // if (!process.env.LIVE) return;
  // switch (process.env.CLUSTER) {
  //   case 'devnet':
  //   case 'testnet':
  //   case 'mainnet-beta': {
  //     return process.env.CLUSTER;
  //   }
  // }
  // if (process.env.CLUSTER) {
  //   throw `Unknown cluster "${process.env.CLUSTER}", check the .env file`;
  // } else {
  //   throw new Error('CLUSTER is not specified, check the .env file');
  // }
}

export const cluster = chooseCluster();

export const url = clusterApiUrl('devnet', false);
export const urlTls = clusterApiUrl('devnet', true);
export const walletUrl = 'https://solana-example-webwallet.herokuapp.com/';
// export const url =
//   process.env.RPC_URL ||
//   (process.env.LIVE ? clusterApiUrl(cluster, false) : 'http://localhost:8899');
// 
// export const urlTls =
//   process.env.RPC_URL ||
//   (process.env.LIVE ? clusterApiUrl(cluster, true) : 'http://localhost:8899');
// 
// export const walletUrl =
//   process.env.WALLET_URL || 'https://solana-example-webwallet.herokuapp.com/';
