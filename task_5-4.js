const en = ["mon",  "tue",  "wed",  "thu",  "fri",  "sat",  "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

let translate = {};
for (let i = 0; i < Math.min (en.length, ru.length); i++) {
    translate[en[i]] =ru[i];
}
console.log(translate);
    