import { blknum, Function, hash, Traceaction, Traceresult, uint64 } from '@modules/types';

export declare type Trace = {
  blockHash: hash;
  blockNumber: blknum;
  subtraces: uint64;
  traceAddress: string[];
  transactionHash: hash;
  transactionIndex: blknum;
  type: string;
  error: string;
  action: Traceaction;
  result: Traceresult;
  articulatedTrace: Function;
  compressedTrace: string;
};
export declare type TraceArray = Trace[];
