<p align="center">
     <a href="https://github.com/DeathAruban/Chat-Ranks-MCBE">
		<img src="https://github.com/DeathAruban/Chat-Ranks-MCBE/blob/main/img/chat_ranks+.png" loading="eager" />
	</a><br>
	<b>A highly customisable, Addon Chat Ranks+ for Minecraft: Bedrock Edition written in javascript MC (API 1.20.80)</b>
<p align="center">
	<a href="https://github.com/DeathAruban/Chat-Ranks-MCBE/releases/latest"><img alt="GitHub release (latest SemVer)" src="https://img.shields.io/github/v/release/DeathAruban/Chat-Ranks-MCBE?label=release&sort=semver"></a>
	<a href="https://github.com/DeathAruban/Chat-Ranks-MCBE/releases/latest"><img alt="GitHub release (latest by SemVer)" src="https://img.shields.io/github/downloads/DeathAruban/Chat-Ranks-MCBEE/latest/total?sort=semver"></a>
<img alt="PingPong status" src="https://img.shields.io/pingpong/status/sp_7b7ce509b36c47ee9b20d041d018dc0a">
<br>
<a href="https://discord.gg/NKy9A9RAe8"><img src="https://img.shields.io/discord/935017716350320670?label=discord&color=7289DA&logo=discord" alt="Discord" /></a>
<a href="https://github.com//DeathAruban/Chat-Ranks-MCBE/releases"><img alt="GitHub all releases" src="https://img.shields.io/github/downloads/DeathAruban/Chat-Ranks-MCBE/total?label=downloads%40total"></a>
<img alt="YouTube Video Views" src="https://img.shields.io/youtube/views/axPOtFdQQwc?style=social">
<img alt="GitHub" src="https://img.shields.io/github/license/DeathAruban/Chat-Ranks-MCBE">
</p>


# Description
With this addon, you will have the opportunity to radically transform your world, realm, or dedicated server. This extraordinary tool will allow you to assign a distinctive rank to your members, giving a sense of belonging and recognition. Moreover, you will have the possibility to customize the chat in a myriad of ways, making it a unique place for interaction and communication. You can decorate it with vibrant colors, fun emoticons, artistic fonts, and much more. The only limit to what you can do is your imagination. Make the most of this addon and take your virtual world to a completely new level!

## Language support 🌍
- English (United States)
- English (United Kingdom)
- if you find errors or your language is missing, send me a message, if you provide me with a correct translation I will add credits for support 🤝

| Supported | World | Realms |Server Dedicated | Custom servers | Windows | Mobile | PS4/PS5 | Xbox | Nintendo Switch |
| ------- | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| 1.20.80   |:white_check_mark: | :white_check_mark: | :white_check_mark: | :x: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| previous versions   | :x:  | :x: | :x: | :x: | :x: | :x: | :x: | :x: | :x: | :x: | 

# How does it work
## To use this component, you will need to activate the experimental mode of your world, to ensure that the addon works.
<p align="center"><img src="https://github.com/DeathAruban/Chat-Ranks-MCBE/blob/main/img/experimental.png" loading="eager" /></p>
Inside the world you will have 4 commands available

- -rank help   (to see all commands available for rank)
- -rank list   (opens a form in which you can see the list of permissions, to add more modify the scripts file config)
- -rank add    (opens a form in which you can add permission to a player)
- -rank remove   (opens a form in which you can remove permission to a player)

obviously to use the commands you must have admin permissions
then you will need to add the tag
```json5
tag @s add admin
```
```json5
tag @s add mod
```
obviously these are the ones present in the config file that you find in script, which you can modify as you wish
```json5
access_command:["admin","mod"],
```
with the -rank help command you will find the list of all available commands.
<p align="center"><img src="https://github.com/DeathAruban/Chat-Ranks-MCBE/blob/main/img/help.png" loading="eager" /></p>
with the -rank list command you will find a list of ranks available in your world
<p align="center"><img src="https://github.com/DeathAruban/Chat-Ranks-MCBE/blob/main/img/list.png" loading="eager" /></p>
with the -rank add command a UI will appear in which you first select the player and then the rank you want to add
<p align="center"><img src="https://github.com/DeathAruban/Chat-Ranks-MCBE/blob/main/img/add.png" loading="eager" /></p>
with the -rank remove command a UI will appear in which you first select the player and then the rank you want to remove from the player
<p align="center"><img src="https://github.com/DeathAruban/Chat-Ranks-MCBE/blob/main/img/add.png" loading="eager" /></p>

## Configuration
Inside the addon, in the ‘scripts’ folder, you will find a file named ‘config’. There you will already find a preconfigured list of ranks, which you can modify to your liking, adding or removing the existing ones.
```json5
        2:{
            tag:'admin', 
            chat_display:'§8[§dAdmin§8]',
            chat_display_after:'§a>>', 
            chat_color:'§2', 
            name_player_color:'§4', 
            description:'Has a high level of control over the server, often can change gameplay and has permission to ban or unban players'
        },
```
for example if the player has an admin in chat he will have those possibilities listed above

- tag:' '  the tag that the player must have to have changes in chat
- chat_display:' ' as you will see the first part of the player role chat
- chat_display_after:' ' what will be after the player's name
- chat_color:' ' the color of the message the player sends 
- name_player_color:' ' color of the player's name that will be seen in chat
- description: ' ' the tag description you will see with the -rank list command

example of how it looks in chat:
<p align="center"><img src="https://github.com/DeathAruban/Chat-Ranks-MCBE/blob/main/img/chat.png" loading="eager" /></p>
Instead, in the case of a common player, therefore without rank, you have two possibilities: to show the chat in a standard or modified way. You just need to set ‘true’ or ‘false’ on ‘default’ in ‘config’.

```json5
        1:{
            default:true, here
            chat_display:'§8[§asteve§8]',
            chat_display_after:'§8>>',
            name_player_color:'§f',
            chat_color:'§f'
        },
```

example of how it looks in chat:
<p align="center"><img src="https://github.com/DeathAruban/Chat-Ranks-MCBE/blob/main/img/base.png" loading="eager" /></p>

# How to install

## 🖥️ Computer

📁.mcaddon version
- Download the chat_rank+.mcaddon version
- click on it to open and it will automatically insert it into the game
- 
📦.zip version
- go to 
 ```bash
%userprofile%\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\
```
- pull the texture into the resources folder instead the behavior into the behaviors folder

## 📱 Mobile

📁.mcaddon version
- Download the chat_rank+.mcaddon version
- click on it to open and it will automatically insert it into the game

📦.zip version
- download or use an application to manage files in the phone, I recommend this [RS Gestore File - Explorer EX](https://play.google.com/store/apps/details?id=com.rs.explorer.filemanager&hl=it&gl=US)
- (ANDROID & AMAZON FIRE OS) go to 
 ```bash
/Android/data/com.mojang.minecraftpe/files/games/com.mojang/
```

- (APPLE IOS ) go to

 ```bash
/On My iPhone/Minecraft/games/com.mojang/
```

- pull the texture into the resources folder instead the behavior into the behaviors folder

## 🕹️ Console (PS4/PS5/Switch/Xbox and other)

📦.zip version
- create dedicated bedrock realm or server
- pull the texture into the resources folder instead the behavior into the behaviors folder (Realm or Server)
- enter the realm or the server and you will find your component,remember to enable the settings necessary for operation listed before
- ⛔you can't put it directly in the console, the manufacturer things don't allow to import external files, it is possible only in case you have made a modification of your console

## For more info visit my discord or watch the video guide on my channel
- ✉️ Discord Link : [Click](https://discord.gg/NKy9A9RAe8)
- 💻 Youtube Link :[Click](https://www.youtube.com/watch?v=axPOtFdQQwc&ab_channel=Death_Aruban%E2%84%A2)

## Thank you for choosing this component and to appreciate how it works 😄

