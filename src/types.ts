export interface Provider {
    id: string;
    name: string;
    category: string;
    gender: 'male' | 'female';
    country: string;
    city: string;
    rating: number;
    phone: string;
    email: string | null;
    bio: string;
}

export interface Filters {
    country: string;
    city: string;
    category: string;
}

export type FilterField = {
    key: keyof Filters;
    label: string;
    placeholder: string;
};

export type FilterComponentProps = {
    filters: Filters;
    setFilters: (filters: Filters) => void;
    onApply: () => void;
    onClear: () => void;
};

export type ActiveFilter = {
    key: keyof Filters;
    label: string;
    value: string;
};

export type ProviderDetailProps = {
    route: {
        params: {
            data: Provider;
        };
    };
};