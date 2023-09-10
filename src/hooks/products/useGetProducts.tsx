import useAxios from 'axios-hooks';

type Props = {
  params?: {
    page?: number;
    keyword?: string;
    limit?: number;
    sort?: 'desc' | '';
  };
};

export const useGetProducts = () => {
  return useAxios('/products/');
};
