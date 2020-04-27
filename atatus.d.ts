// Type definitions for atatus.js
// Project: https://github.com/atatus/atatus-js

interface AtatusOptions {

    /** Print debug message */
    debugMode?: boolean;

    /** When present, the IP address of the sender will be anonymized. */
    anonymizeIp?: boolean;

    /** When present, change hash routes into clean path. */
    hashRoutes?: boolean;

    /** Control what should be monitored with Atatus */
    disableBreadcrumbs?: boolean;
    disableErrorTracking?: boolean;
    disableAjaxMonitoring?: boolean;
    disableRUM?: boolean;
    disableSession?: boolean;
    disableSPA?: boolean;

    /** Report AJAX 4xx and 5xx status codes as error to Atatus */
    reportAjaxErrors?: boolean;

    /** Report unhandled promise rejections as error to Atatus */
    reportUnhandledRejections?: boolean;

    /** Additional data to be sent onto the error. */
    customData?: Object;

    /** Additional Filterable data to be tagged onto the performance and error data. */
    tags?: string[];

    /** Save data during offline and Send it to Atatus when it is online. */
    offline?: boolean;

    /** The release version of the application you are monitoring with Atatus */
    version?: string;

    /** List of error messages to be filtered out before being sent to Atatus. */
    ignoreErrors?: (RegExp | string)[];

    /** DEPRECATED: Only report performances metrics from whole domains matching a regex pattern. */
    allowedDomains?: (RegExp | string)[];

    /** It will ignore performance metrics from whole urls matching a regex pattern or string. */
    ignoreUrls?: (RegExp | string)[];

    /** The inverse of ignoreUrls. Only report performance metrics from whole urls matching a regex pattern or string. */
    whitelistUrls?: (RegExp | string)[];

    // Enable or Disable all console activity
    console? : boolean;
    consoleTimeline? : boolean;
    consoleDisplay? : boolean;
    consoleErrorNotify? : boolean;
    consoleTimelineLevels? : string[];

    /** A function which allows mutation of the data payload right before being sent to Atatus */
    beforeSend?: (data: any) => any;

    /** A function which allows mutation of the error data payload right before being sent to Atatus */
    beforeErrorSend?: (data: any) => any;

    /** A callback function that allows to specify the custom grouping key of the error. */
    groupingKeyCallback?: (data: any) => string;

    /** By default, Atatus does not truncate messages. If you need to truncate characters for whatever reason, you may set this to limit the length. */
    // maxMessageLength?: number;

    urlMaxLength?: number;
}


interface Atatus {

    /** Atatus.js version. */
    VERSION: string;

    /**
     * If you need to conditionally check if atatus needs to be initialized or not,
     * you can use the isConfigured function. It will return true if Atatus is already initialized.
     *
     * @return {boolean}
     */
    isConfigured(): boolean;

    /**
     * Allow multiple versions of Atatus to be installed.
     * Strip Atatus from the global context and returns the instance.
     *
     * @return {!Atatus} A self reference.
     */
    noConflict(): Atatus;

    /**
     * Configure Atatus with a API Key and extra options
     *
     * @param {string}  apiKey The public Atatus project API Key
     * @param {object}  options Optional set of of global options [optional]
     * @return {!Atatus} A self reference.
     */
    config(apiKey: string, options?: AtatusOptions): Atatus;

    /**
     * Installs all necessary configurations to capture errors and
     * performance metrics.
     *
     * @return {!Atatus} A self reference.
     */
    install(): Atatus;

    /**
     * Un-install Atatus Agent
     *
     * @return {!Atatus} A self reference.
     */
    uninstall(): Atatus;

    /**
     * Manually capture an exception and send it over to Atatus
     *
     * @param {error}  ex An exception to be logged
     * @param {object}  customData Custom meta data for this error [optional]
     * @param {array}  tags List of tags for this error [optional]
     * @return {!Atatus} A self reference.
     */
    notify(ex: Error, customData?: Object, tags?: string[]): Atatus;

    /**
     * Set a user to be sent along with the payload.
     *
     * @param {object}  user An object representing user data [optional]
     * @return {!Atatus} A self reference.
     */
    setUser(id: string, email?: string, name?: string): Atatus;

    /**
     * Clear the user context, removing the user data that would be sent to Atatus.
     *
     * @return {!Atatus} A self reference.
     */
    resetUser(): Atatus;

    /**
     * Enable hash routes or path
     *
     * @param {boolean} hashRoutes Value indicates whether to convert hash routes into clean URL.
     * @return {!Atatus} A self reference.
     */
    setHashRoutes(hashRoutes: boolean): Atatus;

    /**
     * Enable offline
     *
     * @param {boolean} offline Value indicates whether to enable offline data collection or not.
     * @return {!Atatus} A self reference.
     */
    enableOffline(offline: boolean): Atatus;

    /**
     * Set release version of application
     *
     * @param {string}  version Application version number
     * @return {!Atatus} A self reference.
     */
    setVersion(version: string): Atatus;

    /**
     * Set meta data which helps you to debug the error
     *
     * @param {Object}  customData Object contains custom details to be send with error.
     * @return {!Atatus} A self reference.
     */
    setCustomData(customData: Object): Atatus;

    /**
     * Set tags by which you can filter the error and performance data
     *
     * @param {string[]}  tags List of tags
     * @return {!Atatus} A self reference.
     */
    setTags(tags: string[]): Atatus;

     /**
     * Set ignored urls
     *
     * @param  {(RegExp | string)[]}  ignoreUrls List of ignored urls.
     * @return {!Atatus} A self reference.
     */
    setIgnoreUrls(ignoreUrls: (RegExp | string)[]): Atatus;

    /**
     * Get list of ignored urls
     *
     * @return {(RegExp | string)[]}
     */
    getIgnoreUrls(): (RegExp | string)[];

    /**
     * Set white-list urls
     *
     * @param  {(RegExp | string)[]}  whitelistUrls List of whitelist urls.
     * @return {!Atatus} A self reference.
     */
    setWhitelistUrls(whitelistUrls: (RegExp | string)[]): Atatus;

    /**
     * Get list of white-list urls
     *
     * @return {(RegExp | string)[]}
     */
    getWhitelistUrls(): (RegExp | string)[];

    /**
     * Set allowed domains
     *
     * @param  {(RegExp | string)[]}  allowedDomains List of allowed domains.
     * @return {!Atatus} A self reference.
     */
    setAllowedDomains(allowedDomains: (RegExp | string)[]): Atatus;

    /**
     * Get list of allowed domains
     *
     * @return {(RegExp | string)[]}
     */
    getAllowedDomains(): (RegExp | string)[];

    /**
     * Set the endpoint where data should be sent
     *
     * @param  {string}  apiEndpoint The endpoint where all data has to be sent.
     * @return {!Atatus} A self reference.
     */
    setAPIEndpoint(apiEndpoint: string): Atatus;

    /**
     * Get the API Endpoint
     *
     * @return {string}
     */
    getAPIEndpoint(): string;

    /**
     * Log a breadcrumb
     *
     * @param  {any}  value Value of the breadcrumb.
     * @param  {string}  type Type of the breadcrumb can be info, error, warn.
     * @return {!Atatus} A self reference.
    */
    leaveBreadcrumb(value: any, type?: string): Atatus;

    /**
     * Specify a function that allows mutation of the data payload right before being sent to Atatus.
     *
     * @param  {any}  data Payload of the error or performance.
     * @return {!Atatus} A self reference.
     */
    onBeforeSend(data: any): Atatus;

    /**
     * Specify a callback function that allows you to apply your own filters to determine if the message should be sent to Atatus.
     *
     * @param  {any}  data Payload of the error.
     * @return {!Atatus} A self reference.
     */
    onBeforeErrorSend(data: any): Atatus;

    /**
     * Specify a callback function that allows to specify the custom grouping key of the error
     *
     * @param  {any}  data Payload of the error.
     * @return {!Atatus} A self reference.
     */
    setGroupingKeyCallback(data: any): Atatus;

    /**
     * End the session
     *
     * @return {!Atatus} A self reference.
     */
    endSession(): Atatus;

    /**
     * Begin the transaction
     *
     * @param {String}  txnName - Transaction name
     */
    beginTransaction(txnName: string): void;

    /**
     * End the transaction successfully
     *
     * @param {String}  txnName - Transaction name
     */
    endTransaction(txnName: string): void;

    /**
     * Fail the transaction
     *
     * @param {String}  txnName - Transaction name
     */
    failTransaction(txnName: string): void;

    /**
     * Cancel the transaction
     *
     * @param {String}  txnName - Transaction name
     */
    cancelTransaction(txnName: string): void;

    /**
     * Record the transaction with the given duration
     *
     * @param {String}  txnName - Transaction name
     * @param {Number}  duration - Time duration in milliseconds
     */
    recordTransaction(txnName: string, duration: number, success?: boolean): void;

}

interface Window {
    _atatusConfig: AtatusOptions
}

declare var atatus: Atatus;
declare module "atatus-js" {
  export = atatus;
}
