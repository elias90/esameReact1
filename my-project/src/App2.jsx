import { useState } from "react"
import Main2 from "./ES2/Main2.jsx"
import Header from "./ES2/Header.jsx"
import Footer from "./ES2/Footer.jsx"

function App2() {

    const [libri, setLibri] = useState([
        {   
            id: 1,
            titolo: "Il Codice da Vinci",
            autore: "Dan Brown",
            immagineCopertina: "https://www.ibs.it/images/9788804523413_0_0_536_0_75.jpg",
            prezzo: 10.99
        },
        {   
            id: 2,
            titolo: "Inferno",
            autore: "Dan Brown",
            immagineCopertina: "https://www.ibs.it/images/9788804665373_0_536_0_75.jpg",
            prezzo: 9.99
        },
        {
            id: 3,
            titolo: "Moby Dick",
            autore: "Herman Melville",
            immagineCopertina: "url-immagine-copertina-3.jpg",
            prezzo: 12.99
        },
        {
            id: 4,
            titolo: "Orgoglio e pregiudizio",
            autore: "Jane Austen",
            immagineCopertina: "url-immagine-copertina-4.jpg",
            prezzo: 11.99
        },
        {   
            id:5,
            titolo: "Ulisse",
            autore: "James Joyce",
            immagineCopertina: "url-immagine-copertina-6.jpg",
            prezzo: 19.99
        },
        {
            id: 6,
            titolo: "Ulisse",
            autore: "James Joyce",
            immagineCopertina: "url-immagine-copertina-6.jpg",
            prezzo: 19.99
        }
    ])

    return (
        <>
            <div className="flex flex-col justify-between h-screen items-center">
            <Header />
            <Main2 libri={libri}/>
            <Footer />
            </div>
        </>
    )
}

export default App2