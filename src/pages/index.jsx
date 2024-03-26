import Head from "next/head";
import { primaryFont } from "../lib/fonts";
import { SITE_TITLE } from "@/lib/constants";
// import Navbar from "./Home-4/Navbar";
// import Content from "./Home-4/Content";
// import Navbar from "@/components/common/Home-7/Navbar";
// import Content from "@/components/common/Home-7/Content";
// import Navbar from "@/components/common/Home-12/Navbar";
// import Content from "@/components/common/Home-12/Content";
// import Navbar from "@/components/common/Home-11/Navbar";
// import Content from "@/components/common/Home-11/Content";
// import Navbar from "@/components/common/Home-10/Navbar";
// import Content from "@/components/common/Home-10/Content";
// import Navbar from "@/components/common/Home-9/Navbar";
// import Content from "@/components/common/Home-9/Content";
// import Navbar from "@/components/common/Home-8/Navbar";
// import Content from "@/components/common/Home-8/Content";

// import Navbar from "@/components/common/Home-6/Navbar";
// import Content from "@/components/common/Home-6/Content";
// import Navbar from "@/components/common/Home-5/Navbar";
// import Content from "@/components/common/Home-5/Content";
import Navbar from "@/components/common/Home-1/Nabar";
import Content from "@/components/common/Home-1/Content";
// import Navbar from '../components/common/Home-2/Navbar'
// import ContentTwo from "@/components/common/Home-2/Content";
// import NavbarThree from '@/components/common/Home-3/Navbar-3'
// import ContentThree from '@/components/common/Home-3/Content-3'
export default function Home() {



  return (
    <>
      <Head>
        <title>{`${SITE_TITLE}`}</title>
      </Head>
      <main className={` ${primaryFont.className}`}>
        {/* Home-1 */}
        <Navbar brand='Agency' />
        <Content />


        {/* Home-2 */}
        {/* <Navbar />
        <ContentTwo /> */}


        {/* Home-3 */}

        {/* <NavbarThree />
        <ContentThree /> */}


        {/* Home-4 */}

        {/* <Navbar />
        <Content /> */}

        {/* Home-5 */}

        {/* <Navbar />
        <Content /> */}


        {/* Home-6 */}
        {/* <Navbar />
        <Content /> */}

        {/* Home-7 */}

        {/* <Navbar />
        <Content /> */}

        {/* Home-8 */}

        {/* <Navbar /> */}
        {/* <Content />*/}

        {/* Home-9 */}

        {/* <Navbar />
        <Content /> */}

        {/* Home-10 */}
        {/* <Navbar />
        <Content /> */}

        {/* Home-11 */}
        {/* <Navbar />
        <Content /> */}

        {/* Home-12 */}
        {/* <Navbar />
        <Content /> */}
      </main>
    </>
  );
}
