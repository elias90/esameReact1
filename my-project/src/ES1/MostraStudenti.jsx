import { useState, useEffect } from 'react'

function MostraStudenti(props) {

  return (
    <div>
      <ul className="flex flex-col gap-2 shrink">
        { 
            props.cercaStud == '' ? 
                props.json.map((el, i) => (
                    <li key={i} className={el.gender === "m" ? "bg-blue-200 p-2 text-left rounded" : "bg-pink-200 p-2 text-left rounded"}>
                      Nome e Congome: {el.fullname} / Media: {el.avg}
                    </li>
                  ))
            : props.arrayRicerca.length === 0 ?
                    <div>Nessun tovato</div>
            :  props.arrayRicerca.map((el, i) => (
                <li key={i} className={el.gender === "m" ? "bg-blue-200 p-2 text-left rounded" : "bg-pink-200 p-2 text-left rounded"}>
                  Nome e Congome: {el.fullname} / Media: {el.avg}
                </li>
              ))
        
        }
      </ul>
    </div>
  );
}

export default MostraStudenti;