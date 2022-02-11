const fs = require('fs');
const { extname } = require('path');
const path = require('path');
const vm = require('vm');

function Module(id) {
    this.id = id;
    this.exports = {};
}

Module.resolveFilename = function (filename) {
    console.log(filename)
    let filePath = path.resolve(__dirname, filename);

    const isExists = fs.existsSync(filePath);
    if (isExists) return filePath;

    const keys = Object.keys(Module._extensions);

    for (let i = 0; i < keys.length; i++) {
        const newPath = filePath + extname;
        if (fs.existsSync(newPath)) return newPath;
    }

    throw new Error(`module [${filename}] is not found`);
}

Module.prototype.load = function () {
    const extname = path.extname(this.id);
    const loadFn = Module._extensions[extname];

    if (loadFn) {
        loadFn(this);
    }
}

Module._cache = {};

Module._extensions = {
    '.js'(module) {
        const script = fs.readFileSync(module.id);
        const template = `(function(module,exports,require,__dirname,__filename){ ${script} })`;

        const fn = vm.runInThisContext(template);
        const exports = module.exports;
        fn.call(module,module, exports, req, __dirname, __filename);
    },
    '.json'(module) {
        const script = fs.readFileSync(module.id);

        module.exports = JSON.parse(script);
    }
}

function req(filename) {
    filename = Module.resolveFilename(filename);

    const cacheModule = Module._cache[filename];

    if (cacheModule) {
        return cacheModule.exports;
    }

    const module = new Module(filename);
    console.log(module)

    module.load();
    Module._cache[filename] = module;

    return module.exports;
}