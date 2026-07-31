import type {ActivityHistoryScore, IdentityFraudScore, StrengthScore, VerificationScore} from "./scores.ts";
import {randomArray, randomInteger, randomNumber, randomString} from "./test-utils/random.ts";

export type Attribute = {
    name: string,
    description: string,
};

export const createTestAttribute = (attribute: Partial<Attribute> = {}): Attribute => ({
    name: randomString("name"),
    description: randomString("description"),
    ...attribute
})

type HasScores = {
    strengthScore: StrengthScore | null,
    verificationScore: VerificationScore | null,
    identityFraudScore: IdentityFraudScore | null,
    activityHistoryScore: ActivityHistoryScore | null,
}

export const createTestHasScores = (hasScores: Partial<HasScores> = {}): HasScores => ({
    strengthScore: null,
    verificationScore: null,
    identityFraudScore: null,
    activityHistoryScore: null,
    ...hasScores,
});

export type Claim = {
    name: string,
    description: string,
    attributes: Attribute[],
} & HasScores;

export const createTestClaim = (claim: Partial<Claim> = {}): Claim => ({
    name: randomString("name"),
    description: randomString("description"),
    attributes: randomArray(randomInteger(5), () => createTestAttribute()),
    ...createTestHasScores(),
    ...claim,
})

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

const createTestUserRequirements = () => {
    const possibleRequirements = [
        "UK Passport",
        "ICAO9303 Machine Readable Travel Document",
        "International Passport",
        "UK Driving License",
        "Bank Account",
        "BRP Document",
        "National Insurance Number",
        "Credit History",
        "Benefits History",
        "Smart Phone"
    ];
    return possibleRequirements[randomInteger(possibleRequirements.length - 1)]
}

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

export const createTestCriModel = (criModel: Partial<CriModel> = {}) => ({
    name: randomString("name"),
    description: randomString("description"),
    throughput: randomNumber(2000),
    possibleCIs: randomArray(randomInteger(5), () => randomString("possibleCI")),
    mitigatesCIs: randomArray(randomInteger(5), () => randomString("mitigatesCI")),
    successRate: randomNumber(1),
    userRequirements: randomArray(randomInteger(3), createTestUserRequirements),
    claimsRequired: randomArray(randomInteger(5), createTestClaim),
    claimsProduced: randomArray(randomInteger(5), createTestClaim),
    comments: randomString("comments"),
    ...createTestHasScores(),
    ...criModel
})

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
