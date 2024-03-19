import Head from "next/head";
import { primaryFont } from "../lib/fonts";
import { SITE_TITLE } from "@/lib/constants";
import HomeOne from "@/components/common/Home-1/Nabar";
import Section from "@/components/common/Home-1/Section";
import Content from "@/components/common/Home-1/Content";
import Navbar from '../components/common/Home-2/Navbar'
import ContentTwo from "@/components/common/Home-2/Content";

export default function Home() {


  return (
    <>
      <Head>
        <title>{`${SITE_TITLE}`}</title>
      </Head>
      <main className={` ${primaryFont.className}`}>
        <HomeOne />
        <Content />


        {/* section Two */}
        {/* <Navbar />
        <ContentTwo /> */}
      </main>
    </>
  );
}
