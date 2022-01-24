
const config = require('../../axiomconfig.json');
const randomNumbs = _ => {
    
    const nums = new Set();
    while(nums.size !== config.XKCD.TOTAL_RECORDS) {
      nums.add(Math.floor(Math.random() * config.XKCD.MAX_RANDOM_NO) + 1);
    }
    return [...nums];
}
module.exports = randomNumbs;