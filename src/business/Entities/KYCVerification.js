export default class KYCVerification {
    static allowedStatus = ['Pending', 'Rejected', 'NeedManualReview', 'Approved'];

    constructor({ userId, nationalIdPicture, status, ...optionals }) {
        this.KYCVerificationId = optionals.KYCVerificationId;
        this.userId = userId;
        this.nationalIdPicture = nationalIdPicture;
        this.status = status;
        this.verifiedBy = optionals.verifiedBy;
        this.verifiedAt = optionals.verifiedAt;
        this.submittedAt = optionals.submittedAt;

        if (!KYCVerification.allowedStatus.includes(this.status)) {
            throw new Error('Invalid status');
        }
    }

    changeStatus(status) {
        if (!KYCVerification.allowedStatus.includes(status)) {
            throw new Error('Invalid status');
        }
        this.status = status;

        if (status === 'Approved') {
            this.verifiedAt = new Date().toISOString();
        }
    }

    isApproved() {
        return this.status === 'Approved';
    }

    toJSON() {
        return {
            KYCVerificationId: this.KYCVerificationId,
            userId: this.userId,
            nationalIdPicture: this.nationalIdPicture,
            status: this.status,
            verifiedBy: this.verifiedBy,
            verifiedAt: this.verifiedAt,
            submittedAt: this.submittedAt
        };
    }
}
