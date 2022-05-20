import { isNumber, isDivisible, getMessage } from './../helpers/validators'

export type InitData = (final: number) => string | void

  
const init: InitData = (final) => {
  
  // validate input
  if(!isNumber(final)) throw new Error('Invalid number')


  for(let i = 1 ; i <= final; i++) {
    const by3 = 3;
    const by5 = 5;
    const isDivisibleBy3 = isDivisible(i, by3);
    const isDivisibleBy5 = isDivisible(i, by5);

    if(isDivisibleBy3 && isDivisibleBy5){
      console.log(getMessage('couple'))
    } else if(isDivisibleBy3){
      console.log(getMessage(by3))
    }else if(isDivisibleBy5){
      console.log(getMessage(by5))
    } else {
      console.log(i)
    }
  }

}
 
export default init
