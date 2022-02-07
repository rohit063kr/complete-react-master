import { useCallback } from 'react';

const useSendRequest = function () {
  const sendRequest = useCallback(async function (requestConfig) {
    const response = await fetch(requestConfig.url, {
      method: requestConfig.method ? requestConfig.method : 'GET',
      headers: requestConfig.headers ? requestConfig.headers : {},
      body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
    });

    const data = await response.json();
    return data;
  }, []);

  return { sendRequest };
};

export default useSendRequest;
