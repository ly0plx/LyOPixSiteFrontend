import { Helmet } from 'react-helmet-async';
import '../styles/';

export default function TemplatePage() {
  return (
    <>
    <Helmet>
      <title> | LyOPix Coding</title>
        <meta
          name="description"
          content=""
        />
        <link rel="canonical" href="https://lyopix.com/" />
        <meta property="og:title" content="" />
        <meta
          property="og:description"
          content=""
        />
        <meta property="og:url" content="https://lyopix.com/" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
    </Helmet>
    </>
  );
}