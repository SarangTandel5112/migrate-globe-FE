import VisaCalculator from "@/components/visa-point-calculator/VisaCalculator";

const visaCalculatorData = {
    id: 5,
    documentId: "su7mtp2hncypfrds696gslxh",
    title: "Visa Calculator",
    description: null,
    scoreRequired: 65,
    createdAt: "2025-06-28T17:59:29.447Z",
    updatedAt: "2025-06-28T18:51:47.785Z",
    publishedAt: "2025-06-28T18:51:47.808Z",
    question: [
        {
            order: 1,
            id: 30,
            item: "6D.1",
            title: "Age qualifications",
            question: "What is your age at the time of invitation to apply for the visa?",
            option: [
                {
                    id: 84,
                    item: "6D11",
                    value: "6D11",
                    point: 25,
                    label: "not less than 18 and under 25"
                },
                {
                    id: 85,
                    item: "6D12",
                    value: "6D12",
                    point: 30,
                    label: "not less than 25 and under 33"
                },
                {
                    id: 86,
                    item: "6D13",
                    value: "6D13",
                    point: 25,
                    label: "not less than 33 and under 40"
                },
                {
                    id: 87,
                    item: "6D14",
                    value: "6D14",
                    point: 15,
                    label: "not less than 40 and under 45"
                }
            ]
        },
        {
            order: 2,
            id: 31,
            item: "6D.2",
            title: "English language qualifications",
            question: "What are your English Language qualifications at the time of invitation to apply for the visa?",
            option: [
                {
                    id: 87,
                    item: "6D21",
                    value: "6D21",
                    point: 20,
                    label: "superior English"
                },
                {
                    id: 88,
                    item: "6D22",
                    value: "6D22",
                    point: 10,
                    label: "proficient English"
                },
                {
                    id: 89,
                    item: "6D23",
                    value: "6D23",
                    point: 0,
                    label: "Competent English"
                }
            ]
        },
        {
            order: 3,
            id: 32,
            item: "6D.3",
            title: "Overseas employment experience qualifications",
            question: "In the last 10 years, how long have you worked in your nominated skilled occupation or closely related occupation outside Australia?",
            option: [
                {
                    id: 90,
                    item: "6D31",
                    value: "6D31",
                    point: 5,
                    label: "had been employed outside Australia in:\n(a) the applicant's nominated skilled occupation; or\n(b) a closely related skilled occupation; for a period totalling at least 36 months in the 10 years immediately before that time."
                },
                {
                    id: 91,
                    item: "6D32",
                    value: "6D32",
                    point: 10,
                    label: "had been employed outside Australia in:\n(a) the applicant's nominated skilled occupation; or\n(b) a closely related skilled occupation; \nfor a period totalling at least 60 months in the 10 years immediately before that time"
                },
                {
                    id: 92,
                    item: "6D33",
                    value: "6D33",
                    point: 15,
                    label: "had been employed outside Australia in:\n(a) the applicant's nominated skilled occupation; or\n(b) a closely related skilled occupation;\nfor a period totalling at least 96 months in the 10 years immediately before that time"
                },
                {
                    id: 93,
                    item: "6D34",
                    value: "6D34",
                    point: 0,
                    label: "Less than 3 years"
                }
            ]
        },
        {
            order: 4,
            id: 33,
            item: "6D.4",
            title: "Australian employment experience qualifications",
            question: "In the last 10 years, how long have you worked in your nominated skilled occupation or closely related occupation in Australia?",
            option: [
                {
                    id: 94,
                    item: "6D41",
                    value: "6D41",
                    point: 5,
                    label: "had been employed in Australia in:\n(a) the applicant's nominated skilled occupation; or\n(b) a closely related skilled occupation;\nfor a period totalling at least 12 months in the 10 years immediately before that time"
                },
                {
                    id: 95,
                    item: "6D42",
                    value: "6D42",
                    point: 10,
                    label: "had been employed in Australia in:\n(a) the applicant's nominated skilled occupation; or\n(b) a closely related skilled occupation;\nfor a period totalling at least 36 months in the 10 years immediately before that time"
                },
                {
                    id: 96,
                    item: "6D43",
                    value: "6D43",
                    point: 15,
                    label: "had been employed in Australia in:\n(a) the applicant's nominated skilled occupation; or\n(b) a closely related skilled occupation;\nfor a period totalling at least 60 months in the 10 years immediately before that time"
                },
                {
                    id: 97,
                    item: "6D44",
                    value: "6D44",
                    point: 20,
                    label: "had been employed in Australia in:\n(a) the applicant's nominated skilled occupation; or\n(b) a closely related skilled occupation;\nfor a period totalling at least 96 months in the 10 years immediately before that time"
                }
            ]
        },
        {
            order: 6,
            id: 34,
            item: "6D.6",
            title: "Australian professional year qualifications",
            question: "Degree, diploma, advanced diploma or trade qualification from an Australian educational institution which took at least 2 years of full-time study and was taught in English.",
            option: [
                {
                    id: 98,
                    item: "6D61",
                    value: "6D61",
                    point: 5,
                    label: "a professional year in Australia in:\n(a) the applicant's nominated skilled occupation; or\n(b) a closely related skilled occupation;\nfor a period totalling at least 12 months in the 48 months immediately before that time"
                },
                {
                    id: 99,
                    item: "6D62",
                    value: "6D62",
                    point: 0,
                    label: "No"
                }
            ]
        },
        {
            order: 7,
            id: 35,
            item: "6D.7",
            title: "Educational qualifications",
            question: "A Masters degree by research or a Doctorate degree from an Australian educational institution that included at least two academic years in a relevant field (Natural and Physical Sciences, Information Technology or Engineering and Related Technologies).",
            option: [
                {
                    id: 100,
                    item: "6D71",
                    value: "6D71",
                    point: 20,
                    label: "met the requirements for:\n(a) the award of a doctorate by an Australian educational institution; or\n(b) the award of a doctorate, by another educational institution, that is of a recognised standard"
                },
                {
                    id: 101,
                    item: "6D72",
                    value: "6D72",
                    point: 15,
                    label: "met the requirements for:\n(a) the award of at least a bachelor degree by an Australian educational institution; or\n(b) the award of at least a bachelor qualification, by another educational institution, that is of a recognised standard"
                },
                {
                    id: 102,
                    item: "6D73 ",
                    value: "6D73 ",
                    point: 10,
                    label: "met the requirements for the award of a diploma by an Australian educational institution "
                },
                {
                    id: 103,
                    item: "6D74",
                    value: "6D74",
                    point: 10,
                    label: "met the requirements for the award of a trade qualification by an Australian educational institution "
                },
                {
                    id: 104,
                    item: "6D75",
                    value: "6D75",
                    point: 10,
                    label: "attained a qualification or award recognised by the relevant assessing authority for the applicant's nominated skilled\noccupation as being suitable for the occupation"
                },
                {
                    id: 105,
                    item: "6D76",
                    value: "6D76",
                    point: 0,
                    label: "No Recognised Qualifications"
                }
            ]
        },
        {
            order: 8,
            id: 36,
            item: "6D.7A",
            title: "Specialist educational qualifications",
            question: "A Masters degree by research or a Doctorate degree from an Australian educational institution that included at least two academic years in a relevant field (Natural and Physical Sciences, Information Technology or Engineering and Related Technologies).",
            option: [
                {
                    id: 106,
                    item: "6D7A1",
                    value: "6D7A1",
                    point: 10,
                    label: "Yes, the applicant met the requirements for the award of a specialist educational qualification "
                },
                {
                    id: 107,
                    item: "6D7A2",
                    value: "6D7A2",
                    point: 0,
                    label: "No"
                }
            ]
        },
        {
            order: 9,
            id: 37,
            item: "6D.8",
            title: "Australian study qualifications",
            question: "Degree, diploma, advanced diploma or trade qualification from an Australian educational institution which took at least 2 years of full-time study and was taught in English.",
            option: [
                {
                    id: 108,
                    item: "6D81",
                    value: "6D81",
                    point: 10,
                    label: "Yes, the applicant met the Australian study requirement"
                },
                {
                    id: 109,
                    item: "6D82",
                    value: "6D82",
                    point: 0,
                    label: "No"
                }
            ]
        },
        {
            order: 10,
            id: 38,
            item: "6D.9",
            title: "Credentialled community language qualifications",
            question: "Accredited Community Language",
            option: [
                {
                    id: 110,
                    item: "6D91",
                    value: "6D91",
                    point: 5,
                    label: "A qualification in a particular language:\n(a) awarded or accredited by a body specified by the Minister in an instrument in writing for this item; and\n(b) at a standard for the language specified in the instrument"
                },
                {
                    id: 111,
                    item: "6D92",
                    value: "6D92",
                    point: 0,
                    label: "No"
                }
            ]
        },
        {
            order: 11,
            id: 39,
            item: "6D.10",
            title: "Study in designated regional area qualification",
            question: "A Masters degree by research or a Doctorate degree from an Australian educational institution that included at least two academic years in a relevant field (Natural and Physical Sciences, Information Technology or Engineering and Related Technologies).",
            option: [
                {
                    id: 112,
                    item: "6D101",
                    value: "6D101",
                    point: 5,
                    label: "each of the following applied:\n(a) the applicant met the Australian study requirement;\n(b) the location of the campus or campuses at which that study was undertaken is in a designated regional area;\n(c) while the applicant undertook the course of study the applicant lived in a designated regional area;\n(d) none of the study undertaken constituted distance education."
                },
                {
                    id: 113,
                    item: "6D102",
                    value: "6D102",
                    point: 0,
                    label: "No"
                }
            ]
        },
        {
            order: 12,
            id: 40,
            item: "6D.11",
            title: "Partner qualifications",
            question: "Do you have a partner (spouse or de facto partner) who meets the following criteria?",
            option: [
                {
                    id: 114,
                    item: "6D111",
                    value: "6D111",
                    point: 10,
                    label: "The spouse or de facto partner of the applicant **(the primary applicant)**: 10\n(a) is an applicant for the same subclass of visa as the primary applicant; and\n(b) is not an Australian permanent resident or an Australian citizen; and\n(c) was under 45 at the time the invitation to apply for the visa was issued to the primary applicant; and\n(d) at the time of invitation to apply for the visa, nominated a skilled occupation, being an occupation specified by the\nMinister under paragraph 1.15I(1)(a) at that time; and\n(e) at the time of invitation to apply for the visa, had been assessed by the relevant assessing authority for the nominated skilled occupation as having suitable skills for the occupation and the assessment was not for a Subclass 485 (Temporary Graduate) visa; and\n(f) at the time of invitation to apply for the visa, had competent English"
                },
                {
                    id: 115,
                    item: "6D112",
                    value: "6D112",
                    point: 10,
                    label: "Either:\n(a) the applicant does not have a spouse or de facto partner; or\n(b) the applicant has a spouse or de facto partner who is an Australian permanent resident or an Australian citizen"
                },
                {
                    id: 116,
                    item: "6D113",
                    value: "6D113",
                    point: 5,
                    label: "The spouse or de facto partner of the applicant **(the primary applicant)**: \n(a) is an applicant for the same subclass of visa as the primary applicant; and\n(b) is not an Australian permanent resident or an Australian citizen; and\n(c) at the time of invitation to apply for the visa, had competent English"
                },
                {
                    id: 117,
                    item: "6D114",
                    value: "6D114",
                    point: 0,
                    label: "None above this"
                }
            ]
        },
        {
            order: 13,
            id: 41,
            item: "6D.12",
            title: "State or Territory nomination qualifications",
            question: "State or Territory nomination qualifications",
            option: [
                {
                    id: 118,
                    item: "6D121",
                    value: "6D121",
                    point: 5,
                    label: "The applicant has been invited to apply for a Subclass 190 (Skilled — Nominated) visa, and the nominating State or Territory government agency has not withdrawn the nomination"
                },
                {
                    id: 119,
                    item: "6D122",
                    value: "6D122",
                    point: 0,
                    label: "None above other"
                }
            ]
        },
        {
            order: 14,
            id: 42,
            item: "6D.13",
            title: "Designated regional area nomination or sponsorship qualifications",
            question: "Did you live and study in a 'designated regional area' of Australia and complete a course which meets the 'Australian study requirement' at the time of invitation to apply for the visa?",
            option: [
                {
                    id: 120,
                    item: "6D131",
                    value: "6D131",
                    point: 15,
                    label: "The applicant has been invited to apply for a Subclass 489 (Skilled – Regional) (Provisional) visa or a Subclass 491 (Skilled\nWork Regional (Provisional)) visa, and:\n(a) the nominating State or Territory government agency has not withdrawn the nomination; or\n(b) if the applicant is sponsored by a family member, the Minister has accepted the sponsorship"
                },
                {
                    id: 121,
                    item: "6D132",
                    value: "6D132",
                    point: 0,
                    label: "None above "
                }
            ]
        }
    ]
};


export default async function VisaPointsCalculator() {
  // Fetch visa calculator data from API
  // const res = await fetch(
  //   "https://admin.migrateglobe.com/api/visa-calculator?populate[question][populate][option]=*",
  // );


  // const json = await res.json();
  // const visaCalculatorData = json.data;

  return (
    <div className="container-1200">
      <VisaCalculator 
        questions={visaCalculatorData.question}
        scoreRequired={visaCalculatorData.scoreRequired}
        title={visaCalculatorData.title}
      />
    </div>
  );
}
