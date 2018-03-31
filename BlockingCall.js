/**
 * Created by anhtuan on 31/03/2018
 */
function now(txt) {
    console.log(new Date().toLocaleTimeString() + ' ' + txt);
}

function wait(miliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + miliSeconds) {
        // fn();
    }
}
now('>>> Start to wait');
wait(5000);
now('>>> Finish waiting');