# Events

## Main Events

| Event     | Description                    | Parameters |
| --------- | ------------------------------ | ---------- |
| `ready`   | When the bot is Ready          |
| `error`   | When the bot runs into a error |
| `message` | When a message is send         |

## Bot Events

| Event         | Description                  | Parameters |
| ------------- | ---------------------------- | ---------- |
| `guildCreate` | When the bot joins a server  | guild      |
| `guildDelete` | When the bot leaves a server | guild      |

## User Events

| Event               | Description                     | Parameters           |
| ------------------- | ------------------------------- | -------------------- |
| `guildMemberAdd`    | When a user joins a server      | member               |
| `guildMemberRemove` | When a user leaves a server     | member               |
| `guildMemberUpdate` | When a change happens to a user | oldMember, newMember |

## Guild Events

| Event                      | Description                        | Parameters             |
| -------------------------- | ---------------------------------- | ---------------------- |
|                            | **Guild Changes**                  |
| `guildUpdate`              | When a guild setting is changed    | oldGuild, newGuild     |
|                            | **Channel Changes**                |
| `channelCreate`            | When a new channel is created      | channel                |
| `channelDelete`            | When a channel is deleted          | channel                |
| `channelPinsUpdate`        | When a channels pins are updated   | channel, time          |
| `channelUpdate`            | When a channel is edited/changed   | oldChannel, newChannel |
|                            | **Emoji Changes**                  |
| `emojiCreate`              | When a new emoji is created        | emoji                  |
| `emojiDelete`              | When a emoji is deleted            | emoji                  |
| `emojiUpdate`              | When a emoji is changed            | oldEmoji, newEmoji     |
|                            | **Bans Changes**                   |
| `guildBanAdd`              | When a user is banned              | guild, user            |
| `guildBanRemove`           | When a user is unbanned            | guild, user            |
|                            | **Message Changes**                |
| `messageUpdate`            | When a message gets changed        | oldMessage, newMessage |
| `messageDelete`            | When a message is deleted          | message                |
| `messageDeleteBulk`        | When a bulk of messages is delete  | messages               |
| `messageReactionAdd`       | When a message reaction is added   | messageReaction, user  |
| `messageReactionRemove`    | When a message reaction is removed | messageReaction, user  |
| `messageReactionRemoveAll` | When message reactions are cleared | message                |
|                            | **Role Changes**                   |
| `roleCreate`               | When a role is created             | role                   |
| `roleDelete`               | When a role is deleted             | role                   |
| `roleUpdate`               | When a role is updated             | oldRole, newRole       |

## Other Events

| Event              | Description                                     | Parameters           |
| ------------------ | ----------------------------------------------- | -------------------- |
| `debug`            | For General debugging information               | info                 |
| `warn`             | For general Warnings                            | info                 |
|                    | **Music / Audio**                               |
| `disconnect`       | When the bot disconnects and doesn't join back  | event                |
| `reconnecting`     | When the bot is reconnecting to a voice channel |
| `resume`           | When the audio resumes                          | replayed             |
|                    | **Unavailability**                              |
| `guildUnavailable` | When a guild becomes Unavailable                | guild                |
|                    | **Voice Updates**                               |
| `voiceStateUpdate` | When a user's voice status changes              | oldMember, newMember |
