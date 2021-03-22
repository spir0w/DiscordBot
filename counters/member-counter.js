module.exports = async (client) => {
    const guild = client.guilds.cache.get('738495745656881172');
    setInterval (() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('806273474674425886')
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`)
        console.log('Updating Member Count');
    },5000);
}