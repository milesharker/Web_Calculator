/**
 * Created by Miles on 5/18/2015.
 */

/** hippos go about 30 mph which is roughly 528 inches per second. */

function click_me() {
   var distance = $('#distance').val();
   var time = distance / 528;
    window.alert("The hippo would travel " + distance+ " inches in " + time + " seconds.");
    return false;
}

$('#action').click(click_me);