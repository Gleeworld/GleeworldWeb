// pages/index.tsx or app/page.tsx

import FlowHero from "@/components/Hero/hero-section"; // ✅ should match

export default function Home() {
  return (
    <>
      <FlowHero />
      {/* other components */}
    </>
  );
}
