export default class Logger {
    static log(message: any): void;
    static warn(message: any): void;
    static error(message: any): void;
    static logObj(message: any, obj: any): void;
    static warnObj(message: any, obj: any): void;
    static errorObj(message: any, obj: any): void;
}
export declare const logger: (message: any) => void;
