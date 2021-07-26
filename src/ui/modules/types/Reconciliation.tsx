import {
  address,
  blknum,
  int256,
  timestamp,
  uint64,
} from '@modules/types';

export declare type Reconciliation = {
  blockNumber: blknum;
  transactionIndex: blknum;
  timestamp: timestamp;
  assetAddr: address;
  assetSymbol: string;
  decimals: uint64;
  prevBlk: blknum;
  prevBlkBal: int256;
  begBal: int256;
  begBalDiff: int256;
  amountIn: int256;
  amountOut: int256;
  internalIn: int256;
  internalOut: int256;
  selfDestructIn: int256;
  selfDestructOut: int256;
  minerBaseRewardIn: int256;
  minerNephewRewardIn: int256;
  minerTxFeeIn: int256;
  minerUncleRewardIn: int256;
  prefundIn: int256;
  gasCostOut: int256;
  endBal: int256;
  endBalCalc: int256;
  endBalDiff: int256;
  amountNet: int256;
  reconciliationType: string;
  reconciled: boolean;
  totalIn: int256;
  totalOut: int256;
};
export declare type ReconciliationArray = Reconciliation[];
