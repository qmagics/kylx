const { success, fail } = require("./utils");

const testName = `观察者模式：Observer`;

module.exports = ({ Subject, Observer }) => {

    const RESULT = {
        n1: 0,
        n2: 0
    }

    const s1 = new Subject('s1', 1);
    const s2 = new Subject('s2', 1);

    const o1 = new Observer('o1');
    o1.update = (s, state) => {
        RESULT.n1 += state;
    }
    o1.observe(s1);
    o1.observe(s2);

    const o2 = new Observer('o2');
    o2.update = (s, state) => {
        RESULT.n2 += state;
    }
    o2.observe(s2);


    s1.setState(2);
    s2.setState(3);

    if (RESULT.n1 === 5 && RESULT.n2 === 3) {
        success(testName);
    }
    else {
        fail(testName);
    }
}