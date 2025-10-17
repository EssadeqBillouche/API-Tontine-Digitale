import GroupRepository from "../../persistence/repositories/GroupRepository.js"
import Group from "../Entities/Group.js";

export default class GroupService
{
    constructor(GroupRepository)
    {
        this.GroupRepository = GroupRepository;
    }

    async createGroup(Group)
    {
        try
        {
            const CreateGroup = await this.GroupRepository.createGroup(Group);
            return CreateGroup;
        }catch(err)
        {
            throw new Error("error with Create Group Function" + err);
        }
    }
    async getGroupById(groupId)
    {
        try
        {
            const group = await this.GroupRepository.getGroupById(groupId);
            return group;
        }catch(err)
        {
            throw new Error("error with Get Group By ID Function" + err);
        }
    }
    async getAllGroups()
    {
        try
        {
            const groups = await this.GroupRepository.getAllGroups();
            return groups;
        }catch(err)
        {
            throw new Error("error with Get All Groups Function" + err);
        }
    }
    async updateGroup(groupId, groupData)
    {
        try
        {
            const updatedGroup = await this.GroupRepository.updateGroup(groupId, groupData);
            return updatedGroup;
        }catch(err)
        {
            throw new Error("error with Update Group Function" + err);
        }
    }
    async deleteGroup(groupId)
    {
        try
        {
            const deletedGroup = await this.GroupRepository.deleteGroup(groupId);
            return deletedGroup;
        }catch(err)
        {
            throw new Error("error with Delete Group Function" + err);
        }
    }
    async updateGroupStatus(groupId, status)
    {
        try
        {
            const updatedGroup = await this.GroupRepository.updateGroupStatus(groupId, status);
            return updatedGroup;
        }catch(err)
        {
            throw new Error("error with Update Group Status Function" + err);
        }
    }
    async addMember(groupId, memberData)
    {
        try
        {
            const updatedGroup = await this.GroupRepository.addMember(groupId, memberData);
            return updatedGroup;
        }catch(err)
        {
            throw new Error("error with Add Member Function" + err);
        }
    }
    async removeMember(groupId, memberId)
    {
        try
        {
            const updatedGroup = await this.GroupRepository.removeMember(groupId, memberId);
            return updatedGroup;
        }catch(err)
        {
            throw new Error("error with Remove Member Function" + err);
        }
    }
}