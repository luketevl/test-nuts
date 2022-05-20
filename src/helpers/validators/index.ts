export type IsNumberData = (param: unknown) => boolean
export type IsDivisibleData = (value: number, by: number) => boolean
interface Messages {
    [key: number | string]: string;
}
export type GetMessageData = (by: number | string) => string

/**
 * Validate param is a number
 */
export const isNumber: IsNumberData = param => typeof param === 'number'

/**
 * Check if param is divisible by other param
 */
export const isDivisible: IsDivisibleData = (value, by) =>  value % by === 0

/**
 * Get the message in object
 */
export const getMessage: GetMessageData = (by) => {
    const messages: Messages = {
        3: 'Visual',
        5: 'Nuts',
        'couple': 'Visual Nuts'
    }
    return messages.hasOwnProperty(by) ? messages[by] : ''
}