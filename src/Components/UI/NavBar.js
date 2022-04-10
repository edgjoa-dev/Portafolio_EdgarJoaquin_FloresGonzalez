import React, { useEffect, useState } from 'react'
import { Link} from "react-scroll";
import { GiHamburgerMenu } from 'react-icons/gi';
import 'animate.css';
import '../../Styles/main.scss';


export const NavBar = () => {

    const [ToggleMenu, setToggleMenu] = useState(false);
    const [ScreenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!ToggleMenu);
    }

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth( window.innerWidth );
        }

            window.addEventListener( 'resize', changeWidth );

        return () =>{
            window.removeEventListener( 'resize', changeWidth );
        }

    }, []);


    return (
        <div>
            <nav className='box__shadow'>
            { (ToggleMenu || ScreenWidth > 680 ) && (
                <div className='nav__links' >
                    <Link
                        className="navbar__item"
                        to='home__screen'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        onClick={()=>setToggleMenu(false)}
                    >
                    home
                    </Link>
                    <Link
                        className="navbar__item"
                        to='about__screen'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        onClick={()=>setToggleMenu(false)}
                    >
                    Acerca
                    </Link>

                    <Link
                        className="navbar__item"
                        to='experience__screen'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        onClick={()=>setToggleMenu(false)}
                    >
                    experiencia
                    </Link>

                    <Link
                        className="navbar__item"
                        to='portfolio__screen'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        onClick={()=>setToggleMenu(false)}
                    >
                    portafolio
                    </Link>

                    <Link
                        className="navbar__item"
                        to='contact__screen'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        onClick={()=>setToggleMenu(false)}
                    >
                    contacto
                    </Link>
                </div>
                )}
                </nav>
                        <div className='btn__menu' onClick={toggleNav}>
                            <i>
                                <GiHamburgerMenu />
                            </i>
                        </div>
            </div>
    )
}