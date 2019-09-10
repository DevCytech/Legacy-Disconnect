# Permissions

| Permission                | Value        | Description                                                                                                                        | Channel Type | 2FA  |
| ------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---- |
| **CREATE_INSTANT_INVITE** | `0x00000001` | Allows creation of instant invites                                                                                                 | Text / Voice |      |
| **KICK_MEMBERS**          | `0x00000002` | Allows kicking members                                                                                                             |              | true |
| **BAN_MEMBERS**           | `0x00000004` | Allows banning members                                                                                                             |              | true |
| **ADMINISTRATOR**         | `0x00000008` | Allows all permissions and bypasses channel permission overwrites                                                                  |              | true |
| **MANAGE_CHANNELS**       | `0x00000010` | Allows management and editing of channels                                                                                          | Text / Voice | true |
| **MANAGE_GUILD**          | `0x00000020` | Allows management and editing of the guild                                                                                         |              | true |
| **ADD_REACTIONS**         | `0x00000040` | Allows for the addition of reactions to messages                                                                                   | Text         |      |
| **VIEW_AUDIT_LOG**        | `0x00000080` | Allows for viewing of audit logs                                                                                                   |              |      |
| **VIEW_CHANNEL**          | `0x00000400` | Allows guild members to view a channel, which includes reading messages in text channels                                           | Text / Voice |      |
| **SEND_MESSAGES**         | `0x00000800` | Allows for sending messages in a channel                                                                                           | Text         |      |
| **SEND_TTS_MESSAGES**     | `0x00001000` | Allows for sending of `/tts` messages                                                                                              | Text         |      |
| **MANAGE_MESSAGES**       | `0x00002000` | Allows for deletion of other users messages                                                                                        | Text         | true |
| **EMBED_LINKS**           | `0x00004000` | Links sent by users with this permission will be auto-embedded                                                                     | Text         |      |
| **ATTACH_FILES**          | `0x00008000` | Allows for uploading images and files                                                                                              | Text         |      |
| **READ_MESSAGE_HISTORY**  | `0x00010000` | Allows for reading of message history                                                                                              | Text         |      |
| **MENTION_EVERYONE**      | `0x00020000` | Allows for using the `@everyone` tag to notify all users in a channel, and the `@here` tag to notify all online users in a channel | Text         |      |
| **USE_EXTERNAL_EMOJIS**   | `0x00040000` | Allows the usage of custom emojis from other servers                                                                               | Text         |      |
| **CONNECT**               | `0x00100000` | Allows for joining of a voice channel                                                                                              | Voice        |      |
| **SPEAK**                 | `0x00200000` | Allows for speaking in a voice channel                                                                                             | Voice        |      |
| **MUTE_MEMBERS**          | `0x00400000` | Allows for muting members in a voice channel                                                                                       | Voice        |      |
| **DEAFEN_MEMBERS**        | `0x00800000` | Allows for deafening of members in a voice channel                                                                                 | Voice        |      |
| **MOVE_MEMBERS**          | `0x01000000` | Allows for moving of members between voice channels                                                                                | Voice        |      |
| **USE_VAD**               | `0x02000000` | Allows for using voice-activity-detection in a voice channel                                                                       | Voice        |      |
| **PRIORITY_SPEAKER**      | `0x00000100` | Allows for using priority speaker in a voice channel                                                                               | Voice        |      |
| **STREAM**                | `0x00000200` | Allows the user to go live                                                                                                         | Voice        |      |
| **CHANGE_NICKNAME**       | `0x04000000` | Allows for modification of own nickname                                                                                            |              |      |
| **MANAGE_NICKNAMES**      | `0x08000000` | Allows for modification of other users nicknames                                                                                   |              |      |
| **MANAGE_ROLES**          | `0x10000000` | Allows management and editing of roles                                                                                             | Text / Voice | true |
| **MANAGE_WEBHOOKS**       | `0x20000000` | Allows management and editing of webhooks                                                                                          | Text / Voice | true |
| **MANAGE_EMOJIS**         | `0x40000000` | Allows management and editing of emojis                                                                                            |              | true |

- `2FA = true`, means that the owner to have two-factor authentication when used on a guild that has server-wide 2FA enabled.
- Note that these internal permission names may be referred to differently by the Discord client. For example, "Manage Permissions" refers to `MANAGE_ROLES`, "Read Messages" refers to `VIEW_CHANNEL`, and "Use Voice Activity" refers to `USE_VAD`
