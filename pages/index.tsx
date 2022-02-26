import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>

        <link rel="shortcut icon" href="./portfolio.png" />
      </Head>
      <div className="hero min-h-screen bg-base-200">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              I am web developer , passionate of web technology , with 2 years
              of Experience in web development using html ,css ,react ,nodejs
              express,
            </p>
            <button className="btn btn-primary">Download </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
