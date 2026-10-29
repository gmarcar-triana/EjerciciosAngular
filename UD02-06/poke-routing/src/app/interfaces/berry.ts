export interface BerryDetail {
    id: number;
    name: string;
    growth_time: number;
    max_harvest: number;
    size: number;
    smoothness: number;
    soil_dryness: number;
    firmness: { name: string };
    flavors: { potency: number; flavor: { name: string } }[];
    item: { name: string; url: string };
}
