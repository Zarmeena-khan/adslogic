import ServicePageLayout from "@/components/Services/ServicePageLayout";
import { servicePages } from "@/components/Services/servicePageData";

export default function WebsiteDevelopmentPage() {
  return <ServicePageLayout service={servicePages["website-development"]} />;
}
