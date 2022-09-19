const password = 'TheEnd1830'
//if(password.length >= 10) {
 ///   console.log("=D password is at least 10 characters long");
///} else console.log(":| password is not long enough" );

///const letters = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]
///const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
///if(password === letters[] && password === numbers[])
///console.log('=D Your password contains atleast one letter and number!');
///else {console.log(":| Must contain at least one letter and one number")
///}
const alphabet_lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const alphabet_upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

 for(let i = 0; i < password.length; i++) {
    let each_letter = password[i];
    if(alphabet_lower.includes(each_letter) ) {
includes_lower = true;}}
console.log(includes_lower);
console.log(includes_upper);