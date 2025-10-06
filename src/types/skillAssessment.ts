export type QualificationLevel = "diploma" | "bachelors" | "masters" | "other";

export type OccupationField =
  | "ICT"
  | "Engineering"
  | "Healthcare"
  | "Trades"
  | "Education"
  | "Business"
  | "Accounting"
  | "Hospitality"
  | "Social Services"
  | "Other";

export type EnglishProficiency =
  | "none"
  | "basic" // Below IELTS 6.0
  | "competent" // IELTS 6.0-6.5
  | "proficient" // IELTS 7.0-7.5
  | "superior" // IELTS 8.0+
  | "native"; // Native English speaker or exempt

export type CountryOfQualification =
  | "australia"
  | "newzealand"
  | "uk-usa-canada"
  | "other";

export interface AssessingAuthority {
  name: string;
  website: string;
  description: string;
}

export interface SkillResult {
  id: string;
  anzscoCode: string;
  title: string;
  field: OccupationField;
  assessingAuthority: AssessingAuthority;
  minEducation: QualificationLevel[];
  minExperience: number; // in years
  minEnglishLevel: EnglishProficiency; // Minimum English proficiency required
  preferredCountries: CountryOfQualification[]; // Preferred qualification countries
  requiresAustralianQualification?: boolean; // Some occupations strongly prefer/require Australian quals
  description?: string;
}

export interface SkillAssessmentFormData {
  education: QualificationLevel;
  experience: number;
  field: OccupationField;
  englishProficiency: EnglishProficiency;
  countryOfQualification: CountryOfQualification;
}

export interface SkillAssessmentData {
  skills: SkillResult[];
}
