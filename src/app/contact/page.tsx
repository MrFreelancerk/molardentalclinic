import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Molar Dental Hospital | Indresham, Patancheru",
  description:
    "Call +91 91339 33392, WhatsApp, or visit Molar Dental Hospital near Shivaji Statue Junction, Indresham Road, Bachuguda, Patancheru, Hyderabad. Open daily 9 AM – 2 PM and 5 PM – 9 PM.",
};

export default function Contact() {
  return (
    <>
      <ContactPage />
      <Footer />
    </>
  );
}
