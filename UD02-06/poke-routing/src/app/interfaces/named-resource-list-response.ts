export interface NamedResourceListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: NamedResource[];
}

export interface NamedResource {
    name: string;
    url: string;
}
