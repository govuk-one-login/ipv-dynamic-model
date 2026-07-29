import {Result} from "typescript-result";

export type VerificationScore = 1 | 2 | 3 | 4;

export const toVerificationScore = (num: number): Result<VerificationScore, string> => {
    switch (num) {
        case 1: return Result.ok(1);
        case 2: return Result.ok(2);
        case 3: return Result.ok(3);
        case 4: return Result.ok(4);
        default: return Result.error("Invalid score, must be 1, 2, 3, or 4")
    }
}

export type StrengthScore = 1 | 2 | 3 | 4

export const toStrengthScore = (num: number): Result<StrengthScore, string> => {
    switch (num) {
        case 1: return Result.ok(1);
        case 2: return Result.ok(2);
        case 3: return Result.ok(3);
        case 4: return Result.ok(4);
        default: return Result.error("Invalid score, must be 1, 2, 3, or 4")
    }
}

export type ValidityScore = 1 | 2 | 3 | 4

export const toValidityScore = (num: number): Result<ValidityScore, string> => {
    switch (num) {
        case 1: return Result.ok(1);
        case 2: return Result.ok(2);
        case 3: return Result.ok(3);
        case 4: return Result.ok(4);
        default: return Result.error("Invalid score, must be 1, 2, 3, or 4")
    }
}

export type ActivityHistoryScore = 1 | 2 | 3 | 4

export const toActivityHistoryScore = (num: number): Result<ActivityHistoryScore, string> => {
    switch (num) {
        case 1: return Result.ok(1);
        case 2: return Result.ok(2);
        case 3: return Result.ok(3);
        case 4: return Result.ok(4);
        default: return Result.error("Invalid score, must be 1, 2, 3, or 4")
    }
}

export type IdentityFraudScore = 1 | 2 | 3

export const toIdentityFraudScore = (num: number): Result<IdentityFraudScore, string> => {
    switch (num) {
        case 1: return Result.ok(1);
        case 2: return Result.ok(2);
        case 3: return Result.ok(3);
        default: return Result.error("Invalid score, must be 1, 2, or 3")
    }
}
