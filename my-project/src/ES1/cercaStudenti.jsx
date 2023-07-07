import { useState, useEffect } from 'react'
import MostraStudenti from './MostraStudenti';
import json from './studenti.json';

function CercaStudenti() {

    const [cercaStud, setCercaStud] = useState('')
    const [arrayRicerca, setArrayRicerca] = useState([])

    function addCercaStud(e) {
        setCercaStud(e.target.value)
    }

    function cerca() {
        console.log(cercaStud);
        setArrayRicerca(json.filter((el, i) => el.fullname.toLowerCase().includes(cercaStud.toLowerCase())));
        console.log(arrayRicerca);
    }


  return (
    <> 
        <div className='w-full bg-slate-100 rounded-l flex flex-row p-2'>
            <input type="text" className='flex grow outline-none px-3' placeholder='Cerca uno studente' onChange={addCercaStud}/>
            <button className='p-2 rounded-r bg-slate-800 text-white' onClick={cerca}> Cerca</button>
        </div>
        <MostraStudenti json={json} cercaStud={cercaStud} arrayRicerca={arrayRicerca}/> 
    </>
  );
}

export default CercaStudenti;