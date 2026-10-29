import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import Footer from "@/components/Footer";
import { getService, services } from "@/data/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Treatment not found | Molar Dental Hospital" };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  return (
    <>
      <ServiceDetail service={service} />
      <Footer />
    </>
  );
}
