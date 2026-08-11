import ServicePageLayout from "@/components/Services/ServicePageLayout";
import { servicePages } from "@/components/Services/servicePageData";

export default function AiAutomationPage() {
  return <ServicePageLayout service={servicePages["ai-automation"]} />;
}
