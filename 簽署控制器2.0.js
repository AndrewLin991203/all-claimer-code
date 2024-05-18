const claimer = Game.creeps["claimer1"];
claimer.memory.targetRoom = "E28S57";
claimer.memory.targetControllerId = "5bbcae9e9099fc012e639526";
const message = "i claimed it!";
claimer.signController(
  Game.getObjectById(claimer.memory.targetControllerId),
  message
);
