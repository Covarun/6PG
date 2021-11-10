import EventHandler from './event-handler';
import { Guild, TextChannel } from 'discord.js';

export default class GuildCreateHandler implements EventHandler {
    on = 'guildCreate';

    invoke(guild: Guild | null): Promise<any> {
        return this.sendWelcomeMessage(guild?.systemChannel);
    }

    private sendWelcomeMessage(channel: TextChannel | null) {
        return channel?.send(`Hi im a bot made by Sta5 discord bot maker dashboard! Get on one here :) https://sta5.herokuapp.com`);
    }    
}
