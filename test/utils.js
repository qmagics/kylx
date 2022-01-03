const chalk = require("chalk");

let num = 1;

exports.success = (testName) => {
    const msg = `\n${num++}: ` + chalk.greenBright(`${testName} => 成功`);
    console.log(msg)
}

exports.fail = (testName,reason) => {
    const msg = `\n${num++}: ` + chalk.redBright(`${testName} => 失败${reason?` ｜ 原因：${reason}`:''}`);
    console.log(msg)
}