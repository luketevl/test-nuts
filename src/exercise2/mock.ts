export type CountryData = {
    country: string
    languages: Array<string>

}
export type CountriesData = Array<CountryData>

export const countries: CountriesData = [
    {
        country:"US",
        languages: ["en"]
    },
    {
        country:"BE",
        languages: ["nl","fr","de"]
    },
    {
        country:"NL",
        languages: ["nl"]
    },
    {
        country:"DE",
        languages: ["de"]
    },
    {
        country:"ES",
        languages: ["es"]
    }
]