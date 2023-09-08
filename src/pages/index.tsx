import { SEO } from '@/components/organisms';
import useAxios from 'axios-hooks';

export default function Home() {
  const [{ data, loading, error }, refetch] = useAxios('/products');

  return (
    <>
      <SEO />
      <main>hello {loading ? 1 : 2}</main>
    </>
  );
}
