import { useState, useEffect } from "react"

function Main2(props) {

    const [nomeLibro, setLibro] = useState(null);
    const [nomeAutore, setAutore] = useState(null);
    const [arrayRicerca, setArrayRicerca] = useState([]);

    function fnLibro(e) {
        setLibro(e.target.value)
    }

    function fnAutore(e) {
        setAutore(e.target.value)
    }

    function cercaLibro() {
        // svuoto l'array ad ogni click
        setArrayRicerca([])
    
        // se i due inputo sono vuoti svuoto l'array
        if (!nomeAutore && !nomeLibro) {
            setArrayRicerca([])
        } else {
            setArrayRicerca(
                props.libri.filter((el, i) =>
                    (nomeLibro && el.titolo.toLowerCase().includes(nomeLibro.toLowerCase())) ||
                    (nomeAutore && el.autore.toLowerCase().includes(nomeAutore.toLowerCase()))
                )
            );
        }
    }

    function cancellaRisultati() {
        setArrayRicerca([])
    }

    return (
        <>
            <div className="container flex flex-col gap-2">
                <div className="flex flex-row justify-between gap-2">
                    <input type="text" placeholder="Inserisci Titolo Libro" className="p-4 bg-black text-white rounded flex grow outline-none" onChange={fnLibro}/>
                    <input type="text" placeholder="Inserisci Autore" className="p-4 bg-black text-white rounded flex grow outline-none" onChange={fnAutore}/>
                    <button className="p-4 bg-yellow-400 rounded" onClick={cercaLibro}>Cerca Libro</button>
                </div>

                <div className="flex flex-col rounded bg-black p-4 text-white gap-2"> 
                    {
                        arrayRicerca.length === 0 ? <div>
                            nessun libro trovato
                        </div> : 
                        arrayRicerca.map(el => (
                            <div key={el.id} className="flex flex-row gap-5 items-start">
                                <img src={el.immagineCopertina} alt="" className="w-1/6 rounded"/>
                                <div className="flex flex-col gap-2 w-5/6 items-start">
                                    <h3 className="text-4xl">{el.titolo}</h3>
                                    <span className="text-2xl italic">{el.autore}</span>
                                    <span className="text-2xl rounded p-2 bg-green-500">€ {el.prezzo}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            
                <button className="p-2 bg-red-600 rounded text-white font-bold self-end" onClick={cancellaRisultati}>Cancella Risultati</button>
            </div>
        </>
    )
}

export default Main2