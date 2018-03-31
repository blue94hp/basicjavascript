/**
 * Created by anhtuan on 31/03/2018
 */
function now(txt) {
    console.log(new Date().toLocaleTimeString() + ' ' + txt);
}

now('>>> Start to wait');
process.nextTick(function () {
    now('>>> Do this task at the end of the event queue');
});

now('>>> Do other task');