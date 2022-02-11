function underlineToCamel(str) {
    return str.replace(/(^|_)(\w)/g, function (m, $1, $2) { return $2.toUpperCase() })
}

// const camel = underlineToCamel('user_name');
// console.log(camel);

// const a = 'username'.match(/^(\w{3})/);
// console.log(a)

// console.log('123ab12c3'.split(/[a-z]+/))

// function underlineToCamel(str) {
//     return str.replace(/(^|_)(\w)/g, (m, $1, $2) => { return s2.toUpperCase(); })
// }