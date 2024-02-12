exports.run = (client, message, args) => {
  let toSay = args.join(" ")
  if(!toSay) return message.channel.send({content: "say something nerd"})
  message.channel.send({content: toSay})
}

exports.name = "say"