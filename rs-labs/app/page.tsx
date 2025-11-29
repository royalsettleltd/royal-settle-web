import HeroSection from "@/components/landingPage/HeroSection";
import Features from "@/components/landingPage/Features";
import AboutUs from "@/components/landingPage/AboutUs";
import Plan from "@/components/landingPage/Plan";
import {Cta} from "@/components/landingPage/Cta";
import {NavBar} from "@/components/landingPage/NavBar";
import DownloadPage from "@/components/landingPage/DownloadPage";
import {Access} from "@/components/landingPage/Access";
import {Testimonial} from "@/components/landingPage/Testimonial";
import {Faq} from "@/components/landingPage/Faq";

export default function Home() {
  return (
      <div>
          <NavBar/>
          <main className={'min-h-screen w-full'}>
              <section id="home">
                  <HeroSection/>
              </section>
              <section id="about">
                  <AboutUs/>
              </section>
              <section id="features">
                  <Features/>
              </section>

              <section id="social">
                  <DownloadPage/>
              </section>
              <section id="plan">
                  <Plan/>
              </section>
              <section id="access">
                  <Access/>
              </section>
              <section id="testimonial">
                  <Testimonial/>
              </section>
              <section id="faq">
                  <Faq/>
              </section>
              <section id="contact">
                  <Cta/>
              </section>
          </main>
      </div>
  );
}
