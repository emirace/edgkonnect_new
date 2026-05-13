import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { UserManualHero } from "@/components/user-manual/hero"
import { DeviceOverview } from "@/components/user-manual/device-overview"
import { GettingStarted } from "@/components/user-manual/getting-started"
import { Operations } from "@/components/user-manual/operations"
import { Maintenance } from "@/components/user-manual/maintenance"
import { Troubleshooting } from "@/components/user-manual/troubleshooting"

export const metadata = {
  title: "Push-to-Talk User Manual | Edgkonnect",
  description:
    "Complete user guide for Edgkonnect Push-to-Talk communication systems. Learn how to set up, operate, and maintain your mission-critical PTT device.",
};

export default function UserManualPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <UserManualHero />
      <DeviceOverview />
      <GettingStarted />
      <Operations />
      <Maintenance />
      <Troubleshooting />
      <Footer />
    </main>
  )
}
