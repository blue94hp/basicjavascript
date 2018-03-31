/**
 * Created by anhtuan on 31/03/2018
 */function now(txt) {
    console.log(new Date().toLocaleTimeString() + ' ' + txt);
}

function wait(fn,miliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + miliSeconds) {
    }
    fn();
}

now('>>> Start to wait');
wait(function () {
    now('>>> End of waiting')
},5000);
now('>>> Do other task');