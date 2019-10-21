/// <reference types="node" />
import GeneratedConversationV1 = require('./v1-generated');
declare class ConversationV1 extends GeneratedConversationV1 {
    static VERSION_DATE_2017_05_26: string;
    static VERSION_DATE_2017_04_21: string;
    static VERSION_DATE_2017_02_03: string;
    static VERSION_DATE_2016_09_20: string;
    static VERSION_DATE_2016_07_11: string;
    private static removedError;
    constructor(options: any);
    workspaceStatus(params: any, callback: any): void;
    getIntents(params: any, callback: any): void | NodeJS.ReadableStream;
    updateIntent(params: any, callback: any): any;
    getExamples(params: any, callback: any): void | NodeJS.ReadableStream;
    updateExample(params: any, callback: any): any;
    getCounterExamples(params: any, callback: any): void | NodeJS.ReadableStream;
    createCounterExample(params: any, callback: any): void | NodeJS.ReadableStream;
    deleteCounterExample(params: any, callback: any): void | NodeJS.ReadableStream;
    getCounterExample(params: any, callback: any): void | NodeJS.ReadableStream;
    updateCounterExample(params: any, callback: any): any;
    getEntities(params: any, callback: any): void | NodeJS.ReadableStream;
    updateEntity(params: any, callback: any): any;
    getValues(params: any, callback: any): void | NodeJS.ReadableStream;
    updateValue(params: any, callback: any): any;
    getSynonyms(params: any, callback: any): void | NodeJS.ReadableStream;
    updateSynonym(params: any, callback: any): any;
    getLogs(params: any, callback: any): void | NodeJS.ReadableStream;
    createDialogNode(params: any, callback: any): void | NodeJS.ReadableStream;
    getDialogNodes(params: any, callback: any): void | NodeJS.ReadableStream;
    updateDialogNode(params: any, callback: any): any;
}
export = ConversationV1;
