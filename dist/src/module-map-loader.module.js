"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var module_map_ngfactory_loader_1 = require("./module-map-ngfactory-loader");
/**
 * Helper function for getting the providers object for the MODULE_MAP
 *
 * @param {ModuleMap} moduleMap Map to use as a value for MODULE_MAP
 */
function provideModuleMap(moduleMap) {
    return {
        provide: module_map_ngfactory_loader_1.MODULE_MAP,
        useValue: moduleMap
    };
}
exports.provideModuleMap = provideModuleMap;
/**
 * Module for using a NgModuleFactoryLoader which does not lazy load
 */
var ModuleMapLoaderModule = (function () {
    function ModuleMapLoaderModule() {
    }
    /**
     * Returns a ModuleMapLoaderModule along with a MODULE_MAP
     *
     * @param {ModuleMap} moduleMap Map to use as a value for MODULE_MAP
     */
    ModuleMapLoaderModule.withMap = function (moduleMap) {
        return {
            ngModule: ModuleMapLoaderModule,
            providers: [
                {
                    provide: module_map_ngfactory_loader_1.MODULE_MAP,
                    useValue: moduleMap
                }
            ]
        };
    };
    return ModuleMapLoaderModule;
}());
ModuleMapLoaderModule.decorators = [
    { type: core_1.NgModule, args: [{
                providers: [
                    {
                        provide: core_1.NgModuleFactoryLoader,
                        useClass: module_map_ngfactory_loader_1.ModuleMapNgFactoryLoader
                    }
                ]
            },] },
];
/** @nocollapse */
ModuleMapLoaderModule.ctorParameters = function () { return []; };
exports.ModuleMapLoaderModule = ModuleMapLoaderModule;
//# sourceMappingURL=module-map-loader.module.js.map