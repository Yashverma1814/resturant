import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/Card';

function App() {
  const [dataArr, setDataArr] = useState([]);
  const [star,setStar] = useState(0);
  const [pay,setPay] = useState("");
  const [page,setPage] = useState(1);
  const fetchData =()=>{
    axios.get(" http://localhost:3002/data?_page="+page+"&_limit=5").then((res)=>console.log(setDataArr(res.data)))
  }
  useEffect(()=>{
    fetchData();
  },[page])
  return (
    <div className="App">
      <center>
      <div>
        <button onClick={()=>setStar(4)}>4*</button>
        <button onClick={()=>setStar(3)}>3*</button>
        <button onClick={()=>setStar(2)}>2*</button>
        <button onClick={()=>setStar(1)}>1*</button>
        <button onClick={()=>setStar(0)}>Clear</button>
      </div>
      <br />
      <div>
        <button onClick={()=>setPay("cash")}>Cash</button>
        <button onClick={()=>setPay("upi")}>UPI</button>
        <button onClick={()=>setPay("card")}>Card</button>
        <button onClick={()=>setPay("")}>Clear</button>
      </div>
      
      </center>
      <br /><br /><br />
      <div className='cards'>
        {dataArr.filter((d)=>{return (d.rating>=star)&&(d.payment.includes(pay))}).map((el)=><div key={el.id}><Card {...el} /></div>)}
      </div>
      <br /><br /><br />
      <center>
      <div>
        <button disabled={page===1} onClick={()=>setPage(prevState => prevState-1)}>Prev</button>
        <button>{page}</button>
        <button disabled={page===4} onClick={()=>setPage(prevState => prevState+1)} >Next</button>
      </div>
      </center>
    </div>
  );
}

export default App;
