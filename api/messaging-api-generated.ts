/* tslint:disable */
/* eslint-disable */
/*
Appwrite

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

The version of the OpenAPI document: 1.5.0
Contact: team@appwrite.io

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { MessagingAddNewSubscriberRequest } from '../models';
// @ts-ignore
import { Subscriber } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * MessagingApi - axios parameter creator
 * @export
 */
export const MessagingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new subscriber.
         * @summary Create subscriber
         * @param {string} topicId Topic ID. The topic ID to subscribe to.
         * @param {MessagingAddNewSubscriberRequest} [messagingAddNewSubscriberRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addNewSubscriber: async (topicId: string, messagingAddNewSubscriberRequest?: MessagingAddNewSubscriberRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'topicId' is not null or undefined
            assertParamExists('addNewSubscriber', 'topicId', topicId)
            const localVarPath = `/messaging/topics/{topicId}/subscribers`
                .replace(`{${"topicId"}}`, encodeURIComponent(String(topicId !== undefined ? topicId : `-topicId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWT required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-Appwrite-JWT", keyParamName: "jWT", configuration })
            // authentication Project required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-Appwrite-Project", keyParamName: "project", configuration })
            // authentication Session required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-Appwrite-Session", keyParamName: "session", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: messagingAddNewSubscriberRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/messaging/topics/{topicId}/subscribers',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(messagingAddNewSubscriberRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a subscriber by its unique ID.
         * @summary Delete subscriber
         * @param {string} topicId Topic ID. The topic ID subscribed to.
         * @param {string} subscriberId Subscriber ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSubscriberById: async (topicId: string, subscriberId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'topicId' is not null or undefined
            assertParamExists('deleteSubscriberById', 'topicId', topicId)
            // verify required parameter 'subscriberId' is not null or undefined
            assertParamExists('deleteSubscriberById', 'subscriberId', subscriberId)
            const localVarPath = `/messaging/topics/{topicId}/subscribers/{subscriberId}`
                .replace(`{${"topicId"}}`, encodeURIComponent(String(topicId !== undefined ? topicId : `-topicId-`)))
                .replace(`{${"subscriberId"}}`, encodeURIComponent(String(subscriberId !== undefined ? subscriberId : `-subscriberId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWT required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-Appwrite-JWT", keyParamName: "jWT", configuration })
            // authentication Project required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-Appwrite-Project", keyParamName: "project", configuration })
            // authentication Session required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-Appwrite-Session", keyParamName: "session", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/messaging/topics/{topicId}/subscribers/{subscriberId}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MessagingApi - functional programming interface
 * @export
 */
export const MessagingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MessagingApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new subscriber.
         * @summary Create subscriber
         * @param {MessagingApiAddNewSubscriberRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addNewSubscriber(requestParameters: MessagingApiAddNewSubscriberRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Subscriber>> {
            const messagingAddNewSubscriberRequest: MessagingAddNewSubscriberRequest = {
                subscriberId: requestParameters.subscriberId,
                targetId: requestParameters.targetId
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.addNewSubscriber(requestParameters.topicId, messagingAddNewSubscriberRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a subscriber by its unique ID.
         * @summary Delete subscriber
         * @param {MessagingApiDeleteSubscriberByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSubscriberById(requestParameters: MessagingApiDeleteSubscriberByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSubscriberById(requestParameters.topicId, requestParameters.subscriberId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MessagingApi - factory interface
 * @export
 */
export const MessagingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MessagingApiFp(configuration)
    return {
        /**
         * Create a new subscriber.
         * @summary Create subscriber
         * @param {MessagingApiAddNewSubscriberRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addNewSubscriber(requestParameters: MessagingApiAddNewSubscriberRequest, options?: AxiosRequestConfig): AxiosPromise<Subscriber> {
            return localVarFp.addNewSubscriber(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a subscriber by its unique ID.
         * @summary Delete subscriber
         * @param {MessagingApiDeleteSubscriberByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSubscriberById(requestParameters: MessagingApiDeleteSubscriberByIdRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteSubscriberById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addNewSubscriber operation in MessagingApi.
 * @export
 * @interface MessagingApiAddNewSubscriberRequest
 */
export type MessagingApiAddNewSubscriberRequest = {
    
    /**
    * Topic ID. The topic ID to subscribe to.
    * @type {string}
    * @memberof MessagingApiAddNewSubscriber
    */
    readonly topicId: string
    
} & MessagingAddNewSubscriberRequest

/**
 * Request parameters for deleteSubscriberById operation in MessagingApi.
 * @export
 * @interface MessagingApiDeleteSubscriberByIdRequest
 */
export type MessagingApiDeleteSubscriberByIdRequest = {
    
    /**
    * Topic ID. The topic ID subscribed to.
    * @type {string}
    * @memberof MessagingApiDeleteSubscriberById
    */
    readonly topicId: string
    
    /**
    * Subscriber ID.
    * @type {string}
    * @memberof MessagingApiDeleteSubscriberById
    */
    readonly subscriberId: string
    
}

/**
 * MessagingApiGenerated - object-oriented interface
 * @export
 * @class MessagingApiGenerated
 * @extends {BaseAPI}
 */
export class MessagingApiGenerated extends BaseAPI {
    /**
     * Create a new subscriber.
     * @summary Create subscriber
     * @param {MessagingApiAddNewSubscriberRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessagingApiGenerated
     */
    public addNewSubscriber(requestParameters: MessagingApiAddNewSubscriberRequest, options?: AxiosRequestConfig) {
        return MessagingApiFp(this.configuration).addNewSubscriber(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a subscriber by its unique ID.
     * @summary Delete subscriber
     * @param {MessagingApiDeleteSubscriberByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessagingApiGenerated
     */
    public deleteSubscriberById(requestParameters: MessagingApiDeleteSubscriberByIdRequest, options?: AxiosRequestConfig) {
        return MessagingApiFp(this.configuration).deleteSubscriberById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
