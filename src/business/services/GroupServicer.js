import GroupRepository from "../../persistence/repositories/GroupRepository.js"
import Group from "../Entities/Group";


export default class GroupService
{
    constructor()
    {
        this.GroupRepository = new GroupRepository();
    }

    async createGroup(Group)
    {
        try
        {
            const CreateGroup = await this.GroupRepository.CreateGroup(Group);
            return
        }catch(err)
        {
            throw new Error("error with Create Group Function" + err);
        }
    }
}