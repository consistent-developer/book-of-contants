import Head from 'next/head'

const Headers = () => {
  return (
    <div>
      <Head>
        {/* css link */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.1.2/tailwind.min.css" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

      </Head>
    </div>
  );
}

export default Headers;