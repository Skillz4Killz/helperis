import { Member, Role, User } from 'eris'

/**
 * Get the highest role of the member.
 * @param member {Member} The guild member who you want to check for.
 * @returns Role The highest role of the member.
 */
export const highestRole = (member: Member) => {
  let memberHighestRole: Role | undefined

  for (const roleID of member.roles) {
    const role = member.guild.roles.get(roleID)
    if (!role) continue

    if (!memberHighestRole || memberHighestRole.position < role.position) memberHighestRole = role
  }

  return memberHighestRole || (member.guild.roles.get(member.guild.id) as Role)
}

/**
 * Get the username#xxxx tag for the member or user.
 * @param member {Member | User} The member or user whose full tag you need.
 * @returns string The username#xxxx tag
 */
export const userTag = (member: Member | User) => {
  return `${member.username}#${member.discriminator}`
}


export default {
  highestRole,
  userTag
}
