import { ILogger } from "./iLogger";
import { Level } from "./level";
export declare class Options {
    level: Level;
    global: boolean;
    globalAs: string;
    store: boolean;
    storeAs: string;
}
export declare class Logger implements ILogger {
    private _level;
    private _globalAs;
    private _store;
    private _storeAs;
    Level: any;
    constructor(options?: Options);
    private _loadLevel;
    private _storeLevel(level);
    error(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
    info(message?: any, ...optionalParams: any[]): void;
    debug(message?: any, ...optionalParams: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;
    group(...args: any[]): void;
    groupEnd(...args: any[]): void;
    global: () => this;
    store(): Logger;
    unstore(): Logger;
    isErrorEnabled: () => boolean;
    isWarnEnabled: () => boolean;
    isInfoEnabled: () => boolean;
    isDebugEnabled: () => boolean;
    isLogEnabled: () => boolean;
    level: Level;
}
