import ServicePageLayout from "@/components/Services/ServicePageLayout";
import { servicePages } from "@/components/Services/servicePageData";

export default function SeoPage() {
  return <ServicePageLayout service={servicePages.seo} />;
}
