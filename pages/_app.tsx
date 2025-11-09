import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ALX Listings</title>
      </Head>
      <div className="min-h-screen bg-brand-gray text-gray-800">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
