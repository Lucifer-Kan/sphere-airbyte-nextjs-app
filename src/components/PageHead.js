import Head from "next/head";

const PageHead = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://sphere-public.s3.eu-west-2.amazonaws.com/sphere-meta-image.png"
      />
    </Head>
  );
};

export default PageHead;
