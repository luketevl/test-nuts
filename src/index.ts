import ex1 from './exercise1/'
import { 
    qtyCountries,
    getCountries,
    getCountriesByLang,
    getCountryHighestOfficialLang,
    getLangCommonOfficial
 } from './exercise2/'
import { countries } from './exercise2/mock'

const OFFICIAL_LANGUAGE = 'de'
console.log('======== EXERCISE 1 ======== ')
ex1(100)
console.log('======== EXERCISE 2 ======== ')
const ex2 = () => {
    console.log(`Number of countries in the world: ${qtyCountries(countries)}`)
    console.log(`The country with the most official languages: ${getCountries(getCountriesByLang(countries, OFFICIAL_LANGUAGE))}`)
    console.log(`Country with the highest number of official languages: ${getCountryHighestOfficialLang(countries).country}` )
    console.log(`Most common official language: ${getLangCommonOfficial(countries)}`)
} 
ex2()