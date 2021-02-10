
import { createSlice, combineReducers, PayloadAction } from '@reduxjs/toolkit';
import type { HelloWorldResult } from '@/dto/helloWorld';

const resultInitialState: HelloWorldResult = {
    url: "https://devnet.solana.com",
    payerAccount: "",
    programId: "FdcHmS8Ko9xGEKJogxMnLF3eR6YNATszmTFcWzFNQ7n7",
    greetedPubkey: "3ugHswV4h9nJbaAwGnjH84ebftsyNp2eo1e5hL3h8oKa",
    numGreetes: 0
};

const helloWorldSlice = createSlice({
  name: 'helloWorldState',
  initialState: resultInitialState,
  reducers: {
    setHelloWorldResult: (state: HelloWorldResult, action: PayloadAction<HelloWorldResult>): HelloWorldResult =>
      action.payload,
  },
});

export const helloWorldReducer = combineReducers({
    result: helloWorldSlice.reducer
});

export const { setHelloWorldResult } = helloWorldSlice.actions;