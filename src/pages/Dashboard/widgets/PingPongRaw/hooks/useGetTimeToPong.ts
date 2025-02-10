import axios from 'axios';
import BigNumber from 'bignumber.js';
import { contractAddress } from 'config';
import { Address, AddressValue } from 'lib/sdkCore';
import { PingPongResponseType } from '../types';
import { useGetAccount, useGetNetworkConfig } from 'lib/sdkDappCore';

const decodeTime = (data: PingPongResponseType) => {
  const returnValue = data.data.data.returnData[0];
  if (returnValue === '') {
    return 0;
  }

  if (!returnValue) {
    return null;
  }

  const decodedString = Buffer.from(returnValue, 'base64').toString('hex');
  return new BigNumber(decodedString, 16).toNumber();
};

export const useGetTimeToPong = () => {
  const { network } = useGetNetworkConfig();
  const { address } = useGetAccount();

  const getTimeToPong = async () => {
    try {
      const args = new AddressValue(new Address(address)).valueOf().hex();
      const { data } = await axios.post<PingPongResponseType>(
        `${network.apiAddress}/vm-values/query`,
        {
          scAddress: contractAddress,
          funcName: 'getTimeToPong',
          args: [args]
        }
      );

      return decodeTime(data);
    } catch (err) {
      return null;
    }
  };

  return getTimeToPong;
};
