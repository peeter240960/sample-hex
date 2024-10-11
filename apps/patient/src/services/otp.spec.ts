import { OtpModel, OtpBlacklistModel} from '../models/Otp';
import {
  IOtpRepository,
  IOtpBlacklistRepository,
} from '../repositories/IOtpRepository';
import { ISmsRepository } from '../repositories/ISmsRepository';
import { OtpService } from './otp';

class MockSmsRepository implements ISmsRepository {
  sendOtp(_phoneNumber: string, _otp: string) {
    console.log('Sending OTP to ' + _phoneNumber + ' with OTP ' + _otp);
  }
}
class MockOtpRepository implements IOtpRepository {
  private readonly result: OtpModel = {
    otp: '',
    id: 0,
    ipAddress: '',
    phone: '',
    reference: '',
    createdAt: undefined,
    expiredAt: undefined,
    verifiedAt: undefined,
  };
  async create() {
    return this.result;
  }
  async findMany() {
    return [this.result];
  }
  async findUnique() {
    return this.result;
  }
  async findFirst() {
    return this.result;
  }
  async count() {
    return 0;
  }
  async update() {
    return this.result;
  }
  async delete() {
    return this.result;
  }
}
class MockOtpBlacklistRepository implements IOtpBlacklistRepository {
  private readonly result: OtpBlacklistModel = {
    id: 0,
    ipAddress: '192.168.1.1',
    createdAt: undefined,
    expiredAt: undefined,
  };
  async create() {
    return this.result;
  }
  async findMany() {
    return [this.result];
  }
  async findUnique() {
    return this.result;
  }
  async findFirst() {
    return this.result;
  }
  async count() {
    return 0;
  }
  async update() {
    return this.result;
  }
  async delete() {
    return this.result;
  }
}

describe('OtpService', () => {
  let otpService: OtpService;
  let otpBlacklistRepository: IOtpBlacklistRepository;
  let otpRepository: IOtpRepository;
  let smsRepository: ISmsRepository;

  beforeEach(() => {
    otpBlacklistRepository = new MockOtpBlacklistRepository();
    otpRepository = new MockOtpRepository();
    smsRepository = new MockSmsRepository();
    otpService = new OtpService(
      otpRepository,
      otpBlacklistRepository,
      smsRepository
    );
  });

  it('should throw permission denied when IP address is blacklisted', async () => {
    await expect(
      otpService.request('192.168.1.1', '1234567890')
    ).rejects.toThrow('Permission denied');
  });
});
