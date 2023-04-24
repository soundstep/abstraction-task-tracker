declare module "oakom" {
    export type ClientSecret = (secret: string) => void;
    export type ClientSessionHandler = () => ClientSession;
    export type ClientSendEventHandler = (event: ClientEvent) => void;
    export type ClientSession = {
        sendEvent: ClientSendEventHandler;
    };
    export type ClientEvent = {
        id: string;
        timestamp: number;
        name: string;
        platform: string;
        version: string;
        data: Record<string, unknown>;
    };
    export type OakomSDK = {
        init: ClientSecret;
        startSession: ClientSessionHandler;
    }
    export const oakom: OakomSDK;
}
