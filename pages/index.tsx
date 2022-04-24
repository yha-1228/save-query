import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import useQueryValues from '../hooks/useQueryValues';

type Values = {
  username: string;
  comment: string;
};

const initialValues: Values = {
  username: '',
  comment: '',
};

const Home: NextPage = () => {
  const router = useRouter();
  const [values, setValues] = useQueryValues({
    initialState: initialValues,
    requieredKeys: ['username', 'comment'],
  });

  const handleChange = (e: React.ChangeEvent<any>) => {
    setValues((prevValues) => ({ ...prevValues, [e.target.name]: e.target.value }));
  };

  const handleSubimit = (e: React.FormEvent<any>) => {
    e.preventDefault();

    router.push({
      pathname: '/confirm',
      query: values,
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
        <h1>Post</h1>

        <form onSubmit={handleSubimit}>
          <div>
            <label htmlFor="username">username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="comment">comment</label>
            <input
              type="text"
              id="comment"
              name="comment"
              value={values.comment}
              onChange={handleChange}
            />
          </div>

          <button>Post</button>
        </form>
      </main>
    </div>
  );
};

export default Home;
