import { isNumber, isDivisible, getMessage } from './index'

describe('Helpers/Validators', () => {
    describe('isNumber', () => {
        it('should return false when param is not a number', () => {
            expect(isNumber(new Number(0) as number)).toBeFalsy()
        })
        it('should return true when param is a number', () => {
            expect(isNumber(0)).toBeTruthy()
        })
    })

    describe('isDivisible', () => {
        it('should return false when number is not divisible', () => {
            expect(isDivisible(1, 2)).toBeFalsy()
        })
        it('should return true when number is divisible', () => {
            expect(isDivisible(15, 3)).toBeTruthy() 
        })
    })

    describe('getMessage', () => {
        it('should return message when number is divisible by 3', () => {
            expect(getMessage(3)).toStrictEqual('Visual')
        })
        it('should return message when number is divisible by 5', () => {
            expect(getMessage(5)).toStrictEqual('Nuts')
        })
        it('should return message when number is divisible by 3 and 5', () => {
            expect(getMessage('couple')).toStrictEqual('Visual Nuts')
        })
        it('should return empty message when key not exists', () => {
            expect(getMessage(7)).toStrictEqual('')
        })
    })
})