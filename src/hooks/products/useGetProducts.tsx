import useAxios from 'axios-hooks';

export const useGetProducts = () => {
  return useAxios('/products/');
};
