export interface ItemDetail {
    id: number;
    name: string;
    cost: number;
    category: { name: string };
    sprites: { default: string | null };
    effect_entries: { effect: string; short_effect: string; language: { name: string } }[];
    attributes: { name: string }[];
}
