/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import type { HelloWorldResult } from '@/dto/helloWorld';
import {
    Account,
    Connection,
    PublicKey,
    TransactionInstruction,
    Transaction,
    sendAndConfirmTransaction,
    clusterApiUrl,
} from '@solana/web3.js';
import { Buffer } from 'buffer';

// @ts-ignore
import BufferLayout from 'buffer-layout';

import { url } from './url';

const greetedAccountDataLayout = BufferLayout.struct([
    BufferLayout.u32('numGreets'),
]);

type Cluster = 'devnet' | 'testnet' | 'mainnet-beta' | undefined;
const isCluster = (arg: any): arg is Cluster => {
    return arg === 'devnet' || arg === 'testnet' || arg === 'mainnet-beta' || arg === undefined;
}

export class HelloWorldExecutor {
    url: string;
    connection: Connection;
    payerAccount: Account;
    programId: PublicKey;
    greetedPubkey: PublicKey;

    constructor(url:string, privateKey: string, programId: string, greetedPubkey: string) {
        this.url = url;
        this.connection = new Connection(url, 'singleGossip');
        this.payerAccount = new Account(privateKey.split(',').map((x) => parseInt(x, 10)));
        this.programId = new PublicKey(programId);
        this.greetedPubkey = new PublicKey(greetedPubkey);
    }

    async run(): Promise<HelloWorldResult> {
        const version = await this.connection.getVersion();
        console.log('Connection to cluster established:', url, version);
        console.log('Saying hello to', this.greetedPubkey.toBase58());
        // const _programAccount = await this.connection.getAccountInfo(this.programId);
        console.log('Program already loaded to account', this.programId.toBase58());

        const instruction = new TransactionInstruction({
            keys: [{ pubkey: this.greetedPubkey, isSigner: false, isWritable: true }],
            programId: this.programId,
            data: Buffer.alloc(0), // All instructions are hellos
        });
        const transaction = await sendAndConfirmTransaction(
            this.connection,
            new Transaction().add(instruction),
            [this.payerAccount],
            {
                commitment: 'singleGossip',
                preflightCommitment: 'singleGossip',
            },
        );
        console.log("transaction: ", transaction);

        const accountInfo = await this.connection.getAccountInfo(this.greetedPubkey);
        if (accountInfo === null) {
            throw 'Error: cannot find the greeted account';
        }
        const info = greetedAccountDataLayout.decode(Buffer.from(accountInfo.data));
        return {
            url: this.url,
            payerAccount: this.payerAccount.publicKey.toBase58(),
            programId: this.programId.toBase58(),
            greetedPubkey: this.greetedPubkey.toBase58(),
            numGreetes: info.numGreets
        };
    }
}