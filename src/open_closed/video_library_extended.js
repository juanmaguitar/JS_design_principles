const borrow = require('../../src/open_closed/video_library.js')

const restrictedBorrow = (customer, video) => customer.age > video.rating ? borrow(customer, video) : {customer, video}

module.exports = restrictedBorrow;
