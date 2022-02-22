// ? /////////////////////// ? //
// ? função para validar CPF ? //
// ? /////////////////////// ? //
function validarCPF(entradaCPF){
    // * retirar auto preenchimentos ["_","-","."," "] * //
    let cpf = entradaCPF.replaceAll(/[_\-.\s]/gi,"").padStart(11,"0") 
    // * validar  * //
    let exp  = `${cpf[0]}{11}|[a-z\W]`
    let exp2 = new RegExp(exp,'i')
    if(exp2.test(cpf) || cpf.length > 11){ return false } 

    // * primeiro dígito de verificação * //
    let dígitoVerificacao1=
    ( ( (cpf[0] * 10) +
        (cpf[1] * 09) +
        (cpf[2] * 08) +
        (cpf[3] * 07) +
        (cpf[4] * 06) +
        (cpf[5] * 05) +
        (cpf[6] * 04) +
        (cpf[7] * 03) +
        (cpf[8] * 02) ) *10 )%11
    // * Segundo dígito de verificação * //
    let dígitoVerificacao2=
    ( ( (cpf[0] * 11) +
        (cpf[1] * 10) +
        (cpf[2] * 09) +
        (cpf[3] * 08) +
        (cpf[4] * 07) +
        (cpf[5] * 06) +
        (cpf[6] * 05) +
        (cpf[7] * 04) +
        (cpf[8] * 03) +
        (cpf[9] * 02) ) *10 )%11

    dígitoVerificacao1 == 10 ? dígitoVerificacao1 = 0 : null
    dígitoVerificacao2 == 10 ? dígitoVerificacao2 = 0 : null

    if(dígitoVerificacao1 == cpf[9] && dígitoVerificacao2 == cpf[10]){
        return true
    }else{
        return false
    }
 }
// ? //////////////////////// ? //
// ? função para validar CNPJ ? //
// ? //////////////////////// ? //
 function validarCNPJ(entradaCNPJ){
    // * retirar auto preenchimentos ["_","-","."," "] * //
    let cnpj = entradaCNPJ.replaceAll(/[.\-_\s/]/gi,"").padStart(14,"0")
    // * validar  * //
    let exp  = `${cnpj[0]}{14}|[a-z\W]`
    let exp2 = new RegExp(exp,'gi')
    if(exp2.test(cnpj)){ return false }

    let dígitoVerificacao1 =
    ( ( (cnpj[00] * 5) +
        (cnpj[01] * 4) +
        (cnpj[02] * 3) +
        (cnpj[03] * 2) +
        (cnpj[04] * 9) +
        (cnpj[05] * 8) +
        (cnpj[06] * 7) +
        (cnpj[07] * 6) +
        (cnpj[08] * 5) +
        (cnpj[09] * 4) +
        (cnpj[10] * 3) +
        (cnpj[11] * 2) ) *10)%11

    dígitoVerificacao1==10 ? dígitoVerificacao1=0 : null

    let dígitoVerificacao2=
    ( ( (cnpj[00] * 6) +
        (cnpj[01] * 5) +
        (cnpj[02] * 4) +
        (cnpj[03] * 3) +
        (cnpj[04] * 2) +
        (cnpj[05] * 9) +
        (cnpj[06] * 8) +
        (cnpj[07] * 7) +
        (cnpj[08] * 6) +
        (cnpj[09] * 5) +
        (cnpj[10] * 4) +
        (cnpj[11] * 3) +
        (cnpj[12] * 2) ) *10)%11

    dígitoVerificacao2==10 ? dígitoVerificacao2=0 : null

    if(dígitoVerificacao1 == cnpj[12] && dígitoVerificacao2 == cnpj[13]){
        return true
    }else{
        return false
    }
}