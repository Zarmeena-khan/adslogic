export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Khan",
    role: "CEO",
    company: "TechStart Inc",
    text: "AdsLogic transformed our digital presence. Their Meta Ads campaigns increased our leads by 250% in just 3 months. The ROI has been exceptional.",
    rating: 5,
  },
  {
    id: "2",
    name: "Ahmed Ali",
    role: "Marketing Director",
    company: "GrowthScale",
    text: "Working with AdsLogic has been a game-changer. Their AI-powered approach to Google Ads delivered results beyond our expectations. Highly recommended!",
    rating: 5,
  },
  {
    id: "3",
    name: "Zainab Khan",
    role: "Founder",
    company: "Luxe Fashion",
    text: "The team at AdsLogic built us a stunning website and drove incredible traffic through SEO. Our online sales tripled within 6 months. Truly remarkable work.",
    rating: 5,
  },
];
