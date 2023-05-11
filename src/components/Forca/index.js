import f0 from "../../img/assets/forca0.png"
import f1 from "../../img/assets/forca1.png"
import f2 from"../../img/assets/forca2.png"
import f3 from"../../img/assets/forca3.png"
import f4 from"../../img/assets/forca4.png"
import f5 from"../../img/assets/forca5.png"
import f6 from"../../img/assets/forca6.png"

import "./index.css"

const levelImages = [f0, f1, f2, f3, f4, f5, f6]

export default function Forca({level = 0}) {

    // props.level == corresponde a imagem que a forca ira exibir! (Padrao = 0);

    return (
        <img className="forca" src={levelImages[level]} alt="Forca"></img>
    ) 

}