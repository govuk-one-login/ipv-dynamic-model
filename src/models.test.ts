import {describe, expect, test} from "vitest";
import {scoreCount} from "./models.ts";

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
});