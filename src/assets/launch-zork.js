$.ajaxSetup({
    beforeSend: function (_, settings) {
        if (settings.dataType === 'binary') {
            settings.xhr().responseType = 'arraybuffer';
        }
    }
});

$.getScript('/assets/zm.js', function () {
    console.log('ZMachine Loaded...');
    const oReq = new XMLHttpRequest();
    oReq.open('GET', '/assets/zork1.z3', true);
    oReq.responseType = 'arraybuffer';
    oReq.onload = function (_) {
        const zcode = oReq.response;
        launchZork(zcode);
    };
    oReq.send();
});

function launchZork (zcode) {
    let zm = new JSZM(zcode);
    zm.mBuffer = '';
    zm.read = function* (_) {
        const text = '' + this.mBuffer;
        this.mBuffer = '';
        return prompt(text);
    };
    zm.print = function* (text, _) {
        this.mBuffer += text;
    }
    const zi = zm.run();
    zi.next();
    console.log('done');
}