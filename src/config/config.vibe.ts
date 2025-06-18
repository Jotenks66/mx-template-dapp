import { CustomEnvironmentsEnum } from './environment.enum';
import { LibraryConfig } from '@multiversx/sdk-core';

export * from './sharedConfig';

// Set the HRP for vibe addresses
LibraryConfig.DefaultAddressHrp = 'vibe';

export const API_URL = 'https://vibeox-api.multiversx.com/';
export const contractAddress =
  'erd1qqqqqqqqqqqqqpgqtmcuh307t6kky677ernjj9ulk64zq74w9l5qxyhdn7';
export const environment = CustomEnvironmentsEnum.vibe;
export const sampleAuthenticatedDomains = [API_URL]; 