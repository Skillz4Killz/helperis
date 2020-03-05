# Helperis

A module that will help you have access to easy to use functions to help make developing bots with the Eris library a lot easier.

Eris is a library that avoids holding hands and optimizes the performance for bot developers. This can come at the slight cost of ease of use. This is where Helperis comes in to play by giving you easy to use functions.

## Embeds

One key feature that is really useful for bots is sending embeds. Eris by itself makes this work through a plain old JS object. Helperis provides helper methods to help make this easier and also adds only some sanity checks to make sure your embed meets all the character limits.

```ts
const { MessageEmbed } = require('helperis')

const embed = new MessageEmbed()
	.setAuthor('Name Here', 'Icon URL Here Optional', 'Url Link here Optional')
	.setColor('#Hexcolor or RANDOM')
	.setDescription('The description you want here.')
	// Adds an inline field(columns)
	.addField('The name of the field', 'The value of the field', true)
	// Adds an field that is NOT inline. (You can skip the `false`)
	.addField('Total Members', guild.members.size.toString())
	// Adds a blank field that is inline
	.addBlankField(true)
	// Adds a blank field that is NOT inline. (You can skip the `false`)
	.addBlankField()
	// Attach a field
	.attachFile(buffer, 'filename.png')
	.setFooter('The text in the footer', 'Icon URL Here Optional')
	// This will overwrite the attachFile but this is just an example to show you all the methods available.
	.setImage('Url image here')
	// Sets the current timestamp
	.setTimestamp()
	// Set a specific timestamp
	.setTimestamp(milliseconds)
	.setTitle('The title of the embed', 'URL to open if the title is clicked OPTIONAL')
	.setThumbnail('The URL of the thumbnail')

	// Since Eris accepts JSON code only, we give eris a code for this embed
	return message.channel.createMessage({ embed: embed.code })
```

## Member Functions

**highestRole(member)**: Eris does not provide any easy way to figure out what the highest role of the member is. This is where this function is so useful.

**userTag(memberOrUser)**: If you ever wanted to easily get a member or users tag `username#discrim` and you did not want to manually make it this helper function provides the way to give it for you.

**setNickname(member, nickname, reason)**: An easy to use helper function to set the nickname of the bot or any member. The reason parameter is optional.

**resetNickname(member, reason)**: An easy way to reset a member or the bots nickname. Reason is optional.

