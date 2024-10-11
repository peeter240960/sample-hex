import { AntsSmsRepository } from './infrastructure/repositories/AntsSmsRepository';
import {
  PrismaOtpBlacklistRepository,
  PrismaOtpRepository,
} from './infrastructure/repositories/PrismaOtpRepository';
import { OtpService } from './services/otp';

export class Registry {
  static get otpService() {
    const otpBlacklistRepository = new PrismaOtpBlacklistRepository();
    const otpRepository = new PrismaOtpRepository();
    const smsRepository = new AntsSmsRepository();
    return new OtpService(otpRepository, otpBlacklistRepository, smsRepository);
  }
}
