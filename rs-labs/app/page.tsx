import HeroSection from "@/components/landingPage/HeroSection";
import Plan from "@/components/landingPage/Plan";
import Cta from "@/components/landingPage/Cta";
import {NavBar} from "@/components/landingPage/NavBar";
import DownloadPage from "@/components/landingPage/DownloadPage";
import {Access} from "@/components/landingPage/Access";
import {Testimonial} from "@/components/landingPage/Testimonial";
import {Faq} from "@/components/landingPage/Faq";
import Footer from "@/components/landingPage/Footer";

export default function Home() {
  return (
      <div>
          <NavBar/>
          <main className={'min-h-screen w-full'}>
              <section id="home">
                  <HeroSection/>
              </section>
              <section id="features">
                  <Plan/>
              </section>
              <section id="social">
                  <DownloadPage/>
              </section>
              <section id="testimonial">
                  <Testimonial/>
              </section>
              <section id="access">
                  <Access/>
              </section>

              <section id="faq">
                  <Faq/>
              </section>
              <section id="contact">
                  <Cta/>
              </section>
              <section id="contact">
                  <Footer/>
              </section>
          </main>
      </div>
  );
}
