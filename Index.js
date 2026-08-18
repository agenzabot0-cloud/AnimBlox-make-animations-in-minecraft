import { world } from "@minecraft/server";

world.beforeEvents.chatSend.subscribe((eventData) => {
    const player = eventData.sender;
    const message = eventData.message;

    // Send a message back to confirm it works
    world.sendMessage(`[AnimBlox System] ${player.name} said: ${message}`);
});
