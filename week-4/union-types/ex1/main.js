function concat(str, bool) {
    if (bool || bool === 1) {
        var returnVal = typeof str === 'string' ? str : str.join('');
        console.log(returnVal);
    }
}
concat(['h', 'e', 'l'], false);
concat(['h', 'e', 'l'], 1);
concat(['h', 'e', 'l'], 0);
concat(['h', 'e', 'l'], true);
concat('hello', true);
concat('hello', false);
concat('hello', 1);
concat('hello', 0);
