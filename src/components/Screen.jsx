import highlight from '../image/Highlight.png';
import Minus from '../image/minus.png';

export default function Screen(props){
    return(
        <div className="body__display">
          {
            props.toggleMinus ? (
              <div className="body__display--minus"><img src={Minus}  alt="minus"/></div>
            ) : (
              <></>
            )
          }
          {
            props.toggleRound ? (
              <div className="body__display--round">R x {props.round}</div>
            ) : (
              <></>
            )
          }
          {
            !props.toggleScreen ?(
              <div className="body__display--text"><span></span></div>
            ) : (
              <div className="body__display--text"><span>{props.numberUnscreen}</span></div>
            )
          }
          <img src={highlight} alt="highlight" />
          {
            ! props.toggleValue ? (
              ! props.isnumber ? (
                <div className="body__display--result" ><span>{props.firstnumber}</span></div>
              ) : (
                <div className="body__display--result" ><span>{props.secondnumber}</span></div>
              ) 
            ) : (
              <div className="body__display--result" ><span>{props.result}</span></div>
            )
          }
        </div>
    )
}