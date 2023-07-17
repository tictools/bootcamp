import {
  $addClassTo,
  $appendChild,
  $createElement,
  $createText,
  $getElementBy,
} from "../../utils/dom.js";
import users from "../users/index.js";

/**
 * Create an unordered list <ul> of users.
 * Each user should be rendered in a <li>, containing full name (first + last), email and avatar
 * Append all <li> elements to <ul>
 */

const $container = $getElementBy(".collection");
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
  const $fullNameText = $createText(`${user.first_name} ${user.last_name}`);
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
