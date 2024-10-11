import { Registry } from '../../registry';

export const loginRoute = {
  requestOtp: async () => {
    // Validators

    const result = await Registry.otpService.request('127.0.0.1', '1234567890');

    return result
  },
};