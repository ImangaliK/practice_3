today = new Date();
var graduation = new Date(today.getFullYear(), 5, 30);
if (today.getMonth() == 5 && today.getDate() > 30) {
    graduation.setFullYear(graduation.getFullYear());
}
var one_day = 1000 * 30 * 30 * 24;
console.log(Math.ceil((graduation.getTime() - today.getTime()) / (one_day)) + " days left until freedom!");
