import ServicePageLayout from "@/components/Services/ServicePageLayout";
import { servicePages } from "@/components/Services/servicePageData";

export default function GoogleAdsPage() {
  return <ServicePageLayout service={servicePages["google-ads"]} />;
}
