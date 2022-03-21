const {format_date} = require('../utils/helpers');
const {format_plural} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-21 10:29:03');

    expect(format_date(date)).toBe('3/21/2020');
})

test('format_plural() returns a plural string', () => {
    let obj = "Tiger"
    let amount = 2

    expect(format_plural(obj, amount)).toBe("tigers");

    obj = "Lion"
    amount = 1

    expect(format_plural(obj, amount)).toBe("lion")
})