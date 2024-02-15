const listaCEPS = [
    '23455689',
    '89285362',
    '46789907'
]

async function consultaCEP(cep){
    let response = await fetch('')
    return await response.json()
}

listaCEPS.forEach(cep => {
    console.log(cep)
    console.log('----------')
    console.log(consultaCEP(cep))
    console.log('-----------')
})