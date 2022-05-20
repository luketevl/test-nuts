import { CountriesData, CountryData } from './mock'
export type QtyCountriesData = (items: CountriesData) => number
export type GetCountriesByLangData = (items: CountriesData, lang: string) => CountriesData
export type GetCountriesData = (items: CountriesData) => string
export type GetCountryHighestOfficialLangData = (items: CountriesData) => CountryData
export type GetLangCommonOfficialData = (items: CountriesData) => string
export type GetOccurrenceData = (items: Array<string>) => Count
interface Count {
    [key: string]: number;
}

/**
 * Get total of countries
 */
export const qtyCountries: QtyCountriesData  = items => items.length

/**
 * Get countries by language
 */
export const getCountriesByLang: GetCountriesByLangData = (items, lang) => items.filter(country => country.languages.includes(lang))


/**
 * Get all names of countries
 */
export const getCountries: GetCountriesData = items  => {
    const result = items.map((country: CountryData) => country.country)
    return result.join(', ')
}

/**
 * Get country with more official languages
 */
export const getCountryHighestOfficialLang: GetCountryHighestOfficialLangData = items => {
    let guard = Number.NEGATIVE_INFINITY
    let country: CountryData = {
        country: '',
        languages: []
    }
    items.map((item: CountryData) => {
        const total = item.languages.length
        if( total > guard) {
            guard = total
            country = item
        }
    })
    return country
}


/**
 * Sum ocurrencies the elements in array
 */
export const getOccurrence: GetOccurrenceData = (items) => {

    const count: Count = {};

    for (const element of items) {
        if (count[element]) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }
    }
    return count
  
}


/**
 * Get Common lang
 */
export const getLangCommonOfficial: GetLangCommonOfficialData = items => {
    let langs: Array<string> = []

    items.map((item: CountryData) => {
        langs = langs.concat(item.languages)
    })
    let guard = Number.NEGATIVE_INFINITY
    let commonLang = ''
    const results = getOccurrence(langs)

    // check the highest
    for(const element in results) {
        const total = results[element];
        if(total > guard) {
            guard = total
            commonLang = element
        } else if(total === guard) {
            commonLang = `${commonLang}, ${element}`
        }
    }
    return commonLang
}