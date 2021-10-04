import Minus from '../image/minus.png';
export default function Number(props){
    return (
        <div className="body__number">
          <button type="button" className="body__item " onClick={props.handleClickDel}><span>c</span></button>
          <button type="button" className="body__item number--0" onClick={(value)=>props.handleClickNumber(0)}><span>0</span></button>
          <button type="button" className="body__item number--equal body--equal" onClick={props.handleClickResult}><span>=</span></button>
          <button type="button" className="body__item" onClick={props.handleClickRound}><span>r</span></button>
          <button type="button" className="body__item" onClick={props.handleClickMinus}><img src={Minus}  alt="minus"/></button>
          <button type="button" className="body__item" onClick={props.handleClickDelAll}><span>ac</span></button>
          <button type="button" className="body__item" onClick={(value)=>props.handleClickSign('^')}><span>^</span></button>
 
          <button type="button" className="body__item" onClick={(value)=>props.handleClickSign('%')}><span>%</span></button>

          <button type="button" className="body__item" onClick={(value)=>props.handleClickSign('/')}><span>/</span></button>

          <button type="button" className="body__item"onClick={(value)=>props.handleClickSign('*')}><span>*</span></button>

          <button type="button" className="body__item" onClick={(value)=>props.handleClickNumber(7)}><span>7</span></button>
          <button type="button" className="body__item"onClick={(value)=>props.handleClickNumber(8)}><span>8</span></button>
          <button type="button" className="body__item" onClick={(value)=>props.handleClickNumber(9)}><span>9</span></button>

          <button type="button" className="body__item" onClick={(value)=>props.handleClickSign('-')}><span>-</span></button>

          <button type="button" className="body__item" onClick={(value)=>props.handleClickNumber(4)}><span>4</span></button>
          <button type="button" className="body__item" onClick={(value)=>props.handleClickNumber(5)}><span>5</span></button>
          <button type="button" className="body__item" onClick={(value)=>props.handleClickNumber(6)}><span>6</span></button>

          <button type="button" className="body__item" onClick={(value)=>props.handleClickSign('+')}><span>+</span></button>

          <button type="button" className="body__item" onClick={(value)=>props.handleClickNumber(1)}><span>1</span></button>
          <button type="button" className="body__item"onClick={(value)=>props.handleClickNumber(2)}><span>2</span></button>
          <button type="button" className="body__item" onClick={(value)=>props.handleClickNumber(3)}><span>3</span></button>
          <button type="button" className="body__item" onClick={(value)=>props.handleClickNumber('.')}><span>.</span></button>
        </div>
    )
}