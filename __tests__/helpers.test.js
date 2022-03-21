const {format_date} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-21 10:29:03');

    expect(format_date(date)).toBe('3/21/2020');
})