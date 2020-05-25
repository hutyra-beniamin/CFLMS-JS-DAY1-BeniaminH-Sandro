var jsdev = 'Hey there, i am a javascript developer, and i live in vienna';

jsdev = jsdev.substring(11,38); // i am a javascript developer

var test = new Array();
test = jsdev.split(' ');

test.push('.');
test.shift();
test.unshift('I');

test = test.join(' ');

document.write(test);
