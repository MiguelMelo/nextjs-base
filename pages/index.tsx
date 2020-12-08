import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div className=" h-screen flex justify-center items-center bg-cm-gray">
      <Head>
        <title>NextJS Base</title>
      </Head>

      <main className="container mx-auto py-4 flex flex-col text-center items-center">
        <h1 className="text-5xl font-medium mb-2 text-cm-yellow">
          Welcome to NextJS Base!
        </h1>
        <h2 className="text-xl font-normal text-gray-500 mb-2">
          A ReactJS + NextJS + TailwindCSS structure made by Carlos 😉
        </h2>
        <p className="text-lg font-normal text-gray-500">
          To start coding edit{' '}
          <code className="bg-gray-800 py-1 px-2 rounded text-gray-400">
            pages/index.tsx
          </code>
        </p>
        <div className="border-t border-cm-light-gray w-20 mt-4" />
      </main>
    </div>
  );
};

export default Home;
