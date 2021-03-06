import { WSConfig } from "./WSConfig";
export declare class APIServer {
    private port;
    private manager;
    private socket;
    private config;
    private actions;
    constructor(config: WSConfig | string, port?: number);
    run(): void;
    add(actionName: string, action: object): void;
}
