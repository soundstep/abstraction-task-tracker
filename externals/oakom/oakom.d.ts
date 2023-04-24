declare module "oakom" {
    export type ClientSecret = (secret: string) => void;
    export type ClientSession = () => void;
    export type ClientSendEvent = (event: ClientEvent) => void;
    export type ClientEvent = {
        id: string,
        timestamp: number,
        name: string,
        platform: string,
        version: string,
        data: Record<string, unknown>
    };
    export type OakomSDK = {
        init: ClientSecret;
        startSession: ClientSession;
        sendEvent: ClientSendEvent;
    }
    export const oakom: OakomSDK;
}
