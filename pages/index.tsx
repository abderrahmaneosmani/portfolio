/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
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
              I'm a web developer who's fascinated by web technologies. Bringing
              two years of experience in full-stack web development with tools
              such as HTML, CSS, Nodejs , React, and Express.
            </p>
            <Link href="/api/getPdf">
              <button className="btn btn-primary">Hire me </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
