"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * Token used by the ModuleMapNgFactoryLoader to load modules
 */
exports.MODULE_MAP = new core_1.InjectionToken('MODULE_MAP');
/**
 * NgModuleFactoryLoader which does not lazy load
 */
var ModuleMapNgFactoryLoader = (function () {
    function ModuleMapNgFactoryLoader(compiler, moduleMap) {
        this.compiler = compiler;
        this.moduleMap = moduleMap;
    }
    ModuleMapNgFactoryLoader.prototype.load = function (loadChildrenString) {
        var offlineMode = this.compiler instanceof core_1.Compiler;
        var type = this.moduleMap[loadChildrenString];
        if (!type) {
            throw new Error(loadChildrenString + " did not exist in the MODULE_MAP");
        }
        return offlineMode
            ? this.loadFactory(type)
            : this.loadAndCompile(type);
    };
    ModuleMapNgFactoryLoader.prototype.loadFactory = function (factory) {
        return new Promise(function (resolve) { return resolve(factory); });
    };
    ModuleMapNgFactoryLoader.prototype.loadAndCompile = function (type) {
        return this.compiler.compileModuleAsync(type);
    };
    return ModuleMapNgFactoryLoader;
}());
ModuleMapNgFactoryLoader.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
ModuleMapNgFactoryLoader.ctorParameters = function () { return [
    { type: core_1.Compiler, },
    { type: undefined, decorators: [{ type: core_1.Inject, args: [exports.MODULE_MAP,] },] },
]; };
exports.ModuleMapNgFactoryLoader = ModuleMapNgFactoryLoader;
//# sourceMappingURL=module-map-ngfactory-loader.js.map