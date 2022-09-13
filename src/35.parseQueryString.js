const s1 = 'a=1&b=&c=3&f=hello';
const s2 = 'a&b&c';
const s3 = 'user[name]=fxd&user[company][name]=tencent&user[company][age]=18&b=why';
const s4 = 'color=Deep%20Blue';
const s5 = 'a[0]=1&a[1]=2';

function parseQueryString(qs) {
    return qs.split('&').reduce((o, cur) => {
        const [key, value] = cur.split('=');

        if (!value) return o;

        deepSet(o, key.split(/[\[\]]/).filter(x => x), value);

        return o;
    }, {});
}

function deepSet(o, path, value) {
    let i = 0;

    for (; i < path.length - 1; i++) {
        const key = path[i];

        if (o[key] === undefined) {
            o[key] = path[i + 1].match(/^\d+$/) ? [] : {};
        }

        o = o[key];
    }

    o[path[i]] = decodeURIComponent(value);
}

[s1, s2, s3, s4, s5].forEach(i => console.log(parseQueryString(i)))