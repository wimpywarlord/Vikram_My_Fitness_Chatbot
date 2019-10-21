/**
 * IF traning is json, convert it to csv.
 * @param  {Object[]} jsonData the training_data as a json array
 * @param  {Function} cb the error first callback
 */
declare function toCSV(training: any, cb: any): void;
export = toCSV;
