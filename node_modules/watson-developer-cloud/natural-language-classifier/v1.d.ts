/// <reference types="node" />
import GeneratedNaturalLanguageClassifierV1 = require('./v1-generated');
declare class NaturalLanguageClassifierV1 extends GeneratedNaturalLanguageClassifierV1 {
    constructor(options: any);
    create(params: any, callback: any): void;
    classify(params: any, callback: any): void | NodeJS.ReadableStream;
    status(params: any, callback: any): void | NodeJS.ReadableStream;
    list(params: any, callback: any): void | NodeJS.ReadableStream;
    remove(params: any, callback: any): void | NodeJS.ReadableStream;
}
export = NaturalLanguageClassifierV1;
