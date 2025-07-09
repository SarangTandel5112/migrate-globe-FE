import BlogsCards from "@/components/dashboard/blogs-cards";
import HeroSection from "@/components/dashboard/HeroSection";
import Testimonials from "@/components/dashboard/testimonial";
import VideosSection from "@/components/dashboard/videos-section";
import VisaCalculatorSection from "@/components/dashboard/visa-calc";
import { HomepageData } from "@/utils/interface";

const data: HomepageData = {
  id: 7,
  documentId: "re1jhumxzj6ltkms2l8z92uk",
  createdAt: "2025-06-06T20:56:42.409Z",
  updatedAt: "2025-07-08T21:06:39.407Z",
  publishedAt: "2025-07-08T21:06:39.481Z",
  heroSection: {
    id: 6,
    intro: {
      id: 6,
      title: "Planning to Move to **Australia?**",
      description:
        "From visas to universities, job options to eligibility get instant, expert answers. ",
    },
    services: [
      {
        id: 5,
        documentId: "a94y5ex3lc0bcqb5a6617ffw",
        title: "Buy Documents Checklists",
        key: "checklists",
        createdAt: "2025-06-20T21:13:09.024Z",
        updatedAt: "2025-06-20T21:13:45.395Z",
        publishedAt: "2025-06-20T21:13:45.405Z",
        subtitle:
          "Get a verified checklist tailored to your visa and occupation. No confusion, no missing docs.",
        serviceType: null,
        order: 2,
      },
      {
        id: 10,
        documentId: "v8cesxrag88qvgdkfmrf40t3",
        title: "Skill Assessment ",
        key: "skill-assessment",
        createdAt: "2025-06-20T21:16:22.241Z",
        updatedAt: "2025-06-20T21:16:22.988Z",
        publishedAt: "2025-06-20T21:16:22.998Z",
        subtitle:
          "Check if your occupation is eligible and buy the step-by-step assessment guide instantly.",
        serviceType: null,
        order: 4,
      },
      {
        id: 12,
        documentId: "ci9rxaseztgafvk5e9v3nnfm",
        title: "Buy Cheapest Insurance",
        key: "insurance",
        createdAt: "2025-06-20T21:16:57.308Z",
        updatedAt: "2025-06-20T21:16:58.199Z",
        publishedAt: "2025-06-20T21:16:58.205Z",
        subtitle:
          "Compare and purchase affordable overseas health cover from top providers.",
        serviceType: null,
        order: 5,
      },
      {
        id: 6,
        documentId: "fm7xha9o5xxq1brskwlmti1w",
        title: "Smart Migration Plan (Buy Map)",
        key: "smart-migration-plan",
        createdAt: "2025-06-20T21:12:35.265Z",
        updatedAt: "2025-06-20T21:13:52.657Z",
        publishedAt: "2025-06-20T21:13:52.663Z",
        subtitle:
          "Create your personalized migration route with our interactive planning map.",
        serviceType: "business",
        order: 1,
      },
      {
        id: 16,
        documentId: "izdi8t8dqc9cxu92zwumrm72",
        title: "Occupation Tracking Tool",
        key: "occupation-tracking-tool",
        createdAt: "2025-06-20T21:18:04.473Z",
        updatedAt: "2025-06-20T21:18:05.220Z",
        publishedAt: "2025-06-20T21:18:05.226Z",
        subtitle:
          "Track updates on your occupation — demand trends, state invites, and policy changes.",
        serviceType: null,
        order: 7,
      },
      {
        id: 8,
        documentId: "o67ze0wzwirxca65ppohos3q",
        title: "Find Visa Options",
        key: "visa",
        createdAt: "2025-06-20T21:15:36.566Z",
        updatedAt: "2025-06-20T21:15:36.566Z",
        publishedAt: "2025-06-20T21:15:36.574Z",
        subtitle:
          "Explore visa types that match your profile, goals, and timeline — fast and accurate.",
        serviceType: null,
        order: 3,
      },
      {
        id: 14,
        documentId: "chk09lca166mzr4doqwxqviy",
        title: "Zoom Consultations",
        key: "zoom-consultation",
        createdAt: "2025-06-20T21:17:35.418Z",
        updatedAt: "2025-06-20T21:17:36.410Z",
        publishedAt: "2025-06-20T21:17:36.416Z",
        subtitle:
          "Get expert advice face-to-face — online. Book a call with our migration consultants.",
        serviceType: null,
        order: 6,
      },
    ],
  },
  visaCalculator: {
    id: 5,
    step1:
      "#### **How It Works**\n\n**Step 1:** Choose your visa subclass\n\n**Step 2:** Answer 10 simple questions\n\n**Step 3:** Get your estimated points instantly",
    step2:
      "#### **How It Works**\n\n**Step 1:** Choose your visa subclass\n\n**Step 2:** Answer 10 simple questions\n\n**Step 3:** Get your estimated points instantly",
    step3: "Trusted by 5,000+ applicants. 98% client satisfaction",
    intro: {
      id: 8,
      title: "Visa Calculator",
      description:
        "Use our free points calculator to check your eligibility under Subclass 189, 190, or 491 visas. Find Out if You're Eligible for Australian PR.",
    },
  },
  testimonial: {
    id: 4,
    intro: {
      id: 9,
      title: "What Our Clients Says",
      description: null,
    },
    testimonials: [
      {
        id: 2,
        documentId: "n7etzkwzkz1vg7ejeu02f4ua",
        title: "Landing My Dream Job In Australia – Stress-Free!",
        clientName: "Rahul Mehra",
        clientService: "Skilled Independent Visa – Subclass 189",
        clientReview:
          "MigrateGlobe made the entire visa process crystal clear. I used their visa points calculator and instantly knew I was eligible for Subclass 189. Their team helped fine-tune my documentation and guided me through every government touchpoint. Today, I'm living and working in Sydney as a Data Analyst — all thanks to them!",
        createdAt: "2025-07-08T20:38:44.481Z",
        updatedAt: "2025-07-08T20:38:44.481Z",
        publishedAt: "2025-07-08T20:38:44.496Z",
      },
      {
        id: 4,
        documentId: "jkcn9l6f5mh0a8epyicwkp6n",
        title: "Job In Australia",
        clientName: "Vikas",
        clientService: "Visa service",
        clientReview:
          "MigrateGlobe made the entire visa process crystal clear. I used their visa points calculator and instantly knew I was eligible for Subclass 189. Their team helped fine-tune my documentation and guided me through every government touchpoint. Today, I'm living and working in Sydney as a Data Analyst — all thanks to them!",
        createdAt: "2025-07-08T20:39:38.165Z",
        updatedAt: "2025-07-08T20:39:38.165Z",
        publishedAt: "2025-07-08T20:39:38.177Z",
      },
    ],
  },
  blog: {
    id: 4,
    intro: {
      id: 10,
      title: "From Our Blog",
      description: null,
    },
    insights_and_updates: [
      {
        id: 19,
        documentId: "bduw2klt11n0lw44bnvqpfa2",
        title: "Job Demand",
        subtitle: "Top in-demand jobs for skilled migrants.",
        description:
          "Visa interviews can be stressful, but avoiding common pitfalls like incomplete answers or inconsistent information can greatly increase your chances of approval.",
        content: null,
        createdAt: "2025-06-27T22:52:37.141Z",
        updatedAt: "2025-07-08T20:40:17.624Z",
        publishedAt: "2025-07-08T20:40:17.636Z",
        order: 3,
      },
      {
        id: 20,
        documentId: "xvjbs6e7bllxwcsvyqdixqt5",
        title: "Occupation Update",
        subtitle: "New roles added to skilled occupation list.",
        description:
          "Visa interviews can be stressful, but avoiding common pitfalls like incomplete answers or inconsistent information can greatly increase your chances of approval.",
        content: null,
        createdAt: "2025-06-27T22:51:46.410Z",
        updatedAt: "2025-07-08T20:40:24.891Z",
        publishedAt: "2025-07-08T20:40:24.903Z",
        order: 1,
      },
      {
        id: 21,
        documentId: "lbw15obayz358f1rmozpx0bd",
        title: "Policy Forecast",
        subtitle: "Upcoming changes in migration policies.",
        description:
          "Visa interviews can be stressful, but avoiding common pitfalls like incomplete answers or inconsistent information can greatly increase your chances of approval.",
        content: null,
        createdAt: "2025-06-27T22:54:13.596Z",
        updatedAt: "2025-07-08T20:40:31.190Z",
        publishedAt: "2025-07-08T20:40:31.205Z",
        order: 8,
      },
    ],
  },
  videos: {
    id: 4,
    intro: {
      id: 11,
      title: "Watch Our Videos",
      description: null,
    },
    videos: [
      {
        id: 6,
        documentId: "hib348mv3elaeyvqemtgjuqv",
        title: "Top 5 Mistakes To Avoid During Your Visa Interview",
        description:
          "Visa interviews can be stressful — avoid these common mistakes!",
        link: "https://www.youtube.com/watch?v=nh6i2w6xFu8&list=PLfME1CebA48Y0ACpySmsHa-edpSRoC2qr&index=34",
        createdAt: "2025-07-08T20:42:14.400Z",
        updatedAt: "2025-07-08T20:43:14.518Z",
        publishedAt: "2025-07-08T20:43:14.532Z",
      },
      {
        id: 5,
        documentId: "qurehxtcydtoqxyfll9azam8",
        title: "Avoid Common Mistakes During Your Visa Interview",
        description:
          "Visa interviews can be stressful — avoid these common mistakes!",
        link: "https://www.youtube.com/watch?v=6h7hUmC-t3A",
        createdAt: "2025-07-08T20:43:00.918Z",
        updatedAt: "2025-07-08T20:43:09.524Z",
        publishedAt: "2025-07-08T20:43:09.536Z",
      },
      {
        id: 8,
        documentId: "yyuy4n0mvb9zrzw8cp0x8e83",
        title: "Visa Interview Tips During Your Visa Interview",
        description:
          "Visa interviews can be stressful — avoid these common mistakes!",
        link: "https://www.youtube.com/watch?v=6h7hUmC-t3A",
        createdAt: "2025-07-08T20:43:43.656Z",
        updatedAt: "2025-07-08T20:43:43.656Z",
        publishedAt: "2025-07-08T20:43:43.669Z",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="py-8 lg:py-12 relative flex flex-col gap-[60px] md:gap-[90px] lg:gap-[120px]">
      <HeroSection heroSection={data.heroSection} />
      <VisaCalculatorSection visaCalculator={data.visaCalculator} />
      <Testimonials testimonial={data.testimonial} />
      <BlogsCards blog={data.blog} />
      <VideosSection videos={data.videos} />
    </div>
  );
}
