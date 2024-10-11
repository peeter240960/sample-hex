export interface ISmsRepository {
  sendOtp: (phoneNumber: string, otp: string) => void
}