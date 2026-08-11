import ServicePageLayout from "@/components/Services/ServicePageLayout";
import { servicePages } from "@/components/Services/servicePageData";

export default function SocialMediaMarketingPage() {
  return <ServicePageLayout service={servicePages["social-media-marketing"]} />;
}
