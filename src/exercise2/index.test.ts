import { 
    qtyCountries,
    getCountriesByLang,
    getCountries,
    getCountryHighestOfficialLang,
    getOccurrence,
    getLangCommonOfficial
 } from '.'
import { countries } from './mock'

describe('Exercise 2', () => {
    describe('qtyCountries', () => {
        it('should return 0 when param is []', () => {
            expect(qtyCountries([])).toEqual(0)
        })
        it('should return length > 0', () => {
            expect(qtyCountries(countries)).toEqual(countries.length)
        })
    })

    describe('getCountriesByLang', () => {
        it('should return array with 2 lenght when lang is "de"', () => {
            const result = getCountriesByLang(countries, 'de')
            expect(result).toHaveLength(2)
        })
        it('should return empty array when lang is "pt"', () => {
            const result = getCountriesByLang(countries, 'pt')
            expect(result).toHaveLength(0)
        })
    })

    describe('getCountries', () => {
        it('should return a single name of country', () => {
            expect(getCountries([countries[0]])).toStrictEqual('US')
        })

        it('should return a couple name of countries with "," separator', () => {
            expect(getCountries([countries[0], countries[1]])).toStrictEqual('US, BE')
        })
    })

    describe('getCountryHighestOfficialLang', () => {
        it('should return Country name with highest official language', () => {
            const result = getCountryHighestOfficialLang(countries)
            expect(result.country).toStrictEqual('BE')
        })
        it('should empty when countries is empty', () => {
            const result = getCountryHighestOfficialLang([])
            expect(result.country).toStrictEqual('')
        })
    })

    describe('getOccurrence', () => {
        it('should return object with total', () => {
            const result = getOccurrence(['nl', 'fr', 'de', 'nl', 'fr', 'nl'])
            expect(result['nl']).toEqual(3)
            expect(result['fr']).toEqual(2)
            expect(result['de']).toEqual(1)
        })
        it('should return empty object when param is an empty array', () => {
            const result = getOccurrence([])
            expect(result).toStrictEqual({})
        })
    })

    describe('getLangCommonOfficial', () => {
        it('should return a couple lang with "," separator when have 2 langs equals', () => {
            expect(getLangCommonOfficial(countries)).toStrictEqual('nl, de')
        })
        it('should return one lang', () => {
            expect(getLangCommonOfficial([countries[1], countries[2]])).toStrictEqual('nl')
        })
    })

})