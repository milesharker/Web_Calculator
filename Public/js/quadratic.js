/**
 * Created by Miles on 5/18/2015.
 */


function click_me() {
    var a = $('#a').val();
    var b = $('#b').val();
    var c = $('#c').val();
    var b2 = b * b;
    var v = a * 2;
    var bn = b * -1;
    var ac = 4 * a * c;
    var bac = b2 - ac;
    var bacg = Math.sqrt(bac)
    var bg = bn + bacg;
    var bb = bn - bacg;
    var x = bg / v;
    var xg = bb / v;

    window.alert("The x value you are looking for is either " + x + " or " + xg + ".");
    return false;
}
$('#action').click(click_me);