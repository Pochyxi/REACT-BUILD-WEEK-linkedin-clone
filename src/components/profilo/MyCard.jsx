import './MyCard.css'

const MyCard = () => {
    return (
        <div className='card'>
            <div className='cover'>
                <div className='foto'></div>
            </div>
            <div className='fisrtdiv'>
                <div className='HeadDesc'>
                    <h3>nome cognome</h3>
                    <p>descrizione 1</p>
                    <p>descrizione 2</p>
                    <p>paese - informazioni di contatto</p>
                    <p>n. collegamenti</p>
                </div>
                <div className='buttons'>
                    <div className='bt1'>disponibile <br /> per</div>
                    <div className='bt2'>Aggiungi sezione <br /> del profilo</div>
                </div>
                <div className='disp'>
                    <p>Disponibile a lavorare </p>
                    <p>Ruoli di ..............</p>
                    <p>Vedi tutti i dettagli</p>
                </div>
            </div>
            <div className='analisiRisorse'>
                <span>Analisi</span>
                <div>
                    <span>4 visualizzazioni del profilo</span>
                    <span>Scopri chi ha visitato il tuo profilo</span>
                </div>
                <div>
                    <span>2 comparse nei motori di ricerca</span>
                    <span>Vedi quante volte compari nei risultati di ricerca</span>
                </div>
            </div>
            <div className='analisiRisorse'>
                <span>Risorse</span>
                <div>
                    <span>Modalità creazione di contenuti</span>
                    <span>Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi agli strumenti di creazione</span>
                </div>
                <div>
                    <span>La mia rete</span>
                    <span>Salva e gestisci i tuoi collegamenti e interessi.</span>
                </div>
            </div>
            <div className='attività'>
                <div className='attOne'>
                    <span>Attività</span>
                    <span>41 follower</span>
                    <div className='bt2 bt3'>Avvia un post</div>
                </div>
                <div>
                    <span>È da un po’ che non pubblichi qualcosa</span>
                    <span>I post recenti che condividi o commenti appariranno qui</span>
                </div>
                <hr />
                <div className='attTwo'>
                    <span>Mostra tutte le attività</span>
                </div>
                <div>
                </div>
                <span>Esperienza</span>
                <div>
                    <span>web developer</span>
                    <span>epicode</span>
                </div>
                <hr />
                <div className='attTwo'>
                    <span>Mostra tutte le esperienze</span>
                </div>
                <div>
                    <span>Formazione</span>
                    <div>
                        <span>web developer</span>
                        <span>epicode</span>
                    </div>
                    <hr />
                    <div className='attTwo'>
                        <span>Mostra tutti i titoli di studio</span>
                    </div>
                </div>
                <div>
                    <span>Competenze</span>
                    <div>
                        <span>lavoro di squadra</span>
                    </div>
                    <hr />
                    <div className='attTwo'>
                        <span>Mostra tutte le competenze</span>
                    </div>
                </div>
                <div>
                    <span>Corsi</span>
                    <div>
                        <span>epicode full stack</span>
                    </div>
                    <hr />
                    <div className='attTwo'>
                        <span>Mostra tutte le competenze</span>
                    </div>
                </div>
                <div>
                    <span>Lingue</span>
                    <div>
                        <span>Inglese</span>
                        <span>Conoscenza lavorativa</span>
                    </div>
                    <hr />
                </div>
                <div>
                    <span>Interessi</span>
                    <div>
                        <span>Epicode school</span>
                        <span>2000 follower</span>
                        <div className='bt4'>Già segui</div>
                    </div>
                    <hr />
                </div>
                <div>
                    <span>Altre aziende consultate</span>
                    <div>
                        <span>Gigi DeGigio</span>
                        <span>junior front end developer</span>
                        <div className='bt4'>Collegati</div>
                    </div>
                    <hr />
                    <span>Visualizza altro</span>
                </div>
                <div>
                    <span>Persone che potresti conoscere</span>
                    <div>
                        <span>Luca Luchini</span>
                        <span>barman</span>
                        <div className='bt4'>Collegati</div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default MyCard;


