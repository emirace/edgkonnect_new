import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { BuiltForSection } from "@/components/built-for-section"
import { AboutSection } from "@/components/about-section"
import { SolutionsSection } from "@/components/solutions-section"
import { ProductShowcase } from "@/components/product-showcase"
import { WhyUsSection } from "@/components/why-us-section"
import { IndustriesSection } from "@/components/industries-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <BuiltForSection />
      <AboutSection />
      <SolutionsSection />
      <ProductShowcase />
      <WhyUsSection />
      <IndustriesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
