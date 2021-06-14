import { addressInfoType, contactInfoType, lawyerStatementInfoType } from "..";

export interface childDataInfoType {
    fullName: string; 
    dob: string;
    myRelationship: string;
    otherPartyRelationship: string; 
    currentSituation: string; 
}

export interface yourInformationInfoDataInfoType {
    dob: string;
    name: string;
    lawyer: boolean;
    lawyerName: string;
    address: addressInfoType;
    contact: contactInfoType;
    lawyerFiling: boolean;
    lawyerStatement: lawyerStatementInfoType;
}