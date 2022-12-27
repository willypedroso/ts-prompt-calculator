import prompt from 'prompt-sync'
const keyboard = prompt()

function calculate(v1: number, v2: number, op: string){
    switch(op){
        case '+':
            result = v1 + v2
            break;
        case '-':
            result = v1 - v2
            break;
        case '/':
            result = v1 / v2
            break;
        case '*':
            result = v1 * v2
            break;
    }

        console.log('---')
        console.log('---')
        console.log('---')
        console.log('The result is: ', result)
}

console.log('****** ********************* ******')
console.log('                                   ')
console.log('  ****************       ***       ')
console.log('  ****************     *******     ')
console.log('  ****************   ***********   ')
console.log('        ****        ****     ****  ')
console.log('        ****        *****     ***  ')
console.log('        ****         ******        ')
console.log('        ****             *****     ')
console.log('        ****        ***    ****    ')
console.log('        ****        ****    *****  ')
console.log('        ****         ***********   ')
console.log('        ****           *******     ')
console.log('        ****             ***       ')
console.log('                                   ')
console.log('****** ********************* ******')
console.log('****** TYPESCRIPT CALCULATOR ******')
console.log('***** Develop by Will Pedroso *****')
console.log('***** *********************** *****')
console.log('---')
console.log('---')
console.log('---')

let value1: number = +keyboard('Type the first value: ')
while(isNaN(value1)){
    console.log('Invalid input. Try again.')
    value1 = +keyboard('Type the first value: ')
}

const opValidation: string[] = ['+', '-', '/', '*']
let operator: string = keyboard('Type the operator (+, -, /, *): ')
while(!opValidation.includes(operator)){
    console.log('Invalid operator. Try again.')
    operator = keyboard('Type the operator (+, -, /, *): ')
}

let value2: number = +keyboard('Type the second value: ')
while(isNaN(value2)){
    console.log('Invalid input. Try again.')
    value2 = +keyboard('Type the second value: ')
}

let result: number = 0

calculate(value1, value2, operator)

let option: string = '1'
while(option === '1' || option === '2'){
    console.log('---')
    console.log('---')
    console.log('---')
    console.log('What do you wanna do next?')
    console.log('1. Keep calculating with ', result)
    console.log('2. Start a new operation')
    console.log('3. Quit calculator')
    console.log('---')
    option = keyboard('(1, 2, 3): ')

    switch (option) {
        case '1':
            value1 = result
            console.log(value1)
            operator = keyboard('Type the operator (+, -, /, *): ')
            while(!opValidation.includes(operator)){
                console.log('Invalid operator. Try again.')
                operator = keyboard('Type the operator (+, -, /, *): ')
            }
            value2 = +keyboard('Type the second value: ')
            while(isNaN(value2)){
                console.log('Invalid input. Try again.')
                value2 = +keyboard('Type the second value: ')
            }
            calculate(value1, value2, operator)
            break
        case '2':
            value1 = +keyboard('Type the first value: ')
            while(isNaN(value1)){
                console.log('Invalid input. Try again.')
                value1 = +keyboard('Type the first value: ')
            }
            operator = keyboard('Type the operator (+, -, /, *): ')
            while(!opValidation.includes(operator)){
                console.log('Invalid operator. Try again.')
                operator = keyboard('Type the operator (+, -, /, *): ')
            }
            value2 = +keyboard('Type the second value: ')
            while(isNaN(value2)){
                console.log('Invalid input. Try again.')
                value2 = +keyboard('Type the second value: ')
            }
            calculate(value1, value2, operator)
        default:
            break;
    }
}

console.log('Calculator finished')