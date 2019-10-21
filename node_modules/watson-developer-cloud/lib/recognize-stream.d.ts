/// <reference types="node" />
import { Duplex } from 'stream';
interface RecognizeStream extends Duplex {
    _writableState: any;
    readableObjectMode: any;
}
/**
 * pipe()-able Node.js Readable/Writeable stream - accepts binary audio and emits text in it's `data` events.
 * Also emits `results` events with interim results and other data.
 *
 * Cannot be instantiated directly, instead reated by calling #createRecognizeStream()
 *
 * Uses WebSockets under the hood. For audio with no recognizable speech, no `data` events are emitted.
 * @param {Object} options
 * @constructor
 */
declare class RecognizeStream extends Duplex {
    static WEBSOCKET_CONNECTION_ERROR: string;
    static ERROR_UNRECOGNIZED_FORMAT: string;
    static getContentType(buffer: Buffer): string;
    private options;
    private listening;
    private initialized;
    private finished;
    private socket;
    private promise;
    /**
     * pipe()-able Node.js Duplex stream - accepts binary audio and emits text/objects in it's `data` events.
     *
     * Uses WebSockets under the hood. For audio with no recognizable speech, no `data` events are emitted.
     *
     * By default, only finalized text is emitted in the data events, however when `objectMode`/`readableObjectMode` and `interim_results` are enabled, both interim and final results objects are emitted.
     * WriteableElementStream uses this, for example, to live-update the DOM with word-by-word transcriptions.
     *
     * Note that the WebSocket connection is not established until the first chunk of data is recieved. This allows for auto-detection of content type (for wav/flac/opus audio).
     *
     * @param {Object} options
     * @param {String} [options.model='en-US_BroadbandModel'] - voice model to use. Microphone streaming only supports broadband models.
     * @param {String} [options.url='wss://stream.watsonplatform.net/speech-to-text/api'] base URL for service
     * @param {String} [options.token] - Auth token
     * @param {Object} [options.headers] - Only works in Node.js, not in browsers. Allows for custom headers to be set, including an Authorization header (preventing the need for auth tokens)
     * @param {String} [options.content-type='audio/wav'] - content type of audio; can be automatically determined from file header in most cases. only wav, flac, ogg/opus, and webm are supported
     * @param {Boolean} [options.interim_results=true] - Send back non-final previews of each "sentence" as it is being processed. These results are ignored in text mode.
     * @param {Boolean} [options.word_confidence=false] - include confidence scores with results. Defaults to true when in objectMode.
     * @param {Boolean} [options.timestamps=false] - include timestamps with results. Defaults to true when in objectMode.
     * @param {Number} [options.max_alternatives=1] - maximum number of alternative transcriptions to include. Defaults to 3 when in objectMode.
     * @param {Array<String>} [options.keywords] - a list of keywords to search for in the audio
     * @param {Number} [options.keywords_threshold] - Number between 0 and 1 representing the minimum confidence before including a keyword in the results. Required when options.keywords is set
     * @param {Number} [options.word_alternatives_threshold] - Number between 0 and 1 representing the minimum confidence before including an alternative word in the results. Must be set to enable word alternatives,
     * @param {Boolean} [options.profanity_filter=false] - set to true to filter out profanity and replace the words with *'s
     * @param {Number} [options.inactivity_timeout=30] - how many seconds of silence before automatically closing the stream. use -1 for infinity
     * @param {Boolean} [options.readableObjectMode=false] - emit `result` objects instead of string Buffers for the `data` events. Does not affect input (which must be binary)
     * @param {Boolean} [options.objectMode=false] - alias for options.readableObjectMode
     * @param {Number} [options.X-Watson-Learning-Opt-Out=false] - set to true to opt-out of allowing Watson to use this request to improve it's services
     * @param {Boolean} [options.smart_formatting=false] - formats numeric values such as dates, times, currency, etc.
     * @param {String} [options.customization_id] - Customization ID
     *
     * @constructor
     */
    constructor(options: any);
    initialize(): void;
    sendJSON(msg: any): void;
    sendData(data: any): void;
    /**
     * Flow control - don't ask for more data until we've finished what we have
     *
     * Notes:
     *
     * This limits upload speed to 100 * options.highWaterMark / second.
     *
     * The default highWaterMark is 16kB, so the default max upload speed is ~1.6MB/s.
     *
     * Microphone input provides audio at a (downsampled) rate of:
     *   16000 samples/s * 16-bits * 1 channel = 32kB/s
     * (note the bits to Bytes conversion there)
     *
     * @private
     * @param {Function} next
     */
    afterSend(next: any): void;
    /**
     * Prevents any more audio from being sent over the WebSocket and gracefully closes the connection.
     * Additional data may still be emitted up until the `end` event is triggered.
     */
    stop(): void;
    _read(): void;
    _write(chunk: any, encoding: any, callback: any): void;
    finish(): void;
    /**
     * Returns a Promise that resolves with Watson Transaction ID from the X-Transaction-ID header
     *
     * Works in Node.js but not in browsers (the W3C WebSocket API does not expose headers)
     *
     * @return Promise<String>
     */
    getTransactionId(): Promise<string>;
}
export = RecognizeStream;
