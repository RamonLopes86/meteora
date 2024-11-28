
import estiloCategoria from './categoria.module.css';
import Image from 'next/image';
import oculos from '../../../public/categoria-oculos.png'
import bolsas from '../../../public/categoria-bolsa.png'
import casacos from '../../../public/categoria-casacos.png'
import camisetas from '../../../public/categoria-camiseta.png'
import calcas from '../../../public/categoria-calcas.png'
import calcados from '../../../public/categoria-calcados.png'


export default function Categoria(props) {

    return (


        <section className={estiloCategoria.boxPai}>

                <h1>BUSQUE POR CATEGORIA</h1>

            <div className={estiloCategoria.boxFilho}>

                <div onClick={()=> props.buscaProdutos('Óculos Redondo')} className={estiloCategoria.Card}>

                    <Image alt='imagem' className={estiloCategoria.img} src={oculos} />
                    <h1>Óculos</h1>
                </div>

                <div onClick={()=> props.buscaProdutos('Bolsa Coringa')} className={estiloCategoria.Card}>

                    <Image alt='imagem' className={estiloCategoria.img} src={bolsas} />
                    <h1>Bolsas</h1>
                </div>

                <div onClick={()=> props.buscaProdutos('Jaqueta Jeans')} className={estiloCategoria.Card}>

                    <Image alt='imagem' className={estiloCategoria.img} src={casacos} />
                    <h1>Casacos</h1>
                </div>

                <div onClick={()=> props.buscaProdutos('Camiseta Conforto')} className={estiloCategoria.Card}>

                    <Image alt='imagem' className={estiloCategoria.img} src={camisetas} />
                    <h1>Camisetas</h1>
                </div>

                <div onClick={()=> props.buscaProdutos('Calça Alfaiataria')} className={estiloCategoria.Card}>

                    <Image alt='imagem' className={estiloCategoria.img} src={calcas} />
                    <h1>Calças</h1>
                </div>

                <div onClick={()=> props.buscaProdutos('Tênis Chunky')} className={estiloCategoria.Card}>

                    <Image alt='imagem' className={estiloCategoria.img} src={calcados} />
                    <h1>Calçados</h1>
                </div>

            </div>




        </section>
    )

}