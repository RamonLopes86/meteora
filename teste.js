const teste = [

{

    nome:'pedro',
    idade:25
},

{
    nome:'ramon',
    idade:38
},

{
    nome:'yuri',
    idade:40
}


]





function buscar(index){

    const filtro = teste.filter((teste)=> teste.nome === index)


    const resultado = filtro.map((filtro)=> filtro)


    if(resultado.length === 0){

        console.log('nao encontrado')
    }else{

        return resultado
    }

    

}


console.log(buscar('yuri'))


