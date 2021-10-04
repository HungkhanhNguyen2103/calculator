import title from '../image/dribbble.png';
import red from '../image/btn red.png';
import shine from '../image/shine.png';
import yellow from '../image/btn yellow.png';
import green from '../image/btn green.png';

export default function Tittle(){
    return(
        <div className="body__title">
          <div className="body__btn">
            <img src={red} alt="red" />
            <img src={shine} alt="shine" className="red" />
            <img src={shine} alt="shine" className="red__down" />
            <img src={yellow} alt="yellow" />
            <img src={shine} alt="shine" className="yellow" />
            <img src={shine} alt="shine" className="yellow__down" />
            <img src={green} alt="green" />
            <img src={shine} alt="shine" className="green" />
            <img src={shine} alt="shine" className="green__down" />
          </div>
          <div className="body__title--img"><img src={title} alt="title" /></div>
        </div>
    )
}