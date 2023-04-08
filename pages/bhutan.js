import Footer from "@/components/Footer";
import Bhuexp from "@/components/bhutan/Bhuexp";
import Bhuhero from "@/components/bhutan/Bhuhero";
import Bhunav from "@/components/bhutan/Bhunav";
import Moretovisitbhu from "@/components/bhutan/Moretovisitbhu";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Bhutangallery from "@/components/bhutan/Bhutangallery";



export default function Home() {
    return (
        <>
            <Head>
                <title>Incoming India | Bhutan</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>

                <Navbar />
                <Bhuhero />
                <Bhunav />
                <Bhuexp />
                <Bhutangallery />
                <Moretovisitbhu />
                <Footer />
            </main>
        </>
    );
}