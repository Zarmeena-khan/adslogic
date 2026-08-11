import ServicePageLayout from "@/components/Services/ServicePageLayout";
import { servicePages } from "@/components/Services/servicePageData";

export default function MetaAdsPage() {
  return <ServicePageLayout service={servicePages["meta-ads"]} />;
}
