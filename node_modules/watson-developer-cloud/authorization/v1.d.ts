import { BaseService } from '../lib/base_service';
declare class AuthorizationV1 extends BaseService {
    static URL: string;
    name: any;
    serviceVersion: any;
    /**
     * Authorization Service
     *
     * Generates temporary auth tokens for use in untrusted environments.
     * Tokens expire after one hour.
     *
     * @param {Object} options
     * @param {String} options.username
     * @param {String} options.password
     * @param {String} [options.url] url of the service for which auth tokens are being generated
     * @constructor
     */
    constructor(options: any);
    /**
     * Get a percent-encoded authorization token based on resource query string param
     *
     * @param {Object} [options]
     * @param {String} [options.url] defaults to url supplied to constructor (if any)
     * @param {Function(err, token)} callback - called with a %-encoded token
     */
    getToken(params: any, callback: any): any;
}
export = AuthorizationV1;
