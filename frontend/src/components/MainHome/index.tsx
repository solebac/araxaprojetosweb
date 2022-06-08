import * as React from 'react';
import Portifolio from '../conteudo/Portifolio';
import Easy from '../conteudo/Easy';
import Technology from '../conteudo/Technology';
import "../../assets/css/recursos.css";

const MainHome = () => {
    return(
        <>
            <Portifolio />
            <Easy />
            <Technology />
        </>
    );
}
export default MainHome;