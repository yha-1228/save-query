import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Confirm: NextPage = () => {
  const router = useRouter();

  const handleToPrev = () => {
    router.push({
      pathname: '/',
      query: router.query,
    });
  };

  return (
    <div>
      <Head>
        <title>Post</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css" />
      </Head>

      <main>
        <h1>Confirm</h1>

        <ul>
          <li>username: {router.query.username}</li>
          <li>comment: {router.query.username}</li>
        </ul>

        <button onClick={handleToPrev}>Back to home</button>
      </main>
    </div>
  );
};

export default Confirm;
