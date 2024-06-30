import * as mc from "@minecraft/server";

mc.world.afterEvents.chatSend.subscribe((event) => {
  const player = event.sender;
  player.sendMessage("Hello! The script is working!");
});
