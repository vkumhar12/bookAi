import Head from "next/head";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
};
export default function PublicLayout({
  children = <></>,
  title = "Court Web",
  description,
  ogImage,
}: Props) {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://yourwebsitename.com/" />
        <meta property="og:type" content="website" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={ogImage} />
      </Head>
      <main>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </main>
    </>
  );
}
