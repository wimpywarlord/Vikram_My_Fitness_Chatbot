/// <reference types="node" />
import GeneratedTextToSpeechV1 = require('./v1-generated');
declare class TextToSpeechV1 extends GeneratedTextToSpeechV1 {
    constructor(options: any);
    getCustomizations(params: any, callback: any): void | NodeJS.ReadableStream;
    getCustomization(params: any, callback: any): void | NodeJS.ReadableStream;
    updateCustomization(params: any, callback: any): void | NodeJS.ReadableStream;
    deleteCustomization(params: any, callback: any): void | NodeJS.ReadableStream;
    createCustomization(params: any, callback: any): void | NodeJS.ReadableStream;
    getWords(params: any, callback: any): void | NodeJS.ReadableStream;
    voices(params: any, callback: any): void | NodeJS.ReadableStream;
    voice(params: any, callback: any): void | NodeJS.ReadableStream;
    pronunciation(params: any, callback: any): void | NodeJS.ReadableStream;
    /**
     * Repair the WAV header of an audio/wav file.
     *
     * @param {Buffer} wavFileData - Wave audio - will be edited in place and returned
     * @return {Buffer} wavFileData - the original Buffer, with a correct header
     */
    repairWavHeader: (wavFileData: any) => any;
}
export = TextToSpeechV1;
