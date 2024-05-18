var roleClaimer = {
  run: function (creep) {
    // 检查 creep 是否具有目标房间和目标控制器
    if (!creep.memory.targetRoom || !creep.memory.targetControllerId) {
      console.log(
        `Claimer ${creep.name} is missing target room or target controller ID!`
      );
      return;
    }

    // 获取目标控制器对象
    const controller = Game.getObjectById(creep.memory.targetControllerId);
    if (!controller) {
      console.log(
        `Claimer ${creep.name} cannot find target controller ${creep.memory.targetControllerId}`
      );
      return;
    }

    // 移动到目标控制器
    const moveResult = creep.moveTo(controller);
    if (moveResult === OK) {
      console.log(
        `Claimer ${creep.name} is moving to controller in room ${creep.memory.targetRoom}`
      );
    } else if (moveResult === ERR_NOT_IN_RANGE) {
      console.log(
        `Claimer ${creep.name} cannot move to controller in room ${creep.memory.targetRoom}: not in range`
      );
    } else {
      console.log(
        `Claimer ${creep.name} encountered an error while moving to controller in room ${creep.memory.targetRoom}: ${moveResult}`
      );
    }

    // 执行 claim 操作
    const claimResult = creep.claimController(controller);
    if (claimResult === OK) {
      console.log(
        `Claimer ${creep.name} successfully claimed controller in room ${creep.memory.targetRoom}`
      );
    } else if (claimResult === ERR_NOT_IN_RANGE) {
      console.log(
        `Claimer ${creep.name} cannot claim controller in room ${creep.memory.targetRoom}: not in range`
      );
    } else {
      console.log(
        `Claimer ${creep.name} encountered an error while claiming controller in room ${creep.memory.targetRoom}: ${claimResult}`
      );
    }
  },
};

module.exports = roleClaimer;
