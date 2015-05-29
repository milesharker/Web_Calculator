/**
 * Created by Miles on 5/18/2015.
 */
function click_me() {
    var a = $('#a').val();
    var b = $('#b').val();
    var a2 = a * a;
    var b2 = b * b;
    var c2 = a2 + b2;
    var c = Math.sqrt(c2);
    window.alert("The hypotenuse you are looking for is " + c + " units long.");
    return false;
}
$('#action').click(click_me);