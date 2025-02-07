import axios from '@/services/axios.ts';

export function useFetch(url: string, axiosOptions?):Promise<AxiosResponse<any>> {
  const config = {
    url,
    ...axiosOptions
  };

  return axios(config);
}