//IF
const password = 'oi12347'

if(password.length >= 12){
    console.log('senha muito forte =)')
} else if(password.length >= 8) {
    console.log('essa senha possui 8 ou mais caracteres')
} else {
    console.log('essa senha deve conter 8 ou mais caracteres')
}