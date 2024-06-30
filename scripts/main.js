import { world, system, ItemStack } from "@minecraft/server";

// Function to run when the world loads
function onWorldLoad() {
  world.sendMessage("Diamond Sword Giver pack loaded!");
}

// Run the onWorldLoad function after a short delay to ensure the world is fully loaded
system.runTimeout(onWorldLoad, 20);

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
