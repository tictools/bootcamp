import users from "../../data/users.js";

/**
 * Map users to extend own properties
 * Add property 'id' with index value
 * Add property 'isEnabled' as true
 */

const extendUsers = (usersList) => {
  return usersList.map((user, index) => {
    const isUserEnabled = true;
    const userId = index;

    return {
      avatar: user.avatar,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      isEnabled: isUserEnabled,
      id: userId,
    };
  });
};

const extendedUsers = extendUsers(users);

console.log(users);
console.log(extendedUsers);
