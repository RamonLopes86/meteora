import estiloBomb from './bombando.module.css';
import Card from '../card-produtos/card';



export default function Bombando(props){

    return(

        <section id='idbombando' className={estiloBomb.boxPai}>

                <h1 id='idprodutos'>Produtos que estão bombando</h1>

                
                <div className={estiloBomb.boxCard}>

                    <Card
                    
                    array={props.array}

                    click={props.clickTopo}
                    
                    />

                </div>



        </section>
    )
}