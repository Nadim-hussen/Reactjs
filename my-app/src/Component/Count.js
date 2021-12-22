import { useDispatch, useSelector } from 'react-redux';
import { incNumber,decNumber,mulNumber,divNumber } from '../actions/index';
import '../App.css';
function Count() {
    const myState = useSelector((state)=>state.changeNumber)
    const dispatch = useDispatch();
  return (
    <div className="Count">
      <div className="container d-flex justify-content-center mt-4 mx-auto"> 
        <button className="btn btn-dark mx-3" onClick={()=>dispatch(incNumber(5))}> increment by 5</button>
        <button className="btn btn-dark mx-3" onClick={()=>dispatch(mulNumber(5))}> multiply by 5</button>
        <h1 className="d-block mx-3">{myState}</h1>
        <button className="btn btn-dark mx-3" onClick={()=>dispatch(divNumber(5))}> division by 5</button>
        <button className="btn btn-dark mx-3" onClick={()=>dispatch(decNumber())}> decrement by 1</button>
      </div>

    </div>
  );
}

export default Count;