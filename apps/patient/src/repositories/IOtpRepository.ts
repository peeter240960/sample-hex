/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import {
  DelegateArgs,
  DelegateReturnTypes,
  IPrismaRepository,
} from '@org/core';
import { OtpBlacklistDelegate, OtpDelegate } from '../models/Otp';

export interface IOtpRepository
  extends IPrismaRepository<
    DelegateArgs<OtpDelegate>,
    DelegateReturnTypes<OtpDelegate>
  > {
  //
}
export interface IOtpBlacklistRepository
  extends IPrismaRepository<
    DelegateArgs<OtpBlacklistDelegate>,
    DelegateReturnTypes<OtpBlacklistDelegate>
  > {
  //
}
