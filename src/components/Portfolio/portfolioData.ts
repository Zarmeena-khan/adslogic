export type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
};

export const categories = ["All", "Meta Ads", "Google Ads", "Websites", "SEO"];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Growth Campaign",
    category: "Meta Ads",
    image: "",
    description: "Scaled revenue by 300% through strategic Meta advertising",
  },
  {
    id: "2",
    title: "SaaS Lead Generation",
    category: "Google Ads",
    image: "",
    description: "Generated 500+ qualified leads with optimized search campaigns",
  },
  {
    id: "3",
    title: "Premium Real Estate Website",
    category: "Websites",
    image: "",
    description: "Luxury property showcase with advanced search functionality",
  },
  {
    id: "4",
    title: "Local Business SEO",
    category: "SEO",
    image: "",
    description: "Achieved #1 rankings for 15+ high-value local keywords",
  },
  {
    id: "5",
    title: "Fashion Brand Awareness",
    category: "Meta Ads",
    image: "",
    description: "Built engaged community of 50K+ followers in 6 months",
  },
  {
    id: "6",
    title: "Healthcare Portal Development",
    category: "Websites",
    image: "",
    description: "HIPAA-compliant patient portal with appointment booking",
  },
];
