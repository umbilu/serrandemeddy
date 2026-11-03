import serrandaCieca from './assets/serranda-cieca.jpg'
import serrandaGarage from './assets/serranda-garage.jpg'
import serrandaDistributori from './assets/serranda-distributori.jpg'
import serrandaNotte from './assets/serranda-notte.jpg'

const year = new Date().getFullYear()

const site = {
  phoneDisplay: '388 474 6201',
  phoneHref: 'tel:+393884746201',
  email: 'info@serrandemeddy.it',
  hours: 'Lun – Ven 8:30 – 17:30',
  area: 'Bologna e provincia',
}

const products = [
  {
    title: 'Serrande a maglia',
    models: 'TUB 95 · TUB 120 · Tondino · Tubonda',
    text: 'Design morbido e armonioso, con maglie in acciaio zincato e snodi robusti: una protezione solida contro i tentativi di furto.',
    icon: 'mesh',
  },
  {
    title: 'Serrande cieche',
    models: 'Acciaio zincato · Alluminio · Ferro',
    text: 'La soluzione classica per negozi e attività commerciali, disponibile in vari colori e finiture per valorizzare la facciata.',
    icon: 'blind',
  },
  {
    title: 'Serrande silenziose',
    models: 'Scorrimento attenuato',
    text: 'Pensate per abitazioni e contesti residenziali: movimenti fluidi e una sensibile riduzione del rumore in apertura e chiusura.',
    icon: 'quiet',
  },
  {
    title: 'Microforate e antitempesta',
    models: 'Microforate · Antitempesta · Inox · Antiscasso',
    text: 'Ventilazione e protezione anche nelle condizioni più difficili, con versioni in acciaio inox per ambienti aggressivi.',
    icon: 'shield',
  },
  {
    title: 'Profili e componenti',
    models: 'Guide · Stecche · Accessori',
    text: 'Ricambi originali, profili, guide, stecche e dispositivi di sicurezza come serrature, lucchetti e chiavi.',
    icon: 'profile',
  },
  {
    title: 'Motorizzazione',
    models: 'Motori · Automatismi · Telecomandi',
    text: 'Serrande completamente automatizzate, con una gamma di motori e accessori per ogni esigenza di sicurezza e vivibilità.',
    icon: 'motor',
  },
]

const services = [
  {
    title: 'Installazione',
    text: 'Serrande, saracinesche e tapparelle su misura per abitazioni, negozi e capannoni. Sopralluogo e preventivo gratuiti.',
  },
  {
    title: 'Manutenzione',
    text: 'Controlli periodici, ingrassaggio e regolazione per un funzionamento silenzioso, sicuro e senza blocchi improvvisi.',
  },
  {
    title: 'Riparazione',
    text: 'Interventi rapidi su motori, molle, cinghie e telecomandi, con assistenza post-vendita anche sulla parte elettronica.',
  },
  {
    title: 'Pronto intervento',
    text: 'Serranda bloccata o negozio inaccessibile? Interveniamo con urgenza per rimettere in funzione la tua attività.',
  },
]

const gallery = [
  { label: 'Serranda cieca per negozio', image: serrandaCieca },
  { label: 'Serranda su misura per garage', image: serrandaGarage },
  { label: 'Saracinesca per area self-service', image: serrandaDistributori },
  { label: 'Serranda in acciaio, chiusura notturna', image: serrandaNotte },
]

const applications = [
  'Negozi e vetrine',
  'Abitazioni e garage',
  'Capannoni e magazzini',
  'Bar e ristoranti',
  'Uffici e studi',
  'Condomini e portoni',
]

export { year, site, products, services, gallery, applications }
