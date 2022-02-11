const { success, fail } = require("./utils");

const testName = `CommonJs规范：req`;

module.exports = (req) => {
    const a = req('./27.req.test.a.js');

    // console.log(a);
}