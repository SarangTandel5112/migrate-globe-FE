import React from "react";
import OccupationTracking from "@/components/occupation/tracking-tool";

const data = [
  {
    anzsco: {
      code: "351311",
      title: "Apiarist",
      metaTitle: "121311 Apiarist",
    },
    osca: {
      code: "152931",
      link: "https://www.abs.gov.au/statistics/classifications/osca-occupation-standard-classification-australia/2024-version-1-0/browse-classification/1/15/152/1529/152931",
    },
    assessingAuthority: "VETASSESS",
    visaEligibility: [
      {
        subclass: "Subclass 189 (Skilled Independent)",
        link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189",
        eligible: false,
        listType: "Not Available",
      },
      {
        subclass: "Subclass 190 (Skilled Nominated)",
        link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-nominated-190",
        eligible: true,
        listType: "STSOL",
      },
      {
        subclass: "Subclass 491 (State/Territory nominated)",
        link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-work-regional-provisional-491/application#About",
        eligible: true,
        listType: "STSOL",
      },
      {
        subclass: "Subclass 491 (Family Sponsored)",
        link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-work-regional-provisional-491/application#About",
        eligible: false,
        listType: "Not Available",
      },
      {
        subclass: "Subclass 485 (Graduate)",
        link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-graduate-485",
        eligible: false,
        listType: "Not Available",
      },
      {
        subclass: "Subclass 482 (SID)",
        link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-visa-subclass-482",
        eligible: true,
        listType: "CSOL",
      },
      {
        subclass: "Subclass 482 (DAMA)",
        link: "#div_dama",
        eligible: true,
        listType: "Not Available",
      },
      {
        subclass: "Subclass 186 (ENS)",
        link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/employer-nomination-scheme-186",
        eligible: true,
        listType: "CSOL",
      },
      {
        subclass: "Subclass 187 (RSMS)",
        link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/regional-sponsor-migration-scheme-187/temporary-residence-transistion-stream",
        eligible: true,
        listType: "STSOL",
      },
      {
        subclass: "Subclass 494 (SESR)",
        link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-employer-sponsored-regional-494",
        eligible: true,
        listType: "ROL",
      },
      {
        subclass: "Subclass 407 (Training)",
        link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/training-407",
        eligible: true,
        listType: "STSOL",
      },
    ],
    unitGroup: {
      code: "1213",
      title: "Livestock Farmers",
      skillLevel: "1",
      qualification:
        "In\n                                    Australia and New\n                                    Zealand:\n                                  \n                                  \n                                  Most occupations in this unit group have a level of skill commensurate with a bachelor degree or higher qualification. At least five years of relevant experience may substitute for the formal qualification. In some instances relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).",
    },
    tasks: [
      "breeding and raising livestock for the production of honey, meat, milk, skins, eggs and wool",
      "monitoring and maintaining the health and condition of livestock",
      "providing pastures and fodder to maintain appropriate nutritional levels",
      "moving livestock to optimise feeding opportunities",
      "organising and conducting farming operations such as catching, drenching and milking livestock, sterilising machines, and collecting, grading and packaging produce",
      "directing and overseeing general farming activities such as maintaining pens, sheds and cages, fertilising, controlling pests and weeds, and growing fodder",
      "maintaining fences, equipment and water supply systems",
      "organising the sale, purchase and transportation of livestock and produce",
      "maintaining and evaluating records of farming activities, monitoring market activity and planning production accordingly",
      "managing business capital including budgeting, taxation, debt and loan management",
      "may select, train and supervise staff and contractors",
    ],
    stateEligibility: {
      visa190: [
        {
          state: "NT",
          status: "not-eligible",
          link: "https://theterritory.com.au/migrate/migrate-to-work/northern-territory-government-visa-nomination/eligibility",
        },
        {
          state: "VIC",
          status: "not-eligible",
          link: "https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas/skilled-nominated-visa-subclass-190",
        },
        {
          state: "WA",
          status: "not-eligible",
          link: "https://migration.wa.gov.au/our-services-support/state-nominated-migration-program",
        },
        {
          state: "SA",
          status: "not-eligible",
          link: "https://www.migration.sa.gov.au/visa-options/skilled-visas/skilled-nominated-visa",
        },
        {
          state: "Tasmania",
          status: "not-eligible",
          link: "https://www.migration.tas.gov.au/",
        },
        {
          state: "NSW",
          status: "not-eligible",
          link: "https://www.nsw.gov.au/topics/visas-and-migration/skilled-visas/subclass-190",
        },
        {
          state: "QLD",
          status: "not-eligible",
          link: "https://migration.qld.gov.au/visa-options/skilled-visas",
        },
      ],
      visa491: [
        {
          state: "NT",
          status: "not-eligible",
          link: "https://theterritory.com.au/migrate/migrate-to-work/northern-territory-government-visa-nomination/eligibility",
        },
        {
          state: "VIC",
          status: "not-eligible",
          link: "https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas/491",
        },
        {
          state: "WA",
          status: "not-eligible",
          link: "https://migration.wa.gov.au/our-services-support/state-nominated-migration-program",
        },
        {
          state: "SA",
          status: "eligible",
          link: "",
        },
        {
          state: "Tasmania",
          status: "not-eligible",
          link: "https://www.migration.tas.gov.au/",
        },
        {
          state: "NSW",
          status: "not-eligible",
          link: "https://www.nsw.gov.au/visas-and-migration/skilled-visas/skilled-work-regional-visa-subclass-491",
        },
        {
          state: "ACT",
          status: "eligible",
          subcategory: "Canberra Resident Applicant",
          link: "#",
        },
        {
          state: "ACT",
          status: "eligible",
          subcategory: "Doctorate Streamlined Nomination",
          link: "#",
        },
        {
          state: "QLD",
          status: "not-eligible",
          link: "https://migration.qld.gov.au/visa-options/skilled-visas",
        },
      ],
      dama: [
        {
          state: "NT",
          status: "eligible",
          link: "",
        },
        {
          state: "VIC",
          status: "not-eligible",
        },
        {
          state: "WA",
          status: "not-eligible",
        },
        {
          state: "SA",
          status: "not-eligible",
          link: "https://www.migration.sa.gov.au/local-businesses/supporting-information",
        },
        {
          state: "NSW",
          status: "eligible",
          link: "",
        },
        {
          state: "QLD",
          status: "not-eligible",
        },
      ],
    },
    eoiStatistics: {
      submitted: {
        visa189: {
          points: [],
          total: 0,
          dataAvailable: false,
        },
        visa190: {
          points: [],
          total: 0,
          dataAvailable: false,
        },
        visa491_family: {
          points: [],
          total: 0,
          dataAvailable: false,
        },
        visa491_state: {
          points: [],
          total: 0,
          dataAvailable: false,
        },
        period: {
          month: "05",
          year: "2025",
        },
        colorLegend: [
          {
            eoi_point: "65",
            eoi_color: "#ff9696",
          },
          {
            eoi_point: "70",
            eoi_color: "#96ff96",
          },
          {
            eoi_point: "75",
            eoi_color: "#9696ff",
          },
          {
            eoi_point: "80",
            eoi_color: "#ffff96",
          },
          {
            eoi_point: "85",
            eoi_color: "#96ffff",
          },
          {
            eoi_point: "90",
            eoi_color: "#ff96ff",
          },
          {
            eoi_point: "95",
            eoi_color: "#dcc89e",
          },
          {
            eoi_point: "100",
            eoi_color: "#ffc7c7",
          },
          {
            eoi_point: "105",
            eoi_color: "#c7ffc7",
          },
          {
            eoi_point: "110",
            eoi_color: "#c7c7ff",
          },
          {
            eoi_point: "115",
            eoi_color: "#a7bbd3",
          },
          {
            eoi_point: "120",
            eoi_color: "#fae1cb",
          },
          {
            eoi_point: "125",
            eoi_color: "#c7ffff",
          },
          {
            eoi_point: "130",
            eoi_color: "#ffc7ff",
          },
          {
            eoi_point: "135",
            eoi_color: "#ece2cb",
          },
          {
            eoi_point: "140",
            eoi_color: "#36a2eb",
          },
          {
            eoi_point: "145",
            eoi_color: "#e5e5e5",
          },
          {
            eoi_point: "150",
            eoi_color: "#ff6347",
          },
        ],
      },
      lodged: {
        visa189: {
          points: [],
          total: 0,
          dataAvailable: false,
        },
        visa190: {
          points: [],
          total: 0,
          dataAvailable: false,
        },
        visa491_family: {
          points: [],
          total: 0,
          dataAvailable: false,
        },
        visa491_state: {
          points: [],
          total: 0,
          dataAvailable: false,
        },
        period: {
          month: "05",
          year: "2025",
        },
        colorLegend: [
          {
            eoi_point: "65",
            eoi_color: "#ff9696",
          },
          {
            eoi_point: "70",
            eoi_color: "#96ff96",
          },
          {
            eoi_point: "75",
            eoi_color: "#9696ff",
          },
          {
            eoi_point: "80",
            eoi_color: "#ffff96",
          },
          {
            eoi_point: "85",
            eoi_color: "#96ffff",
          },
          {
            eoi_point: "90",
            eoi_color: "#ff96ff",
          },
          {
            eoi_point: "95",
            eoi_color: "#dcc89e",
          },
          {
            eoi_point: "100",
            eoi_color: "#ffc7c7",
          },
          {
            eoi_point: "105",
            eoi_color: "#c7ffc7",
          },
          {
            eoi_point: "110",
            eoi_color: "#c7c7ff",
          },
          {
            eoi_point: "115",
            eoi_color: "#a7bbd3",
          },
          {
            eoi_point: "120",
            eoi_color: "#fae1cb",
          },
          {
            eoi_point: "125",
            eoi_color: "#c7ffff",
          },
          {
            eoi_point: "130",
            eoi_color: "#ffc7ff",
          },
          {
            eoi_point: "135",
            eoi_color: "#ece2cb",
          },
          {
            eoi_point: "140",
            eoi_color: "#36a2eb",
          },
          {
            eoi_point: "145",
            eoi_color: "#e5e5e5",
          },
          {
            eoi_point: "150",
            eoi_color: "#ff6347",
          },
        ],
      },
      held: {},
      invited: {
        visa189: {
          points: [],
          total: 0,
          dataAvailable: false,
        },
        visa190: {
          points: [],
          total: 0,
          dataAvailable: false,
        },
        visa491_family: {
          points: [],
          total: 0,
          dataAvailable: false,
        },
        visa491_state: {
          points: [],
          total: 0,
          dataAvailable: false,
        },
        period: {
          month: "05",
          year: "2025",
        },
        colorLegend: [
          {
            eoi_point: "65",
            eoi_color: "#ff9696",
          },
          {
            eoi_point: "70",
            eoi_color: "#96ff96",
          },
          {
            eoi_point: "75",
            eoi_color: "#9696ff",
          },
          {
            eoi_point: "80",
            eoi_color: "#ffff96",
          },
          {
            eoi_point: "85",
            eoi_color: "#96ffff",
          },
          {
            eoi_point: "90",
            eoi_color: "#ff96ff",
          },
          {
            eoi_point: "95",
            eoi_color: "#dcc89e",
          },
          {
            eoi_point: "100",
            eoi_color: "#ffc7c7",
          },
          {
            eoi_point: "105",
            eoi_color: "#c7ffc7",
          },
          {
            eoi_point: "110",
            eoi_color: "#c7c7ff",
          },
          {
            eoi_point: "115",
            eoi_color: "#a7bbd3",
          },
          {
            eoi_point: "120",
            eoi_color: "#fae1cb",
          },
          {
            eoi_point: "125",
            eoi_color: "#c7ffff",
          },
          {
            eoi_point: "130",
            eoi_color: "#ffc7ff",
          },
          {
            eoi_point: "135",
            eoi_color: "#ece2cb",
          },
          {
            eoi_point: "140",
            eoi_color: "#36a2eb",
          },
          {
            eoi_point: "145",
            eoi_color: "#e5e5e5",
          },
          {
            eoi_point: "150",
            eoi_color: "#ff6347",
          },
        ],
      },
      lastUpdated: "2025-05",
      availableMonths: [],
      availableYears: [],
      hold: {
        visa189: {
          points: [],
          total: 0,
          dataAvailable: false,
        },
        visa190: {
          points: [],
          total: 0,
          dataAvailable: false,
        },
        visa491_family: {
          points: [],
          total: 0,
          dataAvailable: false,
        },
        visa491_state: {
          points: [],
          total: 0,
          dataAvailable: false,
        },
        period: {
          month: "05",
          year: "2025",
        },
        colorLegend: [
          {
            eoi_point: "65",
            eoi_color: "#ff9696",
          },
          {
            eoi_point: "70",
            eoi_color: "#96ff96",
          },
          {
            eoi_point: "75",
            eoi_color: "#9696ff",
          },
          {
            eoi_point: "80",
            eoi_color: "#ffff96",
          },
          {
            eoi_point: "85",
            eoi_color: "#96ffff",
          },
          {
            eoi_point: "90",
            eoi_color: "#ff96ff",
          },
          {
            eoi_point: "95",
            eoi_color: "#dcc89e",
          },
          {
            eoi_point: "100",
            eoi_color: "#ffc7c7",
          },
          {
            eoi_point: "105",
            eoi_color: "#c7ffc7",
          },
          {
            eoi_point: "110",
            eoi_color: "#c7c7ff",
          },
          {
            eoi_point: "115",
            eoi_color: "#a7bbd3",
          },
          {
            eoi_point: "120",
            eoi_color: "#fae1cb",
          },
          {
            eoi_point: "125",
            eoi_color: "#c7ffff",
          },
          {
            eoi_point: "130",
            eoi_color: "#ffc7ff",
          },
          {
            eoi_point: "135",
            eoi_color: "#ece2cb",
          },
          {
            eoi_point: "140",
            eoi_color: "#36a2eb",
          },
          {
            eoi_point: "145",
            eoi_color: "#e5e5e5",
          },
          {
            eoi_point: "150",
            eoi_color: "#ff6347",
          },
        ],
      },
    },
    extractedAt: "2025-07-11T00:17:45.492Z",
    originalCode: "121311",
  },
];

const OccupationTrackingPage: React.FC = () => {
  return <OccupationTracking data={data[0]} />;
};

export default OccupationTrackingPage;
