import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Experience from "@/components/portfolio/Experience";
import ClinicalCompetencies from "@/components/portfolio/ClinicalCompetencies";
import Community from "@/components/portfolio/Community";
import Footer from "@/components/portfolio/Footer";
import { Flower2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <ClinicalCompetencies />
        <Community />
        
        {/* Personal Statement Section - Inline for simplicity */}
        <section id="about" className="py-24 bg-white relative overflow-hidden">
           <Flower2 className="absolute top-1/2 left-10 text-secondary w-48 h-48 opacity-20 -translate-y-1/2 -rotate-12" />
           
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8 flex items-center justify-center gap-3">
              <Flower2 className="w-6 h-6 text-accent" />
              Why Nursing?
              <Flower2 className="w-6 h-6 text-accent" />
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="mb-6">
                My path to nursing is driven by a commitment to providing compassionate, evidence-based care to vulnerable populations. From stabilizing hemodynamically unstable trauma patients in busy emergency wards to successfully resuscitating newborns in rural clinics, I have seen the profound impact of skilled nursing intervention.
              </p>
              <p className="mb-6">
                I believe that nursing combines scientific precision with deep human empathy. Whether I am educating a new mother on kangaroo care or building rapport with a psychiatric patient, I strive to treat every individual with dignity and holistic attention.
              </p>
              <p>
                As I progress in my career, I carry with me the resilience and adaptability forged in diverse clinical environments, ready to contribute to healthcare excellence on a global scale.
              </p>
            </div>
            <div className="mt-12">
              <span className="font-serif text-2xl text-primary italic">- Isabel Kaudani</span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
