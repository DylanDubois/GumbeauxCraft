import { world, ItemStack } from "@minecraft/server";

// Ensure the world and events are properly defined
if (world && world.events && world.events.beforeChat) {
  world.events.beforeChat.subscribe((eventData) => {
    if (eventData.message === "T") {
      const player = eventData.sender;
      const inventory = player.getComponent("minecraft:inventory");
      const container = inventory.container;

      const diamondSword = new ItemStack("minecraft:diamond_sword", 1);
      container.addItem(diamondSword);
      player.sendMessage("You received a diamond sword!");
      eventData.cancel = true;
    }
  });
}

if (world && world.events && world.events.worldInitialize) {
  world.events.worldInitialize.subscribe(() => {
    world.sendMessage("Diamond Sword Giver pack loaded!");
  });
} else {
  console.log("worldInitialize event not available");
}
