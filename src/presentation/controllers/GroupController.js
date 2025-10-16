import GroupService from "../../business/services/GroupServicer.js"
import Group from "../../business/Entities/Group.js"

export default class GroupController {
    constructor(GroupService) {
        this.GroupService = GroupService
    }
    async createUser(req, res)
    {
        const group = new Group(req.body);
        const createGroup = await this.GroupService.createGroup(Group);
        
    }
}