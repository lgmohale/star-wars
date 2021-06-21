export interface IFetcher {
    (resource: string): Promise<any>;
}
export declare const getFetcher: (rootURL?: string) => IFetcher;
export declare const getLoader: (fetch: IFetcher) => any;
export declare const getPageFetcher: (fetch: IFetcher) => (resource: string, offset?: number, limit?: number) => Promise<any>;
