"use strict";
/**
 * Copyright 2017 IBM All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var isStream = require("isstream");
var GeneratedLanguageTranslatorV2 = require("./v2-generated");
var LanguageTranslatorV2 = /** @class */ (function (_super) {
    __extends(LanguageTranslatorV2, _super);
    function LanguageTranslatorV2(options) {
        return _super.call(this, options) || this;
    }
    LanguageTranslatorV2.prototype.getModels = function (params, callback) {
        console.warn("WARNING: getModels() was renamed to listModels(). Support for getModels() will be removed in the next major release");
        return _super.prototype.listModels.call(this, params, callback);
    };
    LanguageTranslatorV2.prototype.getModel = function (params, callback) {
        return _super.prototype.getModel.call(this, params, callback);
    };
    LanguageTranslatorV2.prototype.createModel = function (params, callback) {
        if (params) {
            var inputTypes = [
                'forced_glossary',
                'parallel_corpus',
                'monolingual_corpus'
            ];
            inputTypes.forEach(function (type) {
                if (params[type] && !isStream(params[type])) {
                    return callback(new Error(type + " is not a standard Node.js Stream"));
                }
            });
        }
        return _super.prototype.createModel.call(this, params, callback);
    };
    LanguageTranslatorV2.prototype.translate = function (params, callback) {
        if (!params || !(params.model_id || (params.source && params.target))) {
            return callback(new Error('Missing required parameters: model_id or source and target'));
        }
        return _super.prototype.translate.call(this, params, callback);
    };
    LanguageTranslatorV2.prototype.getIdentifiableLanguages = function (params, callback) {
        console.warn("WARNING: getIdentifiableLanguages() was renamed to listIdentifiableLanguages(). Support for getIdentifiableLanguages() will be removed in the next major release");
        return _super.prototype.listIdentifiableLanguages.call(this, params, callback);
    };
    return LanguageTranslatorV2;
}(GeneratedLanguageTranslatorV2));
module.exports = LanguageTranslatorV2;
//# sourceMappingURL=v2.js.map