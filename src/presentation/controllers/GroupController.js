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
        } catch(err) {
            return res.status(500).json({ success: false, message: 'Error with creating group: ' + err.message });
        }
    }
}