import React from 'react';
import {ReactComponent as ImgKali} from "../../../../../assets/img/card/avast.svg"

const BannerTop = () =>{
    return (<>
    <aside className="container attack__banner--reset">
        <div className="row">
          <div className="col-lg-12">
            <ImgKali className="img-responsive img-logo-cofre"
              aria-label="Aguardando propaganda...! [Parceiros]" />
          </div>
        </div>
      </aside>
    </>);
}

export default BannerTop;