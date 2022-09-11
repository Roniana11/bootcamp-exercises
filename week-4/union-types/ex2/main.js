function print_numbers(phone) {
    if (Array.isArray(phone)) {
        if (typeof phone[0] === 'string') {
            console.log('the type is string[]' + phone);
        }
        else {
            console.log('the type is number[]' + phone);
        }
    }
    else {
        if (typeof phone === 'string') {
            console.log('the type is string' + phone);
        }
        else {
            console.log('the type is number' + phone);
        }
    }
}
print_numbers([22121, 334534, 53543]);
print_numbers(['22121', '334534', '53543']);
print_numbers('22121');
print_numbers(22121);
