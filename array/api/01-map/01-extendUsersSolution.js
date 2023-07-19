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
      firstName: user.firstName,
      lastName: user.lastName,
      isEnabled: isUserEnabled,
      id: userId,
    };
  });
};

const extendedUsers = extendUsers(users);

console.log(
  "🚀 ~ file: extend-users-solution.js:26 ~ extendedUsers:",
  extendedUsers
);
