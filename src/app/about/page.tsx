import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Molar Dental Hospital Indresham, Patancheru",
  description:
    "Learn about Molar Dental Hospital in Indresham, Patancheru. Founded on trust and driven by clinical excellence, our team of experienced dental specialists offers painless treatments, advanced digital technology, and hospital-grade sterility.",
  openGraph: {
    title: "About Us | Molar Dental Hospital Patancheru",
    description:
      "Redefining modern dentistry with genuine compassion, advanced technology, and experienced specialists in Indresham, Patancheru.",
    url: "https://molardental.in/about",
  },
};

export default function About() {
  return (
    <>
      <AboutPage />
      <Footer />
    </>
  );
}
