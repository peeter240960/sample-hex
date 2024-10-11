import { DelegateArgs, DelegateReturnTypes, PrismaRepository } from '@org/core';
import {
  IOtpBlacklistRepository,
  IOtpRepository,
} from '../../repositories/IOtpRepository';
import { OtpBlacklistDelegate, OtpDelegate } from '../../models/Otp';
import { prisma } from '../db/prisma';

export class PrismaOtpRepository
  extends PrismaRepository<
    OtpDelegate,
    DelegateArgs<OtpDelegate>,
    DelegateReturnTypes<OtpDelegate>
  >
  implements IOtpRepository
{
  constructor() {
    super(prisma.otp);
  }
}

export class PrismaOtpBlacklistRepository
  extends PrismaRepository<
    OtpBlacklistDelegate,
    DelegateArgs<OtpBlacklistDelegate>,
    DelegateReturnTypes<OtpBlacklistDelegate>
  >
  implements IOtpBlacklistRepository
{
  constructor() {
    super(prisma.otpBlacklist);
  }
}
