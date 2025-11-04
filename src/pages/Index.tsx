import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Teachers from "@/components/Teachers";
import Subjects from "@/components/Subjects";
import DataSpeak from "@/components/DataSpeak";
import StudentTestimonials from "@/components/StudentTestimonials";
import ParentPromise from "@/components/ParentPromise";
import EnrollCTA from "@/components/EnrollCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <section id="features">
          <Features />
        </section>
        <section id="teachers">
          <Teachers />
        </section>
        <section id="subjects">
          <Subjects />
        </section>
        <section id="data-speak">
          <DataSpeak />
        </section>
        <section id="testimonials">
          <StudentTestimonials />
        </section>
        <section id="promise">
          <ParentPromise />
        </section>
        <EnrollCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
