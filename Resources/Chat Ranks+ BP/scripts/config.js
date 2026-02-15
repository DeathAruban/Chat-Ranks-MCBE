export let config = {
    /**
     * Permission Ranks Configuration.
     *
     * This section allows you to define and customize rank tags for your world/realm or server.
     * Each rank object specifies how players with a particular tag will appear in chat,
     * which commands they can use, and their display priority.
     *
     * @type {object}
     *
     * @property {object} default - The default rank applied to players without any specific tags.
     * @property {boolean} default.state - Indicates if the default rank is active (true) or inactive (false).
     * @property {string} default.rank - The display text for the default rank (e.g., "§8[§asteve§8]"). Color codes are supported.
     * @property {string} default.description - A brief description of the default rank, shown in the rank list.
     * @property {string[]} default.command - An array of Chat Rank+ command names accessible to players with this rank.
     * @property {string} default.score - The name of the scoreboard objective to retrieve the player's score from (optional).
     * @property {string} default.message - The chat formatting template. Use keywords for dynamic content.
     *
     * @property {object} [rankName] - Configuration for a custom rank (e.g., admin, mod, vip). Replace `[rankName]` with the desired rank identifier.
     * @property {boolean} [rankName].state - Indicates if the rank is active (true) or inactive (false).
     * @property {string} [rankName].rank - The display text for the rank.
     * @property {string} [rankName].description - Description of the rank.
     * @property {string[]} [rankName].command - Array of Chat Rank+ commands available to this rank.
     * @property {number} [rankName].level - Priority level (lower number = higher priority) for display when a player has multiple ranks. Used for message formatting priority.
     * @property {string} [rankName].score - Scoreboard objective name for score display (optional).
     * @property {string} [rankName].message - Chat formatting template for this rank.
     *
     * @keywords (Usable within the `message` template)
     * $player       - Replaced with the player's name.
     * $message      - Replaced with the player's raw chat message.
     * $rank         - Replaced with the player's rank display text (based on `level` priority).
     * $score_point  - Replaced with the player's score from the specified `score` objective.
     * $rainbow      - Applies a rainbow color effect to the following text (until §r is encountered).
     *
     * @commandList (Available for the `command` array)
     * add           - Allows access to the rank adding command (`prefix`rank add).
     * remove        - Allows access to the rank removal command (`prefix`rank remove).
     * list          - Allows access to the rank listing command (`prefix`rank list).
     * help          - Allows access to the help command (`prefix`rank help).
     * menu          - Allows access to the rank management UI menu (`prefix`rank menu).
     * log           - Allows access to the chat log viewing/management command (`prefix`rank log).
     * mute          - Allows access to the player muting/unmuting command (`prefix`rank mute).
     * info          - Allows access to the add-on information command (`prefix`rank info).
     * name          - Allows access to the player name customization command (related to belowname).
     */

    permission: {
        default: {
            state: true,
            rank: "§8[§asteve§8]",
            description: "Basic server role",
            command: ["help", "info","msg"],
            score: "",
            message: "$rank §f$player §8>> §f$message"
        },
        admin: {
            state: true,
            rank: "§8[§dAdmin§8]",
            description: "Has a high level of control over the server, often can change gameplay and has permission to ban or unban players",
            command: ["list", "help", "add", "remove", "menu", "log", "mute", "info", "name","msg"],
            score: "kills", // Example scoreboard objective named "level"
            level: 0, // Highest priority for display
            message: "§f[§8Kills: §b$score_point§f]$rank $rainbow§4$player§r §a>> §2$message"
        },
        mod: {
            state: true,
            rank: "§8[§aMod§8]",
            description: "This role helps maintain order in the server, can ban or unban players, and often answers player questions",
            command: ["help", "info", "list", "add", "remove", "menu", "log", "mute","msg"],
            score: "",
            level: 1,
            message: "$rank §d$player §d>> §5$message" 
        },
        helper: {
            state: true,
            rank: "§8[§dHelper§8]",
            description: "This role is often given to players who are willing to help other players. They usually do not have moderation permissions.",
            command: ["help", "info", "list", "mute","msg"],
            score: "",
            level: 2,
            message: "$rank §a$player §8>> §f$message"
        },
        builder: {
            state: true,
            rank: "§8[§8Builder§8]",
            description: "This role is given to players who contribute to building structures in the server.",
            command: ["help", "info", "list"],
            score: "",
            level: 3,
            message: "$rank §f$player §8>> §3$message"
        },
        vip: {
            state: true,
            rank: "§8[§6Vip§8]",
            description: "This is a role often given to donors or long-time players. They might have some special perks.",
            command: ["help", "info"],
            score: "",
            level: 4, // Lowest priority for display among these examples
            message: "$rank §e$player §8>> §6$message"
        }
    },

    /**
     * Auto-Mute System Configuration.
     *
     * This system automatically mutes players who send messages too quickly, helping to prevent chat spam.
     *
     * @type {object}
     * @property {boolean} state - Enables (true) or disables (false) the auto-mute system.
     * @property {number} time_spam - The minimum time (in ticks, 20 ticks = 1 second) that must pass between messages from a player to avoid being muted. Lower values allow for faster messaging.
     * @property {string[]} rank_immune - An array of rank tags (defined in `permission`) that are exempt from auto-mute. Players with these tags will not be muted for spam.
     *
     * @example
     * auto_mute: {
     * state: true,
     * time_spam: 100, // Mute if messages are sent faster than every 5 seconds (100 ticks)
     * rank_immune: ["admin", "mod"]
     * }
     */

    auto_mute: {
        state: true,
        time_spam: 200, // Default: 10 seconds
        rank_immune: ["admin", "mod"]
    },

    /**
     * Chat Logging Database Configuration.
     *
     * These settings control the storage and management of chat logs within the server's variables.
     * Note: This uses world dynamic properties, which have storage limits. Very high traffic servers might exceed limits.
     *
     * @type {object}
     * @property {boolean} state - Enables (true) or disables (false) the chat logging database. If false, no messages will be saved.
     * @property {boolean} reset_time_state - If `state` is true, this determines whether the database is automatically cleared periodically (true) or if logs persist (false) until manually cleared or storage limits are hit.
     * @property {number} max_message - The maximum number of messages to store *per player*. Older messages for that player are removed when this limit is reached.
     * @property {number} reset_time - The time interval (in ticks, 20 ticks = 1 second) at which the entire database is cleared (if `reset_time_state` is true). 12096000 ticks = 7 days.
     *
     * @example
     * database: {
     * state: true,
     * reset_time_state: false, // Keep logs indefinitely (or until limits)
     * max_message: 500,      // Store up to 500 messages per player
     * reset_time: 12096000   // This value is ignored if reset_time_state is false
     * }
     */

    database: {
        state: true,
        reset_time_state: true,
        max_message: 200,
        reset_time: 12096000 // 7 days
    },

    /**
     * Broadcast Message System Configuration.
     *
     * This system periodically sends automated messages to all players in the world/realm/server.
     *
     * @type {object}
     * @property {boolean} state - Enables (true) or disables (false) the broadcast system.
     * @property {string} prefix - The prefix to display before each broadcast message (e.g., "§f[§aserver§f] §e>> "). Color codes are supported.
     * @property {string[]} message - An array of messages to broadcast. Messages are sent sequentially, looping back to the start after the last message.
     * @property {number} time - The time interval (in ticks, 20 ticks = 1 second) between sending each broadcast message.
     *
     * @example
     * broadcast: {
     * state: true,
     * prefix: "§f[§bINFO§f] §7>> ",
     * message: ["Welcome to the server!", "Remember to read the /rules", "Visit our website example.com"],
     * time: 6000 // Send a message every 5 minutes (6000 ticks)
     * }
     */

    broadcast: {
        state: false, // Disabled by default
        prefix: "§f[§dbroadcast§f] §8>>",
        message: [
            "§bNew Add-on released on YouTube ",
            "§bTry visiting our YouTube channel",
            "§bBest server exists in Minecraft Bedrock",
            "§dDiscord code §aNKy9A9RAe8"
        ],
        time: 200 // Default: 10 seconds (quite fast)
    },

    /**
     * Banned Words Filter Configuration.
     *
     * This system filters chat messages for specified words and automatically mutes players who repeatedly use them.
     * Word matching is case-insensitive.
     *
     * @type {object}
     * @property {boolean} state - Enables (true) or disables (false) the banned word filter.
     * @property {number} time - The number of times a player can send a message containing *any* banned word before being automatically muted. The count resets after a period of not sending banned words.
     * @property {string[]} rank_immune - An array of rank tags (defined in `permission`) that are exempt from the banned word filter. Players with these tags will not be warned or muted.
     * @property {string[]} words - An array of words (or phrases) that are considered banned. Avoid adding very short or common words that might appear within legitimate words.
     *
     * @example
     * ban_words: {
     * state: true,
     * time: 3, // Mute after the 3rd offense
     * rank_immune: ["admin", "mod"],
     * words: ["badword1", "another bad phrase", "spamword"]
     * }
     */

    ban_words: {
        state: true,
        time: 3,
        rank_immune: ["admin", "mod"],
        words: [
            "test", // Example, likely too common
            "test1" // Example
        ]
    },

    /**
     * Time Zone Configuration.
     *
     * Sets the UTC offset for accurate timestamps in chat logs (`/rank log`) and potentially other time-sensitive features.
     * Format should be "UTC±H" or "UTC±HH:MM".
     *
     * @type {string}
     * @default "UTC+0"
     * @example time_zone: "UTC-5"  // Eastern Time (US, standard time)
     * @example time_zone: "UTC+1"  // Central European Time
     * @example time_zone: "UTC+5:30" // Indian Standard Time
     */

    time_zone: "UTC+2", // Example: Central European Summer Time

    /**
     * Proximity Chat Configuration.
     *
     * Enables a chat mode where messages are only visible to players within a certain radius of the sender.
     * Global chat can typically still be accessed using a designated prefix (often '!', but check addon specifics).
     *
     * @type {object}
     * @property {boolean} state - Enables (true) or disables (false) proximity chat as the default chat mode.
     * @property {number} range - The radius (in blocks) from the sender within which messages are visible to other players.
     *
     * @example
     * proximity_chat: {
     * state: true, // Proximity chat is the default
     * range: 50   // Messages are heard within 50 blocks
     * }
     */

    proximity_chat: {
        state: false,
        range: 10 // Default: 10 blocks (very short range)
    },

    /**
     * Below-Name Display Customization.
     *
     * Allows customization of the text displayed floating above a player's head (nametag).
     *
     * @type {object}
     * @property {boolean} state - Enables (true) or disables (false) the custom below-name display feature. If false, default nametags are used.
     * @property {string} text - The template string for the below-name text. Use keywords for dynamic content. Use '\n' for line breaks.
     *
     * @keywords (Usable within the `text` template)
     * $multirank    - Displays all of the player's assigned rank texts (from `permission`), separated by a default character (often ', ').
     * $player       - Displays the player's name.
     * $life         - Displays the player's current health points numerically.
     * $message      - Displays the player's last sent chat message (may be truncated). Note: This can be visually spammy.
     * $rank         - Displays the player's primary rank text (determined by the lowest `level` in `permission`).
     *
     * @example
     * belowname: {
     * state: true,
     * text: "$rank\n$player §c♥$life" // Shows primary rank, then name and health on the next line
     * }
     */

    belowname: {
        state: true,
        text: "$multirank\n$player\n§c♥$life \n$message ", // Original complex example
    },

    /**
     * Chat Rank+ Add-on Version (Internal Use - Do Not Modify).
     *
     * This property stores the current version of the Chat Rank+ add-on being used.
     * It is used internally and should not be manually changed by the user.
     *
     * @type {string}
     * @readonly
     */

    message_private:{
        state:true,
        rank_immune:["admin", "mod"],
        rank_see:["admin", "mod"]
    },

    chat_rank_version: "1.1.7", // Leave this untouched
};