import { world, ItemStack } from "@minecraft/server";

world.events.beforeChat.subscribe((eventData) => {
  if (eventData.message === "T") {
    const player = eventData.sender;
    const diamondSword = new ItemStack("minecraft:diamond_sword", 1);
    player.getComponent("inventory").container.addItem(diamondSword);
    player.sendMessage("You received a diamond sword!");
    eventData.cancel = true;
  }
});

world.events.worldInitialize.subscribe(() => {
  world.sendMessage("Diamond Sword Giver pack loaded!");
});
