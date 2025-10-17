import { Router } from "express";
import GroupService from "../../business/services/GroupServicer.js";
import GroupRepository from "../../persistence/repositories/GroupRepository.js";
import GroupController from "../controllers/GroupController.js";

const router = Router();
const GroupRep = new GroupRepository();
const GroupSer = new GroupService(GroupRep);
const GroupContr = new GroupController(GroupSer);

router.post('/create', GroupContr.createGroup.bind(GroupContr));
router.get('/:id', GroupContr.getGroupById.bind(GroupContr));
router.get('/', GroupContr.getAllGroups.bind(GroupContr));
router.put('/:id', GroupContr.updateGroup.bind(GroupContr));
router.delete('/:id', GroupContr.deleteGroup.bind(GroupContr));
router.patch('/:id/status', GroupContr.updateGroupStatus.bind(GroupContr));
router.post('/:id/members', GroupContr.addMember.bind(GroupContr));
router.delete('/:id/members/:memberId', GroupContr.removeMember.bind(GroupContr));

export default router;