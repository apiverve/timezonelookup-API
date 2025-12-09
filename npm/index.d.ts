declare module '@apiverve/timezonelookup' {
  export interface timezonelookupOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface timezonelookupResponse {
    status: string;
    error: string | null;
    data: TimezoneLookupData;
    code?: number;
  }


  interface TimezoneLookupData {
      timezone:       string;
      timezoneOffset: number;
      date:           Date;
      time:           string;
      time24:         string;
      time12:         string;
      day:            string;
      month:          string;
      year:           string;
      unix:           string;
      dst:            boolean;
      dstStart:       Date;
      dstEnd:         Date;
      dstName:        string;
  }

  export default class timezonelookupWrapper {
    constructor(options: timezonelookupOptions);

    execute(callback: (error: any, data: timezonelookupResponse | null) => void): Promise<timezonelookupResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: timezonelookupResponse | null) => void): Promise<timezonelookupResponse>;
    execute(query?: Record<string, any>): Promise<timezonelookupResponse>;
  }
}
