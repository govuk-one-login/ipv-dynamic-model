import {describe, expect, test} from "vitest";
import {
    hasActivityHistoryScore,
    hasIdentityFraudScore,
    hasStrengthScore,
    hasVerificationScore,
    scoreCount
} from "./models.ts";

describe('Models', () => {
    describe('scoreCount', () => {
        test('It counts all scores', () => {
            const count = scoreCount({
                strengthScore: 1,
                verificationScore: 1,
                identityFraudScore: 1,
                activityHistoryScore: 1,
            });
            expect(count).toBe(4);
        });

        test('It counts no scores', () => {
            const count = scoreCount({
                strengthScore: null,
                verificationScore: null,
                identityFraudScore: null,
                activityHistoryScore: null,
            });
            expect(count).toBe(0);
        })

        test('It counts score of zero as a score', () => {
            const count = scoreCount({
                strengthScore: 0,
                verificationScore: null,
                identityFraudScore: null,
                activityHistoryScore: null,
            });
            expect(count).toBe(1);
        })
    });

    test('hasStrengthScore', () => {
        expect(hasStrengthScore({
            strengthScore: 0,
            verificationScore: 0,
            identityFraudScore: 0,
            activityHistoryScore: 0,
        })).toBe(true);
        expect(hasStrengthScore({
            strengthScore: null,
            verificationScore: 0,
            identityFraudScore: 0,
            activityHistoryScore: 0,
        })).toBe(false);
    });

    test('hasVerificationScore', () => {
        expect(hasVerificationScore({
            strengthScore: 0,
            verificationScore: 0,
            identityFraudScore: 0,
            activityHistoryScore: 0,
        })).toBe(true);
        expect(hasVerificationScore({
            strengthScore: 0,
            verificationScore: null,
            identityFraudScore: 0,
            activityHistoryScore: 0,
        })).toBe(false);
    });
    test('hasIdentityFraudScore', () => {
        expect(hasIdentityFraudScore({
            strengthScore: 0,
            verificationScore: 0,
            identityFraudScore: 0,
            activityHistoryScore: 0,
        })).toBe(true);
        expect(hasIdentityFraudScore({
            strengthScore: 0,
            verificationScore: 0,
            identityFraudScore: null,
            activityHistoryScore: 0,
        })).toBe(false);
    });
    test('hasActivityHistoryScore', () => {
        expect(hasActivityHistoryScore({
            strengthScore: 0,
            verificationScore: 0,
            identityFraudScore: 0,
            activityHistoryScore: 0,
        })).toBe(true);
        expect(hasActivityHistoryScore({
            strengthScore: 0,
            verificationScore: 0,
            identityFraudScore: 0,
            activityHistoryScore: null,
        })).toBe(false);
    });
});