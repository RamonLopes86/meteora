import estiloTopo from './topo.module.css';
import Image from 'next/image';
import logo from '../../../public/logo-meteora.png'
import cardapio from '../../../public/iconCardapio.png'
import React , {useEffect, useState} from 'react';



export default function Topo(props) {

    const [menu , setMenu] = useState(estiloTopo.menuFechado)

    function ClickMenu(){

        setMenu(menu ===  estiloTopo.menuFechado ? estiloTopo.menuAberto : estiloTopo.menuFechado)

    }



    useEffect(()=>{

       function clickOutMenu(){

            if(window.innerWidth > 735){

                setMenu(estiloTopo.menuFechado)
            }

       }
     
     
         window.addEventListener('resize' , clickOutMenu)
    },[])
        
        


    return (

        <section id='idtopo'  className={`${estiloTopo.boxMaior} ${menu}`}>

            <section className={estiloTopo.boxPai}>
                <div className={estiloTopo.boxNav}>
                    <Image className={estiloTopo.imgLogo} src={logo} />
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Lojas</li>
                            <li>Novidades</li>
                            <li>Promoção</li>
                        </ul>
                    </nav>
                </div>
                <div className={estiloTopo.boxBusca}>
                    <input onChange={props.change}  value={props.inputTx}  placeholder='digite o produto' type="text" name="buscar" id="idbuscar" autoComplete='off' />
                    <button onClick={props.clickBusca} className={estiloTopo.btnBusca}>Buscar</button>
                </div>
            
            </section>

            <section className={estiloTopo.boxEscondido}>

                <Image onClick={ClickMenu} className={estiloTopo.iconMenu} src={cardapio}/>

                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Lojas</li>
                            <li>Novidades</li>
                            <li>Promoção</li>
                        </ul>
                    </nav>

                    <div className={estiloTopo.boxBuscaEscondido}>

                        <input onChange={props.change} value={props.inputTx} autoComplete='off' placeholder='digite o produto' type="text" name="buscaEscondido" id="idbuscaescondio" />
                        <button onClick={props.clickBusca} className={estiloTopo.btnEscondido}>Buscar</button>

                    </div>
            </section>

        </section>
    )
}