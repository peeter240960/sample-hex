import {
  IOtpBlacklistRepository,
  IOtpRepository,
} from '../repositories/IOtpRepository';
import { ISmsRepository } from '../repositories/ISmsRepository';

export class OtpService {
  constructor(
    private readonly otpRepository: IOtpRepository,
    private readonly otpBlacklistRepository: IOtpBlacklistRepository,
    private readonly smsRepository: ISmsRepository
  ) {}

  async request(ipAddress: string, phone: string) {
    const blacklist = await this.otpBlacklistRepository.findFirst({
      where: { ipAddress, expiredAt: { gte: new Date() } },
    });

    if (blacklist) {
      throw new Error('Permission denied');
    }
    const [thottleIp, thottlePhoneInLong] = await Promise.all([
      this.otpRepository.count({
        where: {
          ipAddress,
        },
      }),
      this.otpRepository.findMany({
        where: {
          phone,
        },
      }),
    ]);

    if (thottleIp > thottlePhoneInLong.length) {
      throw new Error('Permission denied');
    }

    const otp = String(Math.floor(100000 + Math.random() * 900000));
    const result = await this.otpRepository.create({
      data: {
        ipAddress,
        phone,
        otp,
        expiredAt: new Date(Date.now() + 5 * 60 * 1000),
      },
    });

    this.smsRepository.sendOtp(phone, otp);
    return result;
  }
}
