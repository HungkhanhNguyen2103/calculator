import Tittle from './components/Tittle';
import Screen from './components/Screen';
import Number from './components/Number';
import { useState } from 'react';



function App() {

  //xuat ra man hinh
  const[numberScreen,setNumberScreen] = useState([])

  
  //  truoc khi renden len man hinh
   const[numberUnscreen,setNumberUnscreen] = useState([])
   

  //chuoi so number
  const[taskSave,setTaskSave] = useState([])

  //number1
  const[firstnumber,setFirstnumber] = useState('0')

  //number2
  const[secondnumber,setSecondnumber] = useState('0')


  //ket qua
  const[result,setResult]=useState('0')

  //minus
  const[toggleMinus,setToggleMinus] = useState(false)

  //xet number
  const[isnumber,setIsnumber] = useState(false)

  //bat tat man hinh
  const[toggleScreen,setToggleScreen] = useState(false)

  //dau bang
  const[toggleValue,setToggleValue] = useState(false)

  //doubleclick dau
  const[toggleRes,setToggleRes] = useState(false)

  //lam tron
  const[toggleRound,setToggleRound] = useState(false)


  //lam tron sau dau phay
  const[round,setRound] = useState('1')

  //dau truoc
  const[prevSign,setprevSign] = useState('')
  // dau sau
  const[newSign,setnewSign] = useState('')


    //so truoc
  const[newNum,setnewNum] = useState()

  const last = numberScreen[numberScreen.length-1]     
  

  const handleClickNumber=(value)=>{
  
   
      if(toggleValue){
        setToggleValue(false)
        setNumberScreen([
          value
        ])
        setNumberUnscreen([
          value
        ])
        setTaskSave([
          value
        ])
        setFirstnumber('0')
        setSecondnumber('0')
        setResult('0')

      }
      else{
        setToggleRes(false)

        //so truoc so sau
        setnewNum(value)
  
        if(toggleMinus && (firstnumber === '0' || secondnumber ==='0')){
            setNumberScreen([
              ...numberScreen,
              '-',
              value
            ]); 
            setTaskSave([
              ...taskSave,
              '-',
              value
              ]);
              
        }     
        else{
          setNumberScreen([
            ...numberScreen,
            value
          ]);   
          setTaskSave([
            ...taskSave,
            value
            ]);
           
          }
        setToggleMinus(false)    
        
      }
      if(!isnumber) setFirstnumber(taskSave.join('') + value)
      else setSecondnumber(taskSave.join('') + value)

      if(toggleRound) setRound(value)
  }

  const actionlistNumber=(value)=>{
   
      if(last === newNum){
        setnewSign(value)
        setNumberScreen([
        ...numberScreen,
        value
        ]);
      }
      else{
            if(!shouldComponentUpdate(value)){        
            setNumberScreen(numberScreen.pop())
            setNumberScreen([
            ...numberScreen,
            value
            ]);
            }      
          }  
  }

  const shouldComponentUpdate=(value)=>{
    setnewSign(value)
    setprevSign(newSign)
    if(prevSign === value) return false
  }

  const actionResult=(value)=>{
    setnewSign(value) 
    setprevSign(newSign)

      //set result = number
      const numF = + firstnumber;
      const numS = + secondnumber;
      const res = +result;
      onValue(numF,numS,res)

  
 }

 const onValue=(numF,numS,res)=>{
   //cong
    if(newSign === '+') {
    if(result === '0'){
      setResult(numF+numS)
      setFirstnumber((numF+numS).toString())
    }
    else{
      //neu fisrt number
      if(!isnumber) {
        setResult(res+(+numF))
        setSecondnumber((res+(+numF)).toString())
      }
      else{
        setResult(res+(+numS))
        setFirstnumber((res+(+numS)).toString())
      }
    }
    }  
    //tru
    if(newSign === '-') {
    if(result === '0'){
      setResult(numF-numS)
      setFirstnumber((numF-numS).toString())
    }
    else{
      //neu fisrt number
      if(!isnumber) {
        setResult(res-(+numF))
        setSecondnumber((res-(+numF)).toString())
      }
      else{
        setResult(res-(+numS))
        setFirstnumber((res-(+numS)).toString())
      }
    }
    }  
    //nhan 
    if(newSign === '*') {
    if(result === '0'){
      setResult(numF*numS)
      setFirstnumber((numF*numS).toString())
    }
    else{
      //neu fisrt number
      if(!isnumber) {
        setResult(res*(+numF))
        setSecondnumber((res*(+numF)).toString())
      }
      else{
        setResult(res*(+numS))
        setFirstnumber((res*(+numS)).toString())
      }
    }
    }  
    //chia
    if(newSign === '/') {
    if(result === '0'){
      setResult(numF/numS)
      setFirstnumber((numF/numS).toString())
      setSecondnumber(numS.toString())
    }
    else{
      // neu fisrt number
      if(!isnumber) {
        setResult(res/(+numF))
        setSecondnumber((res/(+numF)).toString())
      }
      else{
        setResult(res/(+numS))
        setFirstnumber((res/(+numS)).toString())
      }
    } 
    }
     //lay du
    if(newSign === '%') {
    if(result === '0' ){
      setResult(numF%numS)
      setFirstnumber((numF%numS).toString())
      setSecondnumber('0' + numS )
    }
    else{
      //neu fisrt number
      if(!isnumber) {
        setResult(res%(+numF))
        setSecondnumber((res%(+numF)).toString())
        setFirstnumber('0' + numF)
      }
      else{
        setResult(res%(+numS))
        setFirstnumber((res%(+numS)).toString())
        setSecondnumber('0' + numS)
      }
    } 
    }  
    //mu
    if(newSign === '^') {
    if(result === '0' ){   
      const res = Math.pow(numF,numS)
      setResult(res)
      setFirstnumber(res.toString())

    }
    else{
      //neu fisrt number
      if(!isnumber) {
        const res1 = Math.pow(res,(+numF))
        setResult(res1)
        setSecondnumber(res1.toString())
      }
      else{
        const res2 = Math.pow(res,(+numS))
        setResult(res2)
        setFirstnumber(res2.toString())
      }
    } 
    }  
 }

  const handleClickRound=()=>{
    if(!toggleScreen){
      const r = Math.pow(10,+round);
      if(!toggleRound) setResult(((Math.round(+result*r)/r).toFixed(+round)))
      else{
        if(isnumber) setResult(firstnumber)
        else setResult(secondnumber)
      }
    }
    setToggleRound(!toggleRound)
  }
 
  const handleClickMinus=()=>{
    setToggleMinus(!toggleMinus)
  }

  const handleClickSign=(value)=>{



    setToggleValue(false)
    // xet number thu nhat hay thu hai
    if(last === newNum) {
      setIsnumber(!isnumber)
    }
    //bat tat funcion man hinh
    setToggleScreen(true)
    //bat tat nut
    
    //them dau
    actionlistNumber(value)


    //taskSave ve mac dinh
    setTaskSave([])

    //ketqua
    if(!toggleRes) {
      actionResult(value)
    }

    setNumberUnscreen([
      ...numberScreen,
      value
    ])

    //khoa ket qua
    setToggleRes(true)


     
  }

  const handleClickDel=()=>{
    if(toggleScreen){
      
      const numFi = firstnumber.toString().length-1;
      const numSe = secondnumber.toString().length-1;
  
      const index = taskSave.length-1;

      const index1 = numberScreen.length-1;
      if(last === newSign){
              if(!isnumber) setFirstnumber(firstnumber.slice(0,numFi))      
              else setSecondnumber(secondnumber.slice(0,numSe))
        }
      else{
        if(!isnumber) setFirstnumber(firstnumber.slice(0,numFi))
        else setSecondnumber(secondnumber.slice(0,numSe))
        if(firstnumber !== '0' && secondnumber !== '0') setNumberScreen(numberScreen.slice(0,index1))
      }
    setTaskSave(taskSave.slice(0,index));   
    if(numFi === 0) setFirstnumber('0')
    if(numSe === 0) setSecondnumber('0')  

    // set so am
    if(numFi === 1 && (+firstnumber) < 0) setFirstnumber('0')  
    if(numSe === 1 && (+secondnumber) < 0) setSecondnumber('0')  
    }
  }

  const handleClickDelAll=()=>{
    window.location.reload();
  }


  const handleClickResult=()=>{
    if(!toggleValue) {
      setResult(firstnumber)
    }
    //bat tat result vs number
    setToggleValue(true)
    
    //tra chuoi so mac dinh
    // setTaskSave([])

    //set result = number
    const numF = + firstnumber;
    const numS = + secondnumber;
    const res = +result;
    if(!toggleRes) onValue(numF,numS,res)
 
     //tat mang man hinh
     setToggleScreen(false)
     
     //khoa ket qua
    setToggleRes(true)

    //setSave
    setTaskSave([])
  }


  return (
    <div className="body">
        <Tittle/>
        <Screen 
        numberUnscreen={numberUnscreen}
        result={result}
        firstnumber={firstnumber}
        secondnumber={secondnumber}
        isnumber={isnumber}
        toggleScreen={toggleScreen}
        toggleValue={toggleValue}
        toggleRound={toggleRound}
        toggleMinus={toggleMinus}
        round={round}
        />
        <Number
        handleClickNumber={handleClickNumber}
        handleClickSign={handleClickSign}
        handleClickDel={handleClickDel}
        handleClickDelAll={handleClickDelAll}
        handleClickResult={handleClickResult}
        handleClickRound={handleClickRound}
        handleClickMinus={handleClickMinus}
        />
      </div>
  )
}

export default App;
