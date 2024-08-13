import { PricingSection } from "@/components";
import PublicLayout from "@/layout";

export default function HomePage() {
  return (
    <PublicLayout title="BookAI">
      <section>
        <PricingSection />
      </section>
    </PublicLayout>
  );
}
