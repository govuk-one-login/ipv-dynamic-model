import type {ActivityHistoryScore, IdentityFraudScore, StrengthScore, VerificationScore} from "./scores.ts";

export type Attribute = {
    name: string,
    description: string,
};

type HasScores = {
    strengthScore: StrengthScore | null,
    verificationScore: VerificationScore | null,
    identityFraudScore: IdentityFraudScore | null,
    activityHistoryScore: ActivityHistoryScore | null,
}

export type Claim = {
    name: string,
    description: string,
    attributes: Attribute[],
} & HasScores;

type RequestsPerSecond = number;

export type CriModel = {
    name: string,
    description: string,
    throughput: RequestsPerSecond,
    possibleCIs: string[],
    mitigatesCIs: string[],
    successRate: number,
    userRequirements: UserRequirement[],
    claimsRequired: Claim[],
    claimsProduced: Claim[],
    comments: string,
} & HasScores;

export type UserRequirement =
    | "UK Passport"
    | "ICAO9303 Machine Readable Travel Document"
    | "International Passport"
    | "UK Driving License"
    | "Bank Account"
    | "BRP Document"
    | "National Insurance Number"
    | "Credit History"
    | "Benefits History"
    | "Smart Phone"
    | { and: UserRequirement[] }
    | { or: UserRequirement[] }
    ;

export const scoreCount = (hasScores: HasScores): number => {
    return [
        hasScores.strengthScore != null,
        hasScores.verificationScore != null,
        hasScores.identityFraudScore != null,
        hasScores.activityHistoryScore != null,
    ].filter((hasScore) => hasScore)
        .length
}


export const hasStrengthScore = (hasScores: HasScores): boolean => hasScores.strengthScore != null;
export const hasVerificationScore = (hasScores: HasScores): boolean => hasScores.verificationScore != null;
export const hasIdentityFraudScore = (hasScores: HasScores): boolean => hasScores.identityFraudScore != null;
export const hasActivityHistoryScore = (hasScores: HasScores): boolean => hasScores.activityHistoryScore != null;