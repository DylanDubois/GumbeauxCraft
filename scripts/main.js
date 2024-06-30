import { world, ItemStack, system } from "@minecraft/server";

// Event handler for when the world initializes
world.beforeEvents.worldInitialize.subscribe((eventData) => {
  world.sendMessage("Diamond Sword Giver pack loaded!");
});

// Event handler for before a chat message is sent
world.beforeEvents.chatSend.subscribe((eventData) => {
  if (eventData.message === "T") {
    const player = eventData.sender;
    const inventory = player.getComponent("minecraft:inventory");
    const container = inventory.container;

    const diamondSword = new ItemStack("minecraft:diamond_sword", 1);
    container.addItem(diamondSword);
    player.sendMessage("You received a diamond sword!");
    eventData.canceled = true;
  }
});

// Start the system to ensure the script keeps running
system.run(() => {});
