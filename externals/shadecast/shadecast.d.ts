declare module "shadecast" {
    export type ClientConfigure = (settings: ClientSettings) => Promise<void>;
    export type ClientReport = (event: ClientEvent) => void;
    export type ClientSettings = {
        token: string,
        apiVersion: string,
        platform: string,
        version: string
    };
    export type ISOString = string;
    export type ClientEvent = {
        sessionId: string,
        date: ISOString,
        name: string,
        screenId: number,
        data: Record<string, unknown>
    };
    export type ShadecastSDK = {
        configure: ClientConfigure;
        report: ClientReport;
    }
    export const shadecast: ShadecastSDK;
}
