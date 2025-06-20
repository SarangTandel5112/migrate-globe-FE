import React from "react";

const visaCategories = [
    {
        title: "Visitor visas",
        visas: [
            "Electronic Travel Authority (subclass 601)",
            "eVisitor (subclass 651)",
            "Transit visa (subclass 771)",
            "Visitor (subclass 600)",
            "Work and Holiday visa (subclass 462)",
            "Working Holiday visa (subclass 417)",
        ],
    },
    {
        title: "Studying and training visas",
        visas: [
            "Student visa (subclass 500)",
            "Student Guardian visa (subclass 590)",
            "Training visa (subclass 407)",
        ],
    },
    {
        title: "Family and partner visas",
        visas: [
            "Adoption visa (subclass 102)",
            "Aged Dependent Relative visa (subclass 114)",
            "Aged Dependent Relative visa (subclass 838)",
            "Aged Parent visa (subclass 804)",
            "Carer visa (subclass 836)",
            "Carer visa (subclass 116)",
            "Child visa (subclass 101)",
            "Child visa (subclass 802)",
            "Contributory Aged Parent (Temporary) visa (subclass 884)",
            "Contributory Aged Parent visa (subclass 864)",
            "Contributory Parent (Temporary) visa (subclass 173)",
            "Contributory Parent visa (subclass 143)",
            "Dependent Child visa (subclass 445)",
            "New Zealand Citizen Family Relationship visa (subclass 461)",
            "Orphan Relative (subclass 117)",
            "Orphan Relative (subclass 837)",
            "Parent visa (subclass 103)",
            "Partner (Provisional and Migrant) visa (subclass 309 100)",
            "Partner visa (subclass 820 801)",
            "Prospective Marriage visa (subclass 300)",
        ],
    },
];

export default function VisaCategoriesGrid() {
    return (
        <div className="border border-gray-300 rounded-lg p-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visaCategories.map((category, i) => (
                    <div key={i}>
                        <h3 className="font-semibold text-gray-900 mb-2">
                            {category.title}
                        </h3>
                        <ul className="space-y-1 text-gray-700 text-sm">
                            {category.visas.map((visa, j) => (
                                <li key={j}>{visa}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
