const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
//info needed for slash commands
const botID = "1205891518456537098"
const serverID = "1191023433933394051"
const botToken = process.env.token

const rest = new REST({ version: '9' }).setToken(botToken);
const slashRegister = async () => {
  try {
    await rest.put(Routes.applicationGuildCommands(botID), {
      body: [
        {
          name: "ping",
          description: "Just a simple ping pong command"
        }
      ]
    })
  } catch (error) {
    console.error(error)
  }
}
slashRegister();