import Head from "next/head";

const Meta = ({ pageTitle, pageDescription }) => (
  <Head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />
    ...
  </Head>
);

export default Meta;
