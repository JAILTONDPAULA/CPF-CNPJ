class Documento{
    static validarCPF(entradaCPF){
        let cpf = entradaCPF.replaceAll(/[_\-.\s]/gi,"").padStart(11,"0") 
        let exp  = `${cpf[0]}{11}|[a-z\W]`
        let exp2 = new RegExp(exp,'i')
        if(exp2.test(cpf) || cpf.length > 11){ return false } 

        // * primeiro dígito de verificação * //
        let dígitoVerificacao1=
        ( ( (cpf[0] * 10) +
            (cpf[1] *  9) +
            (cpf[2] *  8) +
            (cpf[3] *  7) +
            (cpf[4] *  6) +
            (cpf[5] *  5) +
            (cpf[6] *  4) +
            (cpf[7] *  3) +
            (cpf[8] *  2) ) * 10 ) % 11
        // * Segundo dígito de verificação * //
        let dígitoVerificacao2=
        ( ( (cpf[0] * 11) +
            (cpf[1] * 10) +
            (cpf[2] *  9) +
            (cpf[3] *  8) +
            (cpf[4] *  7) +
            (cpf[5] *  6) +
            (cpf[6] *  5) +
            (cpf[7] *  4) +
            (cpf[8] *  3) +
            (cpf[9] *  2) ) * 10 ) % 11

        dígitoVerificacao1 == 10 ? dígitoVerificacao1 = 0 : null
        dígitoVerificacao2 == 10 ? dígitoVerificacao2 = 0 : null

        if(dígitoVerificacao1 == cpf[9] && dígitoVerificacao2 == cpf[10]){
            return true
        }else{
            return false
        }
    }

    static validarCNPJ(entradaCNPJ){
        let cnpj = entradaCNPJ.replaceAll(/[.\-_\s/]/gi,"").padStart(14,"0")
        let exp  = `${cnpj[0]}{14}|[a-z\W]`
        let exp2 = new RegExp(exp,'gi')
        if(exp2.test(cnpj)){ return false }

        let dígitoVerificacao1 =
        ( ( (cnpj[0] * 5) +
            (cnpj[1] * 4) +
            (cnpj[2] * 3) +
            (cnpj[3] * 2) +
            (cnpj[4] * 9) +
            (cnpj[5] * 8) +
            (cnpj[6] * 7) +
            (cnpj[7] * 6) +
            (cnpj[8] * 5) +
            (cnpj[9] * 4) +
            (cnpj[10] * 3) +
            (cnpj[11] * 2) ) * 10) % 11

        dígitoVerificacao1==10 ? dígitoVerificacao1=0 : null

        let dígitoVerificacao2=
        ( ( (cnpj[0] * 6) +
            (cnpj[1] * 5) +
            (cnpj[2] * 4) +
            (cnpj[3] * 3) +
            (cnpj[4] * 2) +
            (cnpj[5] * 9) +
            (cnpj[6] * 8) +
            (cnpj[7] * 7) +
            (cnpj[8] * 6) +
            (cnpj[9] * 5) +
            (cnpj[10] * 4) +
            (cnpj[11] * 3) +
            (cnpj[12] * 2) ) * 10) % 11

        dígitoVerificacao2==10 ? dígitoVerificacao2=0 : null

        if(dígitoVerificacao1 == cnpj[12] && dígitoVerificacao2 == cnpj[13]){
            return true
        }else{
            return false
        }
    }

    static validar(doc){
        let codefic = doc.replaceAll(/\D/gi,"")
        if(codefic.length <= 11){
            return this.validarCPF(codefic)
        }else{
            return this.validarCNPJ(codefic)
        }
    }

    static validarInput(){
        let num = this.value.replaceAll(/\D/gi,'')
        if(num.length === 11){
            Documento.validarCPF(num) ? $(this).css({color:"#000"}) : $(this).css({color:"#f00"})
            this.value = `${num.substr(0,3)}.${num.substr(3,3)}.${num.substr(6,3)}-${num.substr(9,2)}`
        }else if(num.length === 14){
            Documento.validarCNPJ(num) ? $(this).css({color:"#000"}) : $(this).css({color:"#f00"})
            this.value = `${num.substr(0,2)}.${num.substr(2,3)}.${num.substr(5,3)}/${num.substr(8,4)}-${num.substr(12,2)}`
        }else{
            $(this).css({color:"#000"})
            this.value = num
        }
    }
}
