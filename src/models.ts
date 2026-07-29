import type {ActivityHistoryScore, IdentityFraudScore, StrengthScore, VerificationScore} from "./scores.ts";

export type Attribute = {
    name: string,
    description: string,
};

type HasScores = {

    strengthScore: StrengthScore,
    verificationScore: VerificationScore,
    identityFraudScore: IdentityFraudScore,
    activityHistoryScore: ActivityHistoryScore,
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
    | { and: UserRequirement[]}
    | { or: UserRequirement[]}
    ;
