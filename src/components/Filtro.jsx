import styles from './Filtro.module.css';

export default function Filtro({setFiltro}){
    return(
        <select onChange={(e) => setFiltro(e.target.value)} className={styles.filtro}>
            <option value="todos">Todos</option>
            <option value="maior">Maiores</option>
            <option value="menor">Menores</option>
        </select>
    )
}