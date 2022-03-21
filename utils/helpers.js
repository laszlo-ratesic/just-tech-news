module.exports = {
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },

  format_plural: (obj, amount) => (amount > 1) ? `${obj.toLowerCase()}s` : `${obj.toLowerCase()}`
};
