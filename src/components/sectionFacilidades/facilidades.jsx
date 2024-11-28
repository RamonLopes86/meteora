import estiloFacilidades from './facilidades.module.css';
import Image from 'next/image';
import pix from '../../../public/pixeis.png'
import troca from '../../../public/trocacol.png'
import sustenta from '../../../public/sustentabilidade.png'
import React, { useState, useRef, useEffect } from 'react';


export default function Facilidades() {

    const boxRef = useRef(null)
    const [condicao , setCondicao] = useState(false)
    


    useEffect(()=>{

        const EventoAnima = () =>{

        const boxRefTopo = boxRef.current.getBoundingClientRect().top

            if(boxRefTopo < window.innerHeight && boxRefTopo > 0){

                setCondicao(true)
                

            }else{

                setCondicao(false)
                console.log(window.innerHeight)
                console.log(boxRefTopo)
            }


        }


        window.addEventListener('scroll' , EventoAnima)


        return ()=>{

                window.removeEventListener('scroll' , EventoAnima)

        }

    },[])




    return (
        <section className={estiloFacilidades.boxPai}>

            <section ref={boxRef} className={condicao ? estiloFacilidades.entra : estiloFacilidades.sai}>

                <h1>Conheça todas as nossas facilidades</h1>

                <div className={estiloFacilidades.boxImagens}>

                    <div className={estiloFacilidades.boxFilho}>
                        <Image className={estiloFacilidades.img} src={pix} />

                        <div>
                            <h3>pague pelo pix</h3>
                            <p>Ganhe 5% em pagamento via pix</p>
                        </div>

                    </div>

                    <div className={estiloFacilidades.boxFilho}>
                        <Image className={estiloFacilidades.img} src={troca} />

                        <div>
                            <h3>Troca grátis</h3>
                            <p>Fique livre para trocar em 30 dias</p>
                        </div>

                    </div>

                    <div className={estiloFacilidades.boxFilho}>
                        <Image className={estiloFacilidades.img} src={sustenta} />

                        <div>
                            <h3>Sustentabilidade</h3>
                            <p style={{ maxWidth: '250px' }}>Moda responsável, que respeita o meio ambiente</p>
                        </div>

                    </div>



                </div>
            </section>



        </section>
    )
}