import init from '.'
const consoleSpy = jest.spyOn(console, 'log').mockImplementation()


describe('Exercise 1', () => {
    beforeEach(() => {
        consoleSpy.mockClear()
    })
    it('should fire expection when params is invalid', () => {
       try{
        expect(init(new Number(0) as number)).toThrow('Invalid number');
       } catch(err){}
        
    })
    it('should print word Visual', () => {
        const final = 3
        init(final)
        expect(console.log).toHaveBeenCalledTimes(final)
        expect(console.log).toHaveBeenLastCalledWith('Visual')
    })
    it('should print word Nuts', () => {
        const final = 5
        init(final)
        expect(console.log).toHaveBeenCalledTimes(final)
        expect(console.log).toHaveBeenLastCalledWith('Nuts')
    })
    it('should print word Visual Nuts', () => {
        const final = 15
        init(final)
        expect(console.log).toHaveBeenCalledTimes(final)
        expect(console.log).toHaveBeenLastCalledWith('Visual Nuts')
    })
})