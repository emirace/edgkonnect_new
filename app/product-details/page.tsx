import { Metadata } from "next"
import { ProductHero } from "@/components/product-details/product-hero"
import { ProductFeatures } from "@/components/product-details/product-features"
import { SystemEcosystem } from "@/components/product-details/system-ecosystem"
import { MobileDispatcher } from "@/components/product-details/mobile-dispatcher"
import { WebAdmin } from "@/components/product-details/web-admin"
import { Dispatcher } from "@/components/product-details/dispatcher"
import { TechnicalSpecs } from "@/components/product-details/technical-specs"
import { Accessories } from "@/components/product-details/accessories"
import { CTASection } from "@/components/product-details/cta-section"

export const metadata: Metadata = {
  title: "MCPPT-1-XC Product Details | Edgkonnect",
  description: "Complete product overview of Edgkonnect MCPPT-1-XC Push-to-Talk system. Learn about device specifications, mobile app, web admin, and dispatcher features.",
  openGraph: {
    title: "MCPPT-1-XC Product Details",
    description: "The most Naira-friendly and effective PTT solution with crystal-clear audio, GPS tracking, and mission-critical reliability.",
  },
}

export default function ProductDetailsPage() {
  return (
    <main className="bg-white">
      <ProductHero />
      <ProductFeatures />
      <SystemEcosystem />
      <MobileDispatcher />
      <WebAdmin />
      <Dispatcher />
      <TechnicalSpecs />
      <Accessories />
      <CTASection />
    </main>
  )
}
