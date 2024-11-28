import estiloAlerta from './alerta.module.css';
import Image from 'next/image';
import xis from '../../../public/x.png'


export default function Alerta(props) {


    

    return (


        <section className={`${estiloAlerta.boxAlerta} ${props.alertaStyle}`}>

            <div className={estiloAlerta.MolduraAlerta}>

                <div className={estiloAlerta.boxTexto}>

                    <Image className={estiloAlerta.img} src={xis}/>

                    <h1>Item nao encontrado</h1>

                    <button onClick={props.AlertaFechar} className={estiloAlerta.btn}>fechar</button>

                </div>

            </div>

        </section>
    )


}