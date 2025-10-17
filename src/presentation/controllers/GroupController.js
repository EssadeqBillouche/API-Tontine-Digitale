import GroupService from "../../business/services/GroupServicer.js"
import Group from "../../business/Entities/Group.js"

export default class GroupController {
    constructor(GroupService) {
        this.GroupService = GroupService
    }
    async createGroup(req, res) {
        try {
            const group = new Group(req.body);
            const createGroup = await this.GroupService.createGroup(group);
            return res.status(201).json({ success: true, data: createGroup });
        } catch(err) {
            return res.status(500).json({ success: false, message: 'Error with creating group: ' + err.message });
        }
    }
    async getGroupById(req, res) {
        try {
            const groupId = req.params.id;
            const group = await this.GroupService.getGroupById(groupId);
            return res.status(200).json({ success: true, data: group });
        } catch(err) {
            return res.status(500).json({ success: false, message: 'Error with getting group: ' + err.message });
        }
    }
    async getAllGroups(req, res) {
        try {
            const groups = await this.GroupService.getAllGroups();
            return res.status(200).json({ success: true, data: groups });
        } catch(err) {
            return res.status(500).json({ success: false, message: 'Error with getting groups: ' + err.message });
        }
    }
    async updateGroup(req, res) {
        try {
            const groupId = req.params.id;
            const groupData = new Group(req.body);
            const updatedGroup = await this.GroupService.updateGroup(groupId, groupData);
            return res.status(200).json({ success: true, data: updatedGroup });
        } catch(err) {
            return res.status(500).json({ success: false, message: 'Error with updating group: ' + err.message });
        }
    }
    async deleteGroup(req, res) {
        try {
            const groupId = req.params.id;
            await this.GroupService.deleteGroup(groupId);
            return res.status(200).json({ success: true, message: 'Group deleted successfully' });
        } catch(err) {
            return res.status(500).json({ success: false, message: 'Error with deleting group: ' + err.message });
        }
    }
    async updateGroupStatus(req, res) {
        try {
            const groupId = req.params.id;
            const { status } = req.body;
            const updatedGroup = await this.GroupService.updateGroupStatus(groupId, status);
            return res.status(200).json({ success: true, data: updatedGroup });
        } catch(err) {
            return res.status(500).json({ success: false, message: 'Error with updating group status: ' + err.message });
        }
    }
    async addMember(req, res) {
        try {
            const groupId = req.params.id;
            const memberData = req.body;
            const updatedGroup = await this.GroupService.addMember(groupId, memberData);
            return res.status(200).json({ success: true, data: updatedGroup });
        } catch(err) {
            return res.status(500).json({ success: false, message: 'Error with adding member: ' + err.message });
        }
    }
    async removeMember(req, res) {
        try {
            const groupId = req.params.id;
            const memberId = req.params.memberId;
            const updatedGroup = await this.GroupService.removeMember(groupId, memberId);
            return res.status(200).json({ success: true, data: updatedGroup });
        } catch(err) {
            return res.status(500).json({ success: false, message: 'Error with removing member: ' + err.message });
        }
    }
}