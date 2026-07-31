import {Result} from "typescript-result";

// --- Verification Score ---

export type VerificationScore = 1 | 2 | 3 | 4;
export const allVerificationScores: VerificationScore[] = [1, 2, 3, 4]

export const isVerificationScore = (score: unknown): score is VerificationScore =>
    allVerificationScores.includes(score as any)

export const toVerificationScore = (num: number): Result<VerificationScore, string> =>
    isVerificationScore(num) ? Result.ok(num) : Result.error(`Invalid score, must be one of: ${allVerificationScores.join(", ")}`);

// --- Strength Score ---

export type StrengthScore = 1 | 2 | 3 | 4;
export const allStrengthScores: StrengthScore[] = [1, 2, 3, 4]

export const isStrengthScore = (score: unknown): score is StrengthScore =>
    allStrengthScores.includes(score as any)

export const toStrengthScore = (num: number): Result<StrengthScore, string> =>
    isStrengthScore(num) ? Result.ok(num) : Result.error(`Invalid score, must be one of: ${allStrengthScores.join(", ")}`);

// --- Validity Score ---

export type ValidityScore = 1 | 2 | 3 | 4
export const allValidityScores: ValidityScore[] = [1, 2, 3, 4]

export const isValidityScore = (score: unknown): score is ValidityScore =>
    allValidityScores.includes(score as any)

export const toValidityScore = (num: number): Result<ValidityScore, string> =>
    isValidityScore(num) ? Result.ok(num) : Result.error(`Invalid score, must be one of: ${allValidityScores.join(", ")}`);

// --- Activity History Score ---

export type ActivityHistoryScore = 1 | 2 | 3 | 4
export const allActivityHistoryScores: ActivityHistoryScore[] = [1, 2, 3, 4]

export const isActivityHistoryScore = (score: unknown): score is ActivityHistoryScore =>
    allActivityHistoryScores.includes(score as any)

export const toActivityHistoryScore = (num: number): Result<ActivityHistoryScore, string> =>
    isActivityHistoryScore(num) ? Result.ok(num) : Result.error(`Invalid score, must be one of: ${allActivityHistoryScores.join(", ")}`);

// --- Identity Fraud Score ---

export type IdentityFraudScore = 0 | 1 | 2 | 3
export const allIdentityFraudScores: IdentityFraudScore[] = [0, 1, 2, 3]

export const isIdentityFraudScore = (score: unknown): score is IdentityFraudScore =>
    allIdentityFraudScores.includes(score as any)

export const toIdentityFraudScore = (num: number): Result<IdentityFraudScore, string> =>
    isIdentityFraudScore(num) ? Result.ok(num) : Result.error(`Invalid score, must be one of: ${allIdentityFraudScores.join(", ")}`);
