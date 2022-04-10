const Discord = require('discord.js')

module.exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('6d6ee8')
    .setTitle('Olá, sou o bot da Impacta!')
    .setThumbnail(`${client.user.avatarURL({ format: 'png' })}`)
    .setDescription(`Precisa de ajuda? Você pode visualizar meus comandos utilizando ${process.env.PREFIX}comandos`)
    .setTimestamp();

    return message.reply({ embeds: [embed]})
}

module.exports.help = {
    name: "ajuda",
    roles: [],
    log: false
};