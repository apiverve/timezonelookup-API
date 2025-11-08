declare module '@apiverve/timezonelookup' {
  export interface timezonelookupOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface timezonelookupResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class timezonelookupWrapper {
    constructor(options: timezonelookupOptions);

    execute(callback: (error: any, data: timezonelookupResponse | null) => void): Promise<timezonelookupResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: timezonelookupResponse | null) => void): Promise<timezonelookupResponse>;
    execute(query?: Record<string, any>): Promise<timezonelookupResponse>;
  }
}
