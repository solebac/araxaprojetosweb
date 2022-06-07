import * as React from 'react';
import Portifolio from '../conteudo/Portifolio';
import "../../assets/css/recursos.css";
import Easy from '../conteudo/Portifolio/Easy';

const MainHome = () => {
    return(
        <>
            <Portifolio />
            <Easy />
        </>
    );
}
export default MainHome;