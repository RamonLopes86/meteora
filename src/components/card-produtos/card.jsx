import estiloCard from './card.module.css';
import colecao from '@/colecao/colecao';
import Image from 'next/image';




export default function Card(props){



    return(

        <section className={estiloCard.boxMoldura}>

                {

                props.array.map((array , index)=>
                
                    <div className={estiloCard.Moldura} key={index}>

                        <Image alt='imagem' className={estiloCard.imgCard} src={array.img}/>
                        <h1>{array.titulo}</h1>
                        <p>{array.paragrafo}</p>
                        <span>R$ {array.preco}</span>
                        <button>Ver mais</button>

                    </div>


                )

                    
            }   

            <button onClick={props.click} className={estiloCard.botao}>

                <p className={estiloCard.tx}>click para nova busca</p>

            </button>
                
        </section>

)


}