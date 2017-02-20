// Type definitions for atatus.js
// Project: https://github.com/atatus/atatus-js

declare var atatus: AtatusStatic;

export = atatus;

interface AtatusOptions {

    /** Print debug message */
    debugMode?: boolean;

    /** Control what should be monitored with Atatus */
    disableBreadcrumbs?: boolean;
    disableErrorTracking?: boolean;
    disableAjaxMonitoring?: boolean;
    disableRUM?: boolean;
    disableSession?: boolean;
    disableSPA?: boolean;

    /** Report AJAX 4xx and 5xx status codes as error to Atatus */
    reportAjaxErrors?: boolean;

    /** Additional data to be sent onto the error. */
    customData?: Object;

    /** Additional Filterable data to be tagged onto the performance and error data. */
    tags?: string[];

    /** Save data during offline and Send it to Atatus when it is online. */
    offline?: boolean;

    /** The release version of the application you are monitoring with Atatus */
    version?: string;

    /** List of messages to be fitlered out before being sent to Atatus. */
    ignoreErrors?: (RegExp | string)[];

    /** Only report errors and performances from whole domains matching a regex pattern. */
    allowedDomains?: (RegExp | string)[];

    /** Similar to ignoreErrors, but will ignore errors from whole urls patching a regex pattern. */
    // ignoreUrls?: (RegExp | string)[];

    /** The inverse of ignoreUrls. Only report errors from whole urls matching a regex pattern. */
    // whitelistUrls?: (RegExp | string)[];

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
}


interface AtatusStatic {

    /** Atatus.js version. */
    VERSION: string;

    /**
     * If you need to conditionally check if atatus needs to be initialized or not,
     * you can use the isConfigured function. It will return true if Atatus is already initialized.
     *
     * @return {boolean}
     */
    isConfigured(): boolean;

    /*
     * Allow multiple versions of Atatus to be installed.
     * Strip Atatus from the global context and returns the instance.
     *
     * @return {Atatus}
     */
    noConflict(): AtatusStatic;

    /*
     * Configure Atatus with a API Key and extra options
     *
     * @param {string} apiKey The public Atatus project API Key
     * @param {object} options Optional set of of global options [optional]
     * @return {Atatus}
     */
    config(apiKey: string, options?: AtatusOptions): AtatusStatic;

    /*
     * Installs all necessary configurations to capture errors and
     * performance metrics.
     *
     * @return {Atatus}
     */
    install(): AtatusStatic;

    /*
     * Uninstalls the Atatus
     *
     * @return {Atatus}
     */
    uninstall(): AtatusStatic;

    /*
     * Manually capture an exception and send it over to Atatus
     *
     * @param {error} ex An exception to be logged
     * @param {object} customData Custom meta data for this error [optional]
     * @param {array} tags List of tags for this error [optional]
     * @return {Atatus}
     */
    notify(ex: Error, customData?: Object, tags?: string[]): AtatusStatic;

    /*
     * Set a user to be sent along with the payload.
     *
     * @param {object} user An object representing user data [optional]
     * @return {Atatus}
     */
    setUser(user: {
        id?: string;
        email?: string;
        name?: string;
    }): AtatusStatic;

    /**
     * Clear the user context, removing the user data that would be sent to Atatus.
     *
     * @return {Atatus}
     */
    resetUser(): AtatusStatic;

    /**
     * Enable offline

     * @param {boolean} offline
     * @return {Atatus}
     */
    enableOffline(offline: boolean): AtatusStatic;

    /**
     * Set release version of application
     *
     * @param {string} version
     * @return {Atatus}
     */
    setVersion(version: string): AtatusStatic;

    /**
     * Set meta data which helps you to debug the error
     *
     * @param {Object} customData
     * @return {Atatus}
     */
    setCustomData(customData: Object): AtatusStatic;

    /**
     * Set tags by which you can filter the error and performance data
     *
     * @param {string[]} tags
     * @return {Atatus}
     */
    setTags(tags: string[]): AtatusStatic;

    /**
     * Set allowed domains
     *
     * @param  {(RegExp | string)[]}          allowedDomains List of allowed domains.
     * @return {Atatus}
     */
    setAllowedDomains(allowedDomains: (RegExp | string)[]): AtatusStatic;

    /**
     * Get list of allowed domains
     *
     * @return {(RegExp | string)[]}
     */
    getAllowedDomains(): (RegExp | string)[];

    /**
     * Set the endpoint where data should be sent
     *
     * @param  {string}          apiEndpoint The endpoint where all data has to be sent.
     * @return {Atatus}
     */
    setAPIEndpoint(apiEndpoint: string): AtatusStatic;

    /**
     * Get the API Endpoint
     *
     * @return {string}
     */
    getAPIEndpoint(): string;

    /** Log a breadcrumb*/

    /** Log a breadcrumb
     *
     * @param  {any}          value Value of the breadcrumb.
     * @param  {string}       type Type of the breadcrumb can be info, error, warn.
     * @return {Atatus}
    */
    leaveBreadcrumb(value: any, type: string): AtatusStatic;

    /**
     * Specify a function that allows mutation of the data payload right before being sent to Atatus.
     *
     * @param  {any}          data Payload of the error or performance.
     * @return {Atatus}
     */
    onBeforeSend(data: any): AtatusStatic;

    /**
     * Specify a callback function that allows you to apply your own filters to determine if the message should be sent to Atatus.
     *
     * @param  {any}          data Payload of the error.
     * @return {Atatus}
     */
    onBeforeErrorSend(data: any): AtatusStatic;

    /**
     * Specify a callback function that allows to specify the custom grouping key of the error
     *
     * @param  {any}          data Payload of the error.
     * @return {Atatus}
     */
    setGroupingKeyCallback(data: any): AtatusStatic;

    /**
     * End the session
     *
     * @return {Atatus}
     */
    endSession(): AtatusStatic;

}
