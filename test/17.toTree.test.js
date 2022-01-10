const { success, fail } = require("./utils");

const testName = `数组转树：toTree`;

module.exports = (toTree) => {
    const arr = [
        {
            name: "A",
            id: "a"
        },
        {
            name: "A-1",
            id: "a-1",
            pid: 'a'
        },
        {
            name: "A-1-1",
            id: "a-1-1",
            pid: 'a-1'
        },
        {
            name: "A-1-2",
            id: "a-1-2",
            pid: 'a-1'
        },
        {
            name: "B",
            id: "b"
        },
        {
            name: "B-1",
            id: "b-1",
            pid: 'b'
        },
        {
            name: "B-2",
            id: "b-2",
            pid: 'b'
        },
    ];

    const RESULT_JSON = `[{"name":"A","id":"a","children":[{"name":"A-1","id":"a-1","pid":"a","children":[{"name":"A-1-1","id":"a-1-1","pid":"a-1","children":[]},{"name":"A-1-2","id":"a-1-2","pid":"a-1","children":[]}]}]},{"name":"B","id":"b","children":[{"name":"B-1","id":"b-1","pid":"b","children":[]},{"name":"B-2","id":"b-2","pid":"b","children":[]}]}]`

    if (JSON.stringify(toTree(arr)) === RESULT_JSON) {
        success(testName);
    }
    else {
        fail(testName);
    }
}

