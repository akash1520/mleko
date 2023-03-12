import { Typography } from '@mui/material'
import React from 'react'
import "./speciality.css"

export default function Speciality() {
    return (
        <>
            <div className='parts'>
                <img className='imgs' src='https://static.wixstatic.com/media/f306c3_1244ab931fad42fc95386d755a7b25fb~mv2.png/v1/crop/x_0,y_10,w_487,h_715/fill/w_479,h_702,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/mleko%20website.png' />
                <div className='home-text'>
                    <Typography variant="h2" style={{ fontFamily: "wfont_cc17d2_8b9fd51a4cb64333a1bbbfdb837d4696" }}>
                        Specialty Coffee House
                    </Typography>
                    <Typography className="oneandhalf" variant='h5' style={{ fontFamily: " cormorantgaramond-light,cormorantgaramond,'cormorant garamond',serif" }}>
                        <br />
                        We craft every single beverage at a time with attention. From the ingredients that go into making a cup of coffee to the state-of-the-art machinery necessary for extracting the right amount of flavour from the beans, we strive to serve the best quality speciality coffee in Ahmedabad. For this, we source our speciality beans from Kokoro Coffee and Kalledevarapura Estate, Karnataka. To brew a perfect cup of coffee, we use a La Marzocco Linea Mini espresso machine.
                    </Typography>
                </div>
            </div>
            

            <div style={{ textAlign: "center" }}>
                <Typography variant='h1' style={{ fontFamily: "wfont_cc17d2_8b9fd51a4cb64333a1bbbfdb837d4696" }}>Manual Brew</Typography>
                <div className='grid-container'>
                    <div>
                        <img src='https://static.wixstatic.com/media/f306c3_c60ddf8378d04fbd8c03a0bde0e76622~mv2.jpg/v1/crop/x_0,y_811,w_3456,h_3562/fill/w_432,h_445,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_4355.jpg' />
                        <div>
                            <Typography variant='h4'>V60 POUR OVER</Typography>
                            <Typography variant="subtitle2">
                                This single cup brewing method produces a delicate and sophisticated cup of coffee.
                            </Typography>
                            <br />
                            <Typography variant='body1' style={{ fontFamily: "wfont_cc17d2_8b9fd51a4cb64333a1bbbfdb837d4696" }}>
                                An inverted , cone-shaped funnel  slowly dripping
                                extracted coffee through a filter. Hot water is poured evenly over coffee grounds in a paper filter and with gravity, the breled coffee drips slowly into the cup.
                            </Typography>
                            <br />
                            <Typography variant="h6">
                                Brewing Time: 2:30 - 3:30 minutes
                            </Typography>
                        </div>
                    </div>
                    <div>
                        <img src="https://static.wixstatic.com/media/f306c3_190b54cffb4b4666a96f5ad916aca9c1~mv2.jpg/v1/fill/w_445,h_445,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_4340.jpg" />
                        <div>
                            <Typography variant='h4'>V60 POUR OVER</Typography>
                            <Typography variant="subtitle2">
                                This single cup brewing method produces a delicate and sophisticated cup of coffee.
                            </Typography>
                            <br />
                            <Typography variant='body1' style={{ fontFamily: "wfont_cc17d2_8b9fd51a4cb64333a1bbbfdb837d4696" }}>
                                An inverted , cone-shaped funnel  slowly dripping
                                extracted coffee through a filter. Hot water is poured evenly over coffee grounds in a paper filter and with gravity, the breled coffee drips slowly into the cup.
                            </Typography>
                            <br />
                            <Typography variant="h6">
                                Brewing Time: 2:30 - 3:30 minutes
                            </Typography>
                        </div>
                    </div>
                    <div>
                        <img src="https://static.wixstatic.com/media/f306c3_3b8059d452a24f01b977d4c0729758c1~mv2.jpeg/v1/fill/w_445,h_445,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202022-11-15%20at%202_30_38%20PM.jpeg" />
                        <div>
                            <Typography variant='h4'>V60 POUR OVER</Typography>
                            <Typography variant="subtitle2">
                                This single cup brewing method produces a delicate and sophisticated cup of coffee.
                            </Typography>
                            <br />
                            <Typography variant='body1' style={{ fontFamily: "wfont_cc17d2_8b9fd51a4cb64333a1bbbfdb837d4696" }}>
                                An inverted , cone-shaped funnel  slowly dripping
                                extracted coffee through a filter. Hot water is poured evenly over coffee grounds in a paper filter and with gravity, the breled coffee drips slowly into the cup.
                            </Typography>
                            <br />
                            <Typography variant="h6">
                                Brewing Time: 2:30 - 3:30 minutes
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>

            <div className='parts'>
            <img className='img1' src='https://static.wixstatic.com/media/f306c3_9c8e59ba84474793b353ec380c171808~mv2.png/v1/crop/x_0,y_0,w_540,h_648/fill/w_440,h_529,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot%202022-08-29%20165301.png'/>
                <div className='home-text'>
                    <Typography variant="h2" style={{ fontFamily: "wfont_cc17d2_8b9fd51a4cb64333a1bbbfdb837d4696" }}>
                    OUR BEANS 
                    </Typography>
                    <Typography className="oneandhalf" variant='h5' style={{ fontFamily: " cormorantgaramond-light,cormorantgaramond,'cormorant garamond',serif" }}>
                        <br />
                        Coffee beans are the single most important contributing factor in determining how good a cup of coffee is. We, at Mleko, out of the utmost care for our customers, ensure that we proudly differentiate ourselves from other cafes in Ahmedabad, by sourcing our beans from kokoro . But hey, you are not obligated to take our word for it. You can just visit us and find out for yourself, the quality and taste of Kokoro beans.
                    </Typography>
                </div>
            </div>           

        </>
    )
}
