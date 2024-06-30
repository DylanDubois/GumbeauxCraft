import { world, system } from "@minecraft/server";

system.runInterval(() => {
  world.sendMessage("The script is running!");
}, 200);

world.afterEvents.chatSend.subscribe((event) => {
  const player = event.sender;
  player.sendMessage("Hello! I received your chat message!");
});
