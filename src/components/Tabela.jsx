import styles from './Tabela.module.css'
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import VariaveisGlobais from './VariaveisGlobais';

export default function Tabela({usuarios, filtro, pesquisa}){

    const navigate = useNavigate();

    const excluirUsuario = (codigo) =>{
        api.delete("/user/"+codigo)
        .then((response) => {
            VariaveisGlobais.visible=true
            navigate("/", { state: { message: "Usuário excluído com sucesso!", type: "sucess", txtBotao: "Prosseguir" } })
        })
        .catch((error) => {
            VariaveisGlobais.visible=true
            navigate("/", { state: { message: error.response.data.message, type: "error", txtBotao: "Tentar novamente" } })
        }); 
    }

    return(
        <>
            {usuarios.length > 0 ? (
                usuarios.filter((usuario) => (
                        filtro == "todos" ? usuario : 
                        filtro == "maior" ? usuario.idade >= 18 :
                        usuario.idade < 18
                    )
                )
                .filter((usuario) => 
                    usuario.usuario.toLowerCase().includes(pesquisa.toLowerCase())
                )
                .map((usuario) => (
                    <div className={styles.linha} key={usuario.codigo}>
                        <div className={styles.conteudoTexto}>
                            <p>{usuario.usuario} - {usuario.idade} anos</p>
                        </div>

                        <div className={styles.conteudoBotoes}>
                            <Link to={"/usuario/"+usuario.codigo} className={styles.btnEditar}>Editar</Link>
                            <button className={styles.btnExcluir} onClick={() => excluirUsuario(usuario.codigo)}>Excluir</button>
                        </div>
                    </div>
                ))
            ) : (
                <h1>Sem usuários</h1>
            )}
        </>
    )
}