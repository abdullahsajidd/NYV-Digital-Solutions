import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { StoryCard } from "@/components/storyCard/StoryCard";
import ContactForm from "@/sections/home/contactForm/ContactForm";
import Exelence from "@/sections/home/exelence/Exelence";
import HeroBanner from "@/sections/home/heroBanner/HeroBanner";
import Industries from "@/sections/home/industries/Industries";
import OurProcess from "@/sections/home/ourProcess/OurProcess";
import Partnership from "@/sections/home/partnership/Partnership";
import RelyOnUs from "@/sections/home/relyOnUs/RelyOnUs";
import Research from "@/sections/home/research/Research";
import Services from "@/sections/home/services/Services";
import Testimonials from "@/sections/home/testimonials/Testimonials";
import Theory from "@/sections/home/theory/Theory";
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | Code UpScale LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services</title>
 
        <meta
          name="description"
          content=" Code UpScale LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services - Your Partner in Innovation. Our 'Home' page is the gateway to exceptional software, AI, blockchain, and technology services."
          key="desc"
        />
      </Head>
      <HeroBanner />
      <RelyOnUs />
      <Services />
      <Industries />
      <Theory />
      <OurProcess />
      <Partnership />
      <Testimonials />
      <Exelence />
      <Research />
      <ContactForm className="mt-24 pb-[245px]" ContactInfoCard={false} ContactGeneralHeading='Let Us Know What You’re Looking for, We’ll Build it for You' ContatctSubHeading='Let’s Work Together' />
    </>
  )
}

export default Home