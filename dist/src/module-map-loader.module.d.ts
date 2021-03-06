import { ModuleWithProviders, Provider } from '@angular/core';
import { ModuleMap } from './module-map-ngfactory-loader';
/**
 * Helper function for getting the providers object for the MODULE_MAP
 *
 * @param {ModuleMap} moduleMap Map to use as a value for MODULE_MAP
 */
export declare function provideModuleMap(moduleMap: ModuleMap): Provider;
/**
 * Module for using a NgModuleFactoryLoader which does not lazy load
 */
export declare class ModuleMapLoaderModule {
    /**
     * Returns a ModuleMapLoaderModule along with a MODULE_MAP
     *
     * @param {ModuleMap} moduleMap Map to use as a value for MODULE_MAP
     */
    static withMap(moduleMap: ModuleMap): ModuleWithProviders;
}
