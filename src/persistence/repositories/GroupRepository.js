import mongoose from "mongoose";
import Group from "../../business/Entities/Group.js";
import GroupModel from "../Models/GroupModel.js";



export default class GroupRepository {
    async createGroup(Group) {
        const group = new GroupModel(Group.toJSON());
        await group.save()
        return group
    }

}