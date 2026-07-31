import {test, expect, describe} from "vitest";
import {
    toActivityHistoryScore,
    toIdentityFraudScore,
    toStrengthScore,
    toValidityScore,
    toVerificationScore
} from "./scores.ts";

describe('scores', () => {
    test('toVerificationScore', () => {
        expect(toVerificationScore(1).value).toBe(1);
        expect(toVerificationScore(-1).error).toBe("Invalid score, must be one of: 1, 2, 3, 4");
    })
    test('toStrengthScore', () => {
        expect(toStrengthScore(1).value).toBe(1);
        expect(toStrengthScore(-1).error).toBe("Invalid score, must be one of: 1, 2, 3, 4");
    })
    test('toValidityScore', () => {
        expect(toValidityScore(1).value).toBe(1);
        expect(toValidityScore(-1).error).toBe("Invalid score, must be one of: 1, 2, 3, 4");
    })
    test('toActivityHistoryScore', () => {
        expect(toActivityHistoryScore(1).value).toBe(1);
        expect(toActivityHistoryScore(-1).error).toBe("Invalid score, must be one of: 1, 2, 3, 4");
    })
    test('toIdentityFraudScore', () => {
        expect(toIdentityFraudScore(1).value).toBe(1);
        expect(toIdentityFraudScore(-1).error).toBe("Invalid score, must be one of: 0, 1, 2, 3");
    })
});
