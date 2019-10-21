/// <reference types="node" />
import GeneratedLanguageTranslatorV2 = require('./v2-generated');
declare class LanguageTranslatorV2 extends GeneratedLanguageTranslatorV2 {
    constructor(options: any);
    getModels(params: any, callback: any): void | NodeJS.ReadableStream;
    getModel(params: any, callback: any): void | NodeJS.ReadableStream;
    createModel(params: any, callback: any): void | NodeJS.ReadableStream;
    translate(params: any, callback: any): any;
    getIdentifiableLanguages(params: any, callback: any): void | NodeJS.ReadableStream;
}
export = LanguageTranslatorV2;
