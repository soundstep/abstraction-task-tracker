declare module "shadecast" {
    export type DateIsoString = string;
    export type ClientConfigure = (settings: ClientSettings) => Promise<void>;
    export type ClientReport = (sessionId: string, event: ClientEvent) => void;
    export type ClientSettings = {
        token: string;
        apiVersion: string;
        platform: string;
        version: string;
    };
    export type DateIsoString = string;
    export type ClientEvent = {
        date: DateIsoString;
        name: string;
        screenId: number | null;
        data: Record<string, unknown>;
        date: DateIsoString;
    };
    export type ShadecastSDK = {
        configure: ClientConfigure;
        report: ClientReport;
    }
    export const shadecast: ShadecastSDK;
}
