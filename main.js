import { world, ItemStack } from "@minecraft/server";

world.events.beforeChat.subscribe((eventData) => {
  if (eventData.message === "T") {
    const players = world.getAllPlayers();
    for (const player of players) {
      const diamondSword = new ItemStack("minecraft:diamond_sword", 1);
      player.getInventory().addItem(diamondSword);
      player.sendMessage("You received a diamond sword!");
    }
    eventData.cancel = true;
  }
});
