import users from "../../data/users.js";
import {
  $addClassTo,
  $appendChild,
  $createElement,
  $createText,
  $getElementBy,
} from "../../utils/dom.js";

/**
 * Create an unordered list <ul> of users.
 * Each user should be rendered in a <li>, containing full name (first + last), email and avatar
 * Append all <li> elements to <ul>
 */

const $container = $getElementBy(".collection");
console.log("🚀 ~ file: html-list-solution.js:17 ~ container:", $container);
const $ul = $createElement("ul");
$appendChild($container, $ul);

const $users = users.map((user) => {
  const $li = $createElement("li");
  //create <p> for fullName and append
  const $avatar = $createElement("img");
  $addClassTo($avatar, "user__avatar");
  $avatar.setAttribute("src", `${user.avatar}`);
  $appendChild($li, $avatar);

  //create <p> for fullName and append
  const $fullName = $createElement("p");
  $addClassTo($fullName, "user__full-name");
  const $fullNameText = $createText(`${user.firstName} ${user.lastName}`);
  $appendChild($fullName, $fullNameText);
  $appendChild($li, $fullName);

  //create <p> for mail and append
  const $mail = $createElement("p");
  const $mailText = $createText(`${user.email}`);
  $appendChild($mail, $mailText);
  $appendChild($li, $mail);

  return $li;
});

for (const $user of $users) {
  $appendChild($ul, $user);
}
