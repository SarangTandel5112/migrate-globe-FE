export interface QualificationLevelOption {
  id: string;
  label: string;
}

export interface OccupationFieldOption {
  id: string;
  label: string;
}

export interface EnglishLevelOption {
  id: string;
  label: string;
  description: string;
}

export interface QualificationCountryOption {
  id: string;
  label: string;
}

export interface ExperienceRange {
  min: number;
  max: number;
  default: number;
  label: string;
}

export interface StepTitle {
  step: number;
  title: string;
  icon?: string;
  subtitle?: string;
}

export interface SkillAssessmentConfig {
  totalSteps: number;
  title: string;
  description: string;
  qualificationLevels: QualificationLevelOption[];
  occupationFields: OccupationFieldOption[];
  englishLevels: EnglishLevelOption[];
  qualificationCountries: QualificationCountryOption[];
  experienceRange: ExperienceRange;
  stepTitles: StepTitle[];
  isActive: boolean;
  showProgressIndicator: boolean;
  allowBackNavigation: boolean;
  requireAllFields: boolean;
}

export interface SkillAssessmentConfigResponse {
  data: {
    id: number;
    attributes: SkillAssessmentConfig;
  };
  meta: Record<string, unknown>;
}
