import type { Metadata } from "next";
import ServicesHub from "@/components/ServicesHub";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dental Services in Indresham, Patancheru | Molar Dental Hospital",
  description:
    "Explore dental treatments at Molar Dental Hospital, Indresham — root canal treatment, dental implants, invisible aligners, braces, zirconia crowns, digital RVG X-ray, teeth whitening and tooth extraction.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHub />
      <Footer />
    </>
  );
}
