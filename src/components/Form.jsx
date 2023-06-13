import { useEffect, useState} from 'react';
import styles from './Form.module.css';
import api from '../services/api';

export default function Form({executarAcao, textoBotao, id}){

    const [usuario, setUsuario] = useState({});

    if(id){
        useEffect(() => {
            api.get("/user/"+id)
            .then((response) => setUsuario(response.data))
            .catch((error) => console.log(error));
        }, [id])
    }

    const efetuarSubmit = (e) =>{
        e.preventDefault();
        executarAcao(usuario);
    }

    function criarUsuario(e){
        setUsuario({...usuario, [e.target.name] : e.target.value});
    }
    
    return(
        <form onSubmit={efetuarSubmit} className={styles.formPessoa}>
            <input 
                type="text" 
                placeholder="Digite o usuário"
                onChange={criarUsuario}
                name='usuario'
                value={usuario.usuario || ""}
            />
            
            <input 
                type="number" 
                placeholder="Digite a idade"
                onChange={criarUsuario}
                name='idade'
                value={usuario.idade || ""}
            />

            <button>{textoBotao}</button>
        </form>
    )
}