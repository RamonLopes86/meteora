import estiloSlide from "./slide.module.css";
import BannerG1 from '../../../public/banner1-desktop.png'
import BannerG2 from '../../../public/banner2-desktop.png'
import BannerG3 from '../../../public/banner3-desktop.png'
import BannerP1 from '../../../public/banner1-mobile.png'
import BannerP2 from '../../../public/banner2-mobile.png'
import BannerP3 from '../../../public/banner3-mobile.png'
import seta from '../../../public/seta-direita.png'
import Image from "next/image";
import { useEffect, useState, useRef } from "react";








export default function SlideBar() {

    const [b1 , setB1] = useState(BannerG1)
    const [b2 , setB2] = useState(BannerG2)
    const [b3 , setB3] = useState(BannerG3)


    const boxRef = useRef(null)

    const [count, setCount] = useState(0)

    const [ball, setBall] = useState()

    const loop = useRef()



    function clickBall(index) {

        setBall(index)

        if (index === 0) {


            boxRef.current.scrollLeft = 0


        } else if (index === 1) {


            const imagem = boxRef.current.scrollWidth / 3

            let position = imagem - (boxRef.current.scrollLeft % imagem)


            if (boxRef.current.scrollLeft === 0) {


                boxRef.current.scrollLeft += position

            } else if (boxRef.current.scrollWidth) {

                boxRef.current.scrollLeft -= position

            }

        } else if (index === 2) {



            boxRef.current.scrollLeft += boxRef.current.scrollWidth

        }



    }





    function testeMais() {

        if (boxRef.current.scrollLeft + boxRef.current.offsetWidth >= boxRef.current.scrollWidth) {

            boxRef.current.scrollLeft = 0



        } else {

            boxRef.current.scrollLeft += boxRef.current.offsetWidth

        }



    }



    function testeMenos() {

        if (boxRef.current.scrollLeft === 0) {

            boxRef.current.scrollLeft += boxRef.current.scrollWidth

        } else {

            boxRef.current.scrollLeft -= boxRef.current.offsetWidth

        }

    }


    function intervalo() {


        if (boxRef.current.scrollLeft + boxRef.current.offsetWidth >= boxRef.current.scrollWidth) {

            boxRef.current.scrollLeft = 0


        } else {

            boxRef.current.scrollLeft += boxRef.current.offsetWidth

        }

    }


   



    useEffect(() => {

         loop.current = setInterval(() => {

            intervalo()


        }, 8000)

        return () => clearInterval(loop.current)

    }, [])



    useEffect(() => {

        const slide = setInterval(() => {

            setCount(prev => {

                if (prev >= 2) {

                    return 0
                }

                return prev + 1
            })



            setTimeout(() => {


            }, 1000)

        }, 10000)

        return () => clearInterval(slide)

    }, [])


    function mais() {

        setCount((prev) => prev + 1)


        if (count >= 2) {

            setCount(0)

        }

    }


    function menos() {

        setCount((prev) => prev - 1)


        if (count <= 0) {


            setCount(2)
        }
    }


  



function imageResponsive(){

       if(window.innerWidth <= 1200){

        setB1(BannerP1)
        setB2(BannerP2)
        setB3(BannerP3)

       }else{

        setB1(BannerG1)
        setB2(BannerG2)
        setB3(BannerG3)
    }

}




   useEffect(()=>{

    window.addEventListener('resize' , imageResponsive)


    },[])
    



    return (

        <section className={estiloSlide.boxPai}>


            <div className={estiloSlide.boxImagem} ref={boxRef}>


                {/* <Image alt="imgBanner" src={imagens[count].ft} className={`${estiloSlide.imgSlide} `} /> */}


                <div className={estiloSlide.cardImg}>
                    <Image priority className={estiloSlide.imgSlide} src={b1} />
                </div>
                <div className={estiloSlide.cardImg}>
                    <Image priority  className={estiloSlide.imgSlide} src={b2} />

                    <div className={estiloSlide.boxTx}>
                        <h1>Coleção atemporal</h1>
                        <p>Estilo e qualidade para durar</p>
                    </div>
                </div>
                <div className={estiloSlide.cardImg}>
                    <Image priority  className={estiloSlide.imgSlide} src={b3} />

                    <div className={estiloSlide.boxTx}>
                        <h1>Coleção atemporal</h1>
                        <p>Estilo e qualidade para durar</p>
                    </div>
                </div>



                <Image priority alt="seta" onClick={testeMais} className={estiloSlide.seta} src={seta} />
                <Image priority alt="seta" onClick={testeMenos} className={estiloSlide.setaEsq} src={seta} />


                <div className={estiloSlide.control}>

                    <div onClick={() => clickBall(0)} className={`${estiloSlide.ball} ${ball === 0 ? estiloSlide.ballActive : estiloSlide.ballInative} `}></div>
                    <div onClick={() => clickBall(1)} className={`${estiloSlide.ball} ${ball === 1 ? estiloSlide.ballActive : estiloSlide.ballInative} `} ></div>
                    <div onClick={() => clickBall(2)} className={`${estiloSlide.ball} ${ball === 2 ? estiloSlide.ballActive : estiloSlide.ballInative} `}></div>

                </div>


            </div>




           
        </section>






    )

}



