/**
 * ||========================================================================================================================||
 * ||                                                                                                                        ||
 * ||  ________  _______   ________  _________  ___  ___  ________  ________  ___  ___  ________  ________  ________         ||
 * || |\   ___ \|\  ___ \ |\   __  \|\___   ___\\  \|\  \|\   __  \|\   __  \|\  \|\  \|\   __  \|\   __  \|\   ___  \       ||
 * ||  \ \  \_|\ \ \   __/|\ \  \|\  \|___ \  \_\ \  \\\  \ \  \|\  \ \  \|\  \ \  \\\  \ \  \|\ /\ \  \|\  \ \  \\ \  \     ||
 * ||   \ \  \ \\ \ \  \_|/_\ \   __  \   \ \  \ \ \   __  \ \   __  \ \   _  _\ \  \\\  \ \   __  \ \   __  \ \  \\ \  \    ||
 * ||    \ \  \_\\ \ \  \_|\ \ \  \ \  \   \ \  \ \ \  \ \  \ \  \ \  \ \  \\  \\ \  \\\  \ \  \|\  \ \  \ \  \ \  \\ \  \   ||
 * ||     \ \_______\ \_______\ \__\ \__\   \ \__\ \ \__\ \__\ \__\ \__\ \__\\ _\\ \_______\ \_______\ \__\ \__\ \__\\ \__\  ||
 * ||      \|_______|\|_______|\|__|\|__|    \|__|  \|__|\|__|\|__|\|__|\|__|\|__|\|_______|\|_______|\|__|\|__|\|__| \|__|  ||
 * ||                                                                                                                        ||
 * ||========================================================================================================================||
 * ||                                                                                                                        ||  
 * ||                                               ★ Please do not modify this code ★                                      ||  
 * ||                                   ► This Mod was created for Minecraft Bedrock Edition ◄                               || 
 * ||                                                                                                                        ||
 * ||========================================================================================================================||
 */

/**
* @made_by Death_Aruban
* @version [1.0.3] 
* @link [https://discord.com/invite/NKy9A9RAe8]
*/

export let config = {

    /**
     * Prefix to start Chat Rank+ commands
     * 
     *  prefix:""   | Here you can decide with which symbol you want to start the Chat Rank commands | 
     */

    prefix:"-",

    /**
     * 
     *   _____                    _         _               _____             _    
     *  |  __ \                  (_)       (_)             |  __ \           | |   
     *  | |__) |__ _ __ _ __ ___  _ ___ ___ _  ___  _ __   | |__) |__ _ _ __ | | __
     *  |  ___/ _ \ '__| '_ ` _ \| / __/ __| |/ _ \| '_ \  |  _  // _` | '_ \| |/ /
     *  | |  |  __/ |  | | | | | | \__ \__ \ | (_) | | | | | | \ \ (_| | | | |   < 
     *  |_|   \___|_|  |_| |_| |_|_|___/___/_|\___/|_| |_| |_|  \_\__,_|_| |_|_|\_\
     * 
     * 
     * Here you can configure the rank tags for your world/realm or server exactly as you wish!
     * 
     * admin:{}                              | It indicates which tag is required to have all the changes in chat. For example, here it is ‘admin’, so if it has the ‘admin’ tag, it will start the changes for you. |
     * state:true                            | Indicates the status of the created permission; if it’s false, that rank is deactivated |
     * rank:""                               | Here you will enter the text of how that rank will be seen in chat and list |
     * description:""                        | Here instead you will put the description of the rank that will be visible in the list |
     * command:[""]                          | Here you will enter the commands to which the player has access |
     * level:0,                              | Here you will decide that in case of multiple ranks, which one will have priority on the decorative part that will be done on the message |
     * score:""                              | Here you will enter the scoreboard from which the player’s score will be taken |
     * message:""                            | Here you can decide how to decorate the player’s chat with that rank, also using keywords listed below |
     * 
     * Keywords to be inserted into the message
     * 
     * $player               | Used to indicate the player’s name |
     * $message              | The message that the player writes, so the base one |
     * $rank                 | Server to display the player’s rank in chat |
     * $score_point          | To indicate the player’s scoreboard score in chat, remember to put in the score from which scoreboard the score should be taken |
     * 
     * Command list
     * Here you will decide which commands of the Chat Rank+ addon the player has access to. When they execute ‘rank help’, they will only see the commands they have access to.
     * 
     * add                  | Provides access to the command to add the rank. |
     * remove               | Provides access to the command to remove the rank. |
     * list                 | Provides access to the command to view the rank list. |
     * help                 | Provides access to the command to view available commands. |
     * menu                 | DProvides access to the command for the menu where you have all the rank commands. |
     * log                  | Provides access to the command to view messages sent by players and manage them. |
     * mute                 | Provides access to the command to unmute and mute players. |
     * info                 | Provides access to the command to see addon information |
     * 
     */

    permission:{
        default:{
            state:true,
            rank:"§8[§asteve§8]", 
            description:"Basic server role",
            command:["help","info"],
            score:"", 
            message:"$rank §f$player §8>> §f$message"
        },
        admin:{
            state:true,
            rank:"§8[§dAdmin§8]",
            description:"Has a high level of control over the server, often can change gameplay and has permission to ban or unban players",
            command:["list","help","add","remove","menu","log","mute","info"],
            level:0,
            score:"level",  
            message:"§f[§8Level: §b$score_point§f]$rank §4$player §a>> §2$message"
        },
        mod:{
            state:true,
            rank:"§8[§aMod§8]",
            description:"This role helps maintain order in the server, can ban or unban players, and often answers player questions",
            command:["help","info","list","add","remove","menu","log","mute"],
            score:"", 
            level:1,
            message:"$rank §d$player §d>> §5$message"
        },
        helper:{
            state:true,
            rank:"§8[§dHelper§8]",
            description:"This role is often given to players who are willing to help other players. They usually do not have moderation permissions.",
            command:["help","info","list","mute"],
            score:"", 
            level:2,
            message:"$rank §a$player §8>> §f$message"
        },
        builder:{
            state:true,
            rank:"§8[§8Builder§8]",
            description:"This role is given to players who contribute to building structures in the server.",
            command:["help","info","list"],
            score:"", 
            level:3,
            message:"$rank §f$player §8>> §3$message"
        },
        vip:{
            state:true,
            rank:"§8[§6Vip§8]",
            description:"This is a role often given to donors or long-time players. They might have some special perks.",
            command:["help","info"],
            score:"", 
            level:4,
            message:"$rank §e$player §8>> §6$message"
        }
    },


    /**
     * 
     *                  _          __  __       _       
     *       /\        | |        |  \/  |     | |      
     *      /  \  _   _| |_ ___   | \  / |_   _| |_ ___ 
     *     / /\ \| | | | __/ _ \  | |\/| | | | | __/ _ \
     *    / ____ \ |_| | || (_) | | |  | | |_| | ||  __/
     *   /_/    \_\__,_|\__\___/  |_|  |_|\__,_|\__\___|
     * 
     * Auto mute system serves to provide automatic support to avoid chat spam
     * 
     * state:true                   | Indicates the status of the system to automatically mute players in your world/realm or server |
     * time_spam:200                | Here you can decide the speed at which messages can be sent, the shorter the time, the more messages can be sent |
     * message:""                   | Warning message that the player has been muted because they wrote too much in chat |
     * no_chat:""                   | Warns that they cannot write in chat because they have been muted |
     * unmute:                      | A warning that is sent to the player when they are unmuted. |
     * rank_immune:[""]             | Here you can enter the ranks that are immune to the auto mute control system |
     * 
     */

        auto_mute:{
            state:true,
            time_spam:200,
            message:"§f[§bServer§f] §8>> §cYou've been mutated from too much spam in chat!",
            no_chat:"§f[§bServer§f] §8>> §cYou cannot write because you have been mutated!",
            unmute:`§f[§bServer§f] §8>> §aYou have been unmuted!`,
            rank_immune:["admin","mod"]
        },


    /**
     *   _____        _        _                    
     *  |  __ \      | |      | |                   
     *  | |  | | __ _| |_ __ _| |__   __ _ ___  ___ 
     *  | |  | |/ _` | __/ _` | '_ \ / _` / __|/ _ \
     *  | |__| | (_| | || (_| | |_) | (_| \__ \  __/
     *  |_____/ \__,_|\__\__,_|_.__/ \__,_|___/\___|
     * 
     * Message saving system of the world/realms or server
     * 
     * state:true                       | Indicates the status of the database; if you set it to false, the database will be disabled |
     * Database_name:"ChatSendSave"     | If you want to change the name of the database where the players’ messages are saved |
     * reset_time_state:true            | If the status is set to false, the database will not be cleaned of the existing messages |
     * reset_time:30000000              | Indicates the time at which the database will be reset |
     * reset_message:""                 | Warning message of the database reset only for those who have access to the add, remove, or menu commands | 
     * 
     */

    database:{
        state:true,
        Database_name:"ChatSendSave",
        reset_time_state:true,
        reset_time:30000000,
        reset_message:"§f[§bServer§f] §8>> §cThe messages in the Database have been reset!"
    },

    /**
     *   ____                      _               _   
     *  |  _ \                    | |             | |  
     *  | |_) |_ __ ___   __ _  __| | ___ __ _ ___| |_ 
     *  |  _ <| '__/ _ \ / _` |/ _` |/ __/ _` / __| __|
     *  | |_) | | | (_) | (_| | (_| | (_| (_| \__ \ |_ 
     *  |____/|_|  \___/ \__,_|\__,_|\___\__,_|___/\__|
     * 
     *  This is a general chat broadcast system, in which you can insert personalized messages that will be sent to the players.
     * 
     * state:true                                      | You can decide whether the system should send messages periodically. |
     * message:["text1",text2,"text3"]                 | You can insert the number of messages you want, which will be sent to the players in order. |
     * time:""                                         | You can decide the time interval with which the system will send the messages. |
     * 
     */
    
    broadcast:{
        state:false,
        message:[
            "§f[§dbroadcast§f] §8>> §bNew Add-on released on YouTube ",
            "§f[§dbroadcast§f] §8>> §bTry visiting our YouTube channel",
            "§f[§dbroadcast§f] §8>> §bBest server exists in Minecraft Bedrock",
            "§f[§dbroadcast§f] §8>> §dDiscord code §aNKy9A9RAe8"
        ],
        time:200
    },


    /**
     * 
     *   ____               __          __           _     
     *  |  _ \              \ \        / /          | |    
     *  | |_) | __ _ _ __    \ \  /\  / /__  _ __ __| |___ 
     *  |  _ < / _` | '_ \    \ \/  \/ / _ \| '__/ _` / __|
     *  | |_) | (_| | | | |    \  /\  / (_) | | | (_| \__ \
     *  |____/ \__,_|_| |_|     \/  \/ \___/|_|  \__,_|___/
     * 
     * system to control the words you want to ban in your world/realm/server
     * 
     * state:true              | Indicates the status of the control system for banned words; if it’s on false, it is disabled |
     * time:3                  | Indicates after how many attempts the player is muted if they send one of the banned words |
     * message:""              | Warning to avoid writing banned words |
     * message_mute:""         | Warning that the player has been muted for having exceeded the limit of times said banned words |
     * rank_immune:[""]             | Here you can enter the ranks that are immune to the ban words control system |
     * words:[""]              | Here you insert words that you want to ban in your world/realm or server |
     * 
     */

    ban_words:{
        state:true,
        time:3,
        message:"§f[§bServer§f] §8>> §cThe following word is banned in this server if you keep sending it you will be mutated!",
        message_mute:"§f[§bServer§f] §8>> §cYou have been mutated for sending too many forbidden words.",
        rank_immune:["admin","mod"],
        words:[
            "idiot"
        ]
    }
}


