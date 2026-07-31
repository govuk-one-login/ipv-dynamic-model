// I want to build some sort of table where items are organized across rows.

// For any CRI that only covers one scoring, we can leave it as is, for any the covers more than one, we should make
// sure it sits across all rows that it . If th

// Find out how many scores each CRI provides, sort them by that number
// The place them in the grid by score order

// The grid effectively is an array of objects representing a single column




import {
    type CriModel,
    hasActivityHistoryScore,
    hasIdentityFraudScore, hasScore,
    hasStrengthScore, hasValidityScore,
    hasVerificationScore, scoreCount
} from "./models.ts";

type ScoreType =
    | "strength"
    | "validity"
    | "identityFraud"
    | "activityHistory"
    | "verification"
    ;

type Row = ScoreType | "other";

const hasScoreType = (cri: CriModel, scoreType: ScoreType): boolean => {
    switch (scoreType) {
        case "strength":
            return hasStrengthScore(cri);
        case "validity":
            return hasValidityScore(cri);
        case "identityFraud":
            return hasIdentityFraudScore(cri);
        case "activityHistory":
            return hasActivityHistoryScore(cri);
        case "verification":
            return hasVerificationScore(cri);
    }
}

// todo: pretty sure there's a way to say exactly one of each
const scoringOrder: ScoreType[] = [
    "strength",
    "validity",
    "identityFraud",
    "activityHistory",
    "verification",
];

class Column {
    strength: CriModel | null = null;
    validity: CriModel | null = null;
    identityFraud: CriModel | null = null;
    activityHistory: CriModel | null = null;
    verification: CriModel | null = null;
    other: CriModel | null = null;

    containsCri(cri: CriModel): boolean {
        return scoringOrder.some((scoringType) => this[scoringType] === cri);
    }

    isRowFilled(row: Row): boolean {
        return this[row] !== null;
    }

    addCri(cri: CriModel) {
        if (hasStrengthScore(cri)) {
            this.strength = cri;
        }
        if(hasValidityScore(cri)) {
            this.validity = cri;
        }
        if (hasIdentityFraudScore(cri)) {
            this.identityFraud = cri;
        }
        if (hasActivityHistoryScore(cri)) {
            this.activityHistory = cri;
        }
        if (hasVerificationScore(cri)) {
            this.verification = cri;
        }
        if (!hasScore(cri)) {
            this.other = cri;
        }
    }
}

export class Table {
    columns: Column[] = [];

    constructor(cris: CriModel[]) {
        cris.sort((a, b) => scoreCount(a) - scoreCount(b));

        // We'll go through each score type one at a time
        for (const scoreType of scoringOrder) {
            cris
                .filter((cri) => !this.containsCri(cri)) // CRI is not in table
                .filter((cri) => hasScoreType(cri, scoreType)) // CRI has score type
                .forEach((cri) => {
                    this.getFirstAvailableColumn(scoreType).addCri(cri);
                });
        }

        // Add remaining CRIs that don't have a score
        cris.filter((cri) => !this.containsCri(cri)).forEach((cri) => {
            this.getFirstAvailableColumn("other").addCri(cri);
        })

    }

    // Checks if the table already contains a CRI
    protected containsCri(cri: CriModel): boolean {
        return this.columns.some((column: Column) => column.containsCri(cri));
    }

    // Returns the first available column for a scoreType
    // Note: This only works if you go through the scoreTypes in order as you don't need to know what scoreType
    protected getFirstAvailableColumn(row: Row): Column {
        // Find the first available column
        const foundColumn = this.columns.find((column) => !column.isRowFilled(row));
        if (foundColumn) {
            return foundColumn;
        }

        // Or add a column and return that
        const newColumn = new Column();
        this.columns.push(newColumn);
        return newColumn;
    }
}
