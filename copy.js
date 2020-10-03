/**
 * Created by KONFEROVICH SERGEY.
 *
 * mail: konferovich.sergey@yandex.ru
 * https://vk.com/konferovich_sergey
 */
/*
use "copy-to-buffer" class to copy inner html
*/
$(document).on('click', '.copy-to-buffer', function () {
    function htmlDecode(input) {
        let e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes[0].nodeValue;
    }

    const copyToClipboard = str => {
        const el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert('Copied...');
    };
    copyToClipboard(htmlDecode($(this).html()));
});
