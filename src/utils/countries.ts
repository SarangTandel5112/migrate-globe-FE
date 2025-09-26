export interface Country {
    id: number;
    name: string;
    code?: string;
    iso2?: string;
    phone_code?: string;
    flag?: string;
}

// Utility function to convert country code to flag emoji
export function getFlagEmoji(countryCode: string): string {
    if (!countryCode || countryCode.length !== 2) {
        return "";
    }

    try {
        const codePoints = countryCode
            .toUpperCase()
            .split("")
            .map((char) => 127397 + char.charCodeAt(0));

        return String.fromCodePoint(...codePoints);
    } catch {
        console.warn(
            `Failed to generate flag for country code: ${countryCode}`
        );
        return "";
    }
}

// This function will be called at build time to fetch countries
export async function fetchCountries(): Promise<Country[]> {
    try {
        const response = await fetch(
            "https://admin.migrateglobe.com/api/countries?pagination[limit]=250"
        );
        if (!response.ok) {
            throw new Error(`Failed to fetch countries: ${response.status}`);
        }
        const data = await response.json();

        // Add flag emoji to each country
        const countriesWithFlags = (data.data || []).map((country: Country) => {
            const countryCode = country.iso2 || country.code;
            return {
                ...country,
                flag: countryCode ? getFlagEmoji(countryCode) : "",
            };
        });

        return countriesWithFlags;
    } catch (error) {
        console.error("Error fetching countries:", error);
        // Fallback to a basic list if API fails
        const fallbackCountries = [
            { id: 1, name: "Australia", iso2: "AU" },
            { id: 2, name: "India", iso2: "IN" },
            { id: 3, name: "United States", iso2: "US" },
            { id: 4, name: "United Kingdom", iso2: "GB" },
            { id: 5, name: "Canada", iso2: "CA" },
            { id: 6, name: "Germany", iso2: "DE" },
            { id: 7, name: "France", iso2: "FR" },
            { id: 8, name: "Japan", iso2: "JP" },
            { id: 9, name: "China", iso2: "CN" },
            { id: 10, name: "New Zealand", iso2: "NZ" },
        ];

        // Add flag emoji to fallback countries
        return fallbackCountries.map((country) => ({
            ...country,
            flag: getFlagEmoji(country.iso2!),
        }));
    }
}

// Helper function to search countries
export function searchCountries(
    countries: Country[],
    query: string
): Country[] {
    if (!query.trim()) return countries;

    const lowercaseQuery = query.toLowerCase();
    return countries.filter(
        (country) =>
            country.name?.toLowerCase().includes(lowercaseQuery) ||
            country.code?.toLowerCase().includes(lowercaseQuery) ||
            country.iso2?.toLowerCase().includes(lowercaseQuery)
    );
}

// Helper function to get country by name
export function getCountryByName(
    countries: Country[],
    name: string
): Country | undefined {
    return countries.find(
        (country) => country.name?.toLowerCase() === name.toLowerCase()
    );
}
