import {
  address,
  blknum,
  date,
  Function,
  gas,
  hash,
  Receipt,
  ReconciliationArray,
  timestamp,
  TraceArray,
  uint64,
  wei,
} from '@modules/types';

export declare type Transaction = {
  hash: hash;
  blockHash: hash;
  blockNumber: blknum;
  transactionIndex: blknum;
  nonce: uint64;
  timestamp: timestamp;
  from: address;
  to: address;
  value: wei;
  extraValue1: wei;
  extraValue2: wei;
  gas: gas;
  gasPrice: gas;
  input: string;
  isError: boolean;
  hasToken: boolean;
  cachebits: boolean;
  reserved2: boolean;
  receipt: Receipt;
  traces: TraceArray;
  articulatedTx: Function;
  compressedTx: string;
  statements: ReconciliationArray;
  finalized: boolean;
  date: date;
  fromName: string;
  toName: string;
  extraData: string;
};
export declare type TransactionArray = Transaction[];
