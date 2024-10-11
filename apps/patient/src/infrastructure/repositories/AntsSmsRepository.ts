import { ISmsRepository } from '../../repositories/ISmsRepository';

export class AntsSmsRepository implements ISmsRepository {
  sendOtp(phoneNumber: string, otp: string) {
    console.log('Sending OTP to ' + phoneNumber + ' with OTP ' + otp);
  }
}
