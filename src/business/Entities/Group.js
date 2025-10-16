export default class Group {
  static allowedStatuses = ["Pending", "Active", "Completed", "Closed"];

  constructor({ groupId, name, creatorId, currentRound ,contributionAmount, maxMembers, members = [], status , createdAt, updatedAt,
  }) {
    this.groupId = groupId;
    this.name = name;
    this.creatorId = creatorId;
    this.contributionAmount = contributionAmount;
    this.maxMembers = maxMembers;
    this.members = members;
    this.status = status;
    this.currentRound = currentRound;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  toJSON() {
    return {
      groupId: this.groupId,
      name: this.name,
      creatorId: this.creatorId,
      contributionAmount: this.contributionAmount,
      maxMembers: this.maxMembers,
      members: this.members,
      currentRound: this.currentRound,
      status: this.status,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}