import { nameInfoType, addressInfoType, contactInfoType, questionInfoType } from "../CommonInformation"; 
  
export interface aboutPriorityParentingMatterOrderSurveyInfoType {
    data: aboutPriorityParentingMatterOrderSurveyDataInfoType[];
    questions: questionInfoType[];
    pageName: string;
    currentStep: number;
    currentPage: number;
}

export interface aboutPriorityParentingMatterOrderSurveyDataInfoType {
    orderDescription: string;
    applicationFacts: string;
}

export interface childDataPPMInfoType {
    data: childDataPPMDataInfoType[];
    questions: questionInfoType[];
    pageName: string;
    currentStep: number;
    currentPage: number;
}

export interface childDataPPMDataInfoType {
    name:nameInfoType;
    dob: string;
    relation:string;
    opRelation:string;
    id:number;
}

export interface ppmBackgroundDataSurveyInfoType {
    data: ppmBackgroundDataSurveyDataInfoType;
    questions: questionInfoType[];
    pageName: string;
    currentStep: number;
    currentPage: number;
}

export interface ppmBackgroundDataSurveyDataInfoType {
    ExistingOrdersFLM: string;
    existingCourtProceeding: string;
    existingCourtProceedingDetails?: string;
}

export interface ppmQuestionnaireSurveyInfoType {
    data: string[];
    questions: questionInfoType[];
    pageName: string;
    currentStep: number;
    currentPage: number;
}

export interface priorityParentingOrderSurveyInfoType {
    data: priorityParentingOrderSurveyDataInfoType;
    questions: questionInfoType[];
    pageName: string;
    currentStep: number;
    currentPage: number;
}

export interface priorityParentingOrderSurveyDataInfoType {
    delayMedicalRisk?: string;
    confirmMedicalRisk?: string[];
    delayPassportRisk?: string;
    delayTravelRisk?: string;
    travelWrongfullyDenied?: string;
    confirmTravelWrongfullyDenied?: string[];
    existingParentingArrangements?: string;
    impactOnRelationship?: string;
    confirmImpactOnRelationship?: string[];
    noReturnRisk?: string;
    childInBC?: string;
    harm?: string;
    confirmHarm?: string[];
    wrongfulInBC?: string;
    wrongfulReturn?: string;
    confirmDelayPassportRisk?: string[];
    confirmWrongfulReturn?: string[];
    confirmNoReturnRisk?: string[];
    confirmWrongfulInBC?: string[];
}

