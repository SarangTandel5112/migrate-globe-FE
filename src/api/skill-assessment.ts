import { API_URL } from "@/constants";
import { SkillResult, SkillAssessmentFormData } from "@/types/skillAssessment";
import { SkillAssessmentConfig } from "@/types/skillAssessmentConfig";

export interface SkillAssessmentResponse {
    data: SkillResult[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

export interface SkillAssessmentSubmissionResponse {
    data: {
        id: number;
        attributes: SkillAssessmentFormData & {
            eligibleSkills: any[];
            totalEligibleCount: number;
            createdAt: string;
            updatedAt: string;
        };
    };
}

/**
 * Fetch all skill assessments from Strapi
 */
export async function fetchSkillAssessments(): Promise<SkillResult[]> {
    try {
        const response = await fetch(
            `${API_URL}skill-assessments?populate=*&pagination[limit]=100`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch skill assessments");
        }

        const result = await response.json();

        console.log(result, "---skills result---");

        let dataArray: any[] = [];

        // Handle different response structures
        if (result.data && Array.isArray(result.data)) {
            dataArray = result.data;
        } else if (
            result.data &&
            result.data.skills &&
            Array.isArray(result.data.skills)
        ) {
            dataArray = result.data.skills;
        } else if (Array.isArray(result)) {
            dataArray = result;
        } else {
            throw new Error("Invalid data structure received from API");
        }

        // Transform response to match our frontend types
        const skills: SkillResult[] = dataArray.map(
            (item: any, index: number) => {
                // Handle both Strapi format (with attributes) and direct format
                const itemData = item.attributes || item;

                console.log(`Processing item ${index}:`, itemData);

                // Handle both Strapi format and direct format for assessingAuthority
                let assessingAuthority;
                if (
                    itemData.assessingAuthority &&
                    typeof itemData.assessingAuthority === "object"
                ) {
                    // Direct object format
                    assessingAuthority = itemData.assessingAuthority;
                    console.log(
                        `Item ${index} - Direct assessingAuthority:`,
                        assessingAuthority
                    );
                } else {
                    // Strapi format with separate fields
                    assessingAuthority = {
                        name: itemData.assessingAuthorityName || "",
                        website: itemData.assessingAuthorityWebsite || "",
                        description:
                            itemData.assessingAuthorityDescription || "",
                    };
                    console.log(
                        `Item ${index} - Strapi assessingAuthority:`,
                        assessingAuthority
                    );
                }

                return {
                    id:
                        item.id?.toString() ||
                        itemData.id?.toString() ||
                        Math.random().toString(),
                    anzscoCode: itemData.anzscoCode || "",
                    title: itemData.title || "",
                    field: itemData.field || "",
                    assessingAuthority: {
                        name: assessingAuthority.name || "",
                        website: assessingAuthority.website || "",
                        description: assessingAuthority.description || "",
                    },
                    minEducation: itemData.minEducation || [],
                    minExperience: itemData.minExperience || 0,
                    minEnglishLevel: itemData.minEnglishLevel || "none",
                    preferredCountries: itemData.preferredCountries || [],
                    requiresAustralianQualification:
                        itemData.requiresAustralianQualification || false,
                    description: itemData.description || "",
                };
            }
        );

        return skills;
    } catch (error) {
        console.error("Error fetching skill assessments:", error);
        throw error;
    }
}

/**
 * Fetch assessment configuration from Strapi
 */
export async function fetchAssessmentConfig(): Promise<SkillAssessmentConfig> {
    try {
        const response = await fetch(
            `${API_URL}skill-assessment-config`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch assessment configuration");
        }

        const result = await response.json();

        console.log(result, "---result---");

        // Handle different response structures
        if (result.data && result.data.attributes) {
            // Strapi format
            return result.data.attributes;
        } else if (
            result.data &&
            typeof result.data === "object" &&
            !result.data.attributes
        ) {
            // Direct data format
            return result.data;
        } else if (result && typeof result === "object" && !result.data) {
            // Direct response format
            return result;
        } else {
            throw new Error("Invalid configuration data structure");
        }
    } catch (error) {
        console.error("Error fetching assessment configuration:", error);

        // Return a default configuration as fallback
        return {
            totalSteps: 6,
            title: "Skills Assessment",
            description: "Find your eligible skills assessment",
            qualificationLevels: [
                { id: "diploma", label: "Diploma" },
                { id: "bachelors", label: "Bachelors" },
                { id: "masters", label: "Masters" },
                { id: "other", label: "Other" },
            ],
            occupationFields: [
                { id: "ICT", label: "ICT" },
                { id: "Engineering", label: "Engineering" },
                { id: "Healthcare", label: "Healthcare" },
                { id: "Trades", label: "Trades" },
                { id: "Education", label: "Education" },
                { id: "Business", label: "Business" },
                { id: "Accounting", label: "Accounting" },
                { id: "Hospitality", label: "Hospitality" },
                { id: "Social Services", label: "Social Services" },
                { id: "Other", label: "Other" },
            ],
            englishLevels: [
                {
                    id: "none",
                    label: "Not Required",
                    description: "No English test required",
                },
                { id: "basic", label: "Basic", description: "Below IELTS 6.0" },
                {
                    id: "competent",
                    label: "Competent",
                    description: "IELTS 6.0-6.5",
                },
                {
                    id: "proficient",
                    label: "Proficient",
                    description: "IELTS 7.0-7.5",
                },
                {
                    id: "superior",
                    label: "Superior",
                    description: "IELTS 8.0+",
                },
                {
                    id: "native",
                    label: "Native",
                    description: "Native English speaker",
                },
            ],
            qualificationCountries: [
                { id: "australia", label: "Australia" },
                { id: "newzealand", label: "New Zealand" },
                { id: "uk-usa-canada", label: "UK / USA / Canada" },
                { id: "other", label: "Other Country" },
            ],
            experienceRange: {
                min: 0,
                max: 20,
                default: 5,
                label: "Years of Experience",
            },
            stepTitles: [
                { step: 1, title: "Education Level" },
                { step: 2, title: "Work Experience" },
                { step: 3, title: "Occupation Field" },
                { step: 4, title: "English Proficiency" },
                { step: 5, title: "Country of Qualification" },
                { step: 6, title: "Results" },
            ],
            isActive: true,
            showProgressIndicator: true,
            allowBackNavigation: true,
            requireAllFields: true,
        };
    }
}

/**
 * Submit skill assessment form
 */
export async function submitSkillAssessment(
    formData: SkillAssessmentFormData,
    eligibleSkills: SkillResult[]
): Promise<SkillAssessmentSubmissionResponse> {
    try {
        const token = localStorage.getItem("token"); // Get JWT token if user is logged in

        const headers: HeadersInit = {
            "Content-Type": "application/json",
        };

        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }

        const response = await fetch(`${API_URL}skill-assessment-submissions`, {
            method: "POST",
            headers,
            body: JSON.stringify({
                data: {
                    education: formData.education,
                    experience: formData.experience,
                    field: formData.field,
                    englishProficiency: formData.englishProficiency,
                    countryOfQualification: formData.countryOfQualification,
                    eligibleSkills: eligibleSkills.map((skill) => ({
                        anzscoCode: skill.anzscoCode,
                        title: skill.title,
                        field: skill.field,
                    })),
                    totalEligibleCount: eligibleSkills.length,
                },
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(
                error.error?.message || "Failed to submit assessment"
            );
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error submitting skill assessment:", error);
        throw error;
    }
}
