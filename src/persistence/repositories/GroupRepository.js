import mongoose from "mongoose";
import Group from "../../business/Entities/Group.js";
import GroupModel from "../Models/GroupModel.js";

export default class GroupRepository {
    async createGroup(group) 
    {
        const groupModel = new GroupModel(group.toJSON());
        await groupModel.save();
        const savedGroup = new Group(groupModel.toObject());
        return savedGroup;
    }
    async getGroupById(groupId) 
    {
        const groupModel = await GroupModel.findById(groupId);
        if (!groupModel) throw new Error("Group not found");
        return new Group(groupModel.toObject());
    }
    async getAllGroups() 
    {
        const groupModels = await GroupModel.find();
        return groupModels.map(model => new Group(model.toObject()));
    }
    async updateGroup(groupId, groupData) 
    {
        const groupModel = await GroupModel.findByIdAndUpdate(groupId, groupData.toJSON(), { new: true });
        if (!groupModel) throw new Error("Group not found");
        return new Group(groupModel.toObject());
    }
    async deleteGroup(groupId) 
    {
        const groupModel = await GroupModel.findByIdAndDelete(groupId);
        if (!groupModel) throw new Error("Group not found");
        return new Group(groupModel.toObject());
    }
    async updateGroupStatus(groupId, status) 
    {
        const groupModel = await GroupModel.findByIdAndUpdate(groupId, { status }, { new: true });
        if (!groupModel) throw new Error("Group not found");
        return new Group(groupModel.toObject());
    }
    async addMember(groupId, memberData) 
    {
        const groupModel = await GroupModel.findByIdAndUpdate(
            groupId,
            { $push: { members: memberData } },
            { new: true }
        );
        if (!groupModel) throw new Error("Group not found");
        return new Group(groupModel.toObject());
    }
    async removeMember(groupId, memberId) 
    {
        const groupModel = await GroupModel.findByIdAndUpdate(
            groupId,
            { $pull: { members: { userId: memberId } } },
            { new: true }
        );
        if (!groupModel) throw new Error("Group not found");
        return new Group(groupModel.toObject());
    }
}