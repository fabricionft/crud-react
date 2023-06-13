import { Link } from 'react-router-dom';
import styles from './BotaoVoltar.module.css'

export default function BotaoVoltar({destino}){
  
  return<Link to={destino} className={styles.voltar}>Voltar</Link>
}