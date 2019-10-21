/// <reference types="node" />
import GeneratedDiscoveryV1 = require('./v1-generated');
declare class DiscoveryV1 extends GeneratedDiscoveryV1 {
    static VERSION_DATE_2017_09_01: string;
    static VERSION_DATE_2017_08_01: string;
    static VERSION_DATE_2017_07_19: string;
    static VERSION_DATE_2017_06_25: string;
    static VERSION_DATE_2016_12_01: string;
    static VERSION_DATE_2017_04_27: string;
    static VERSION_DATE_2016_12_15: string;
    static _ensureFilename(file: any): any;
    constructor(options: any);
    getEnvironments(params: any, callback: any): void | NodeJS.ReadableStream;
    createEnvironment(params: any, callback: any): void | NodeJS.ReadableStream;
    updateEnvironment(params: any, callback: any): void | NodeJS.ReadableStream;
    updateConfiguration(params: any, callback: any): void | NodeJS.ReadableStream;
    getCollections(params: any, callback: any): void | NodeJS.ReadableStream;
    createCollection(params: any, callback: any): void | NodeJS.ReadableStream;
    updateCollection(params: any, callback: any): void | NodeJS.ReadableStream;
    getCollectionFields(params: any, callback: any): void | NodeJS.ReadableStream;
    getConfigurations(params: any, callback: any): void | NodeJS.ReadableStream;
    createConfiguration(params: any, callback: any): void | NodeJS.ReadableStream;
    addJsonDocument(params: any, callback: any): void | NodeJS.ReadableStream;
    updateJsonDocument(params: any, callback: any): void | NodeJS.ReadableStream;
    query(params: any, callback: any): void | NodeJS.ReadableStream;
}
export = DiscoveryV1;
