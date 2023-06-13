import api from '../services/api';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Usuarios.module.css'
import Form from '../components/Form';
import Tabela from '../components/Tabela';
import Filtro from '../components/Filtro';
import Pesquisa from '../components/Pesquisa';
import Container from '../components/Container';
import VariaveisGlobais from '../components/VariaveisGlobais';

export default function Usuarios(){

    const [usuarios, setUsuarios] = useState([]);
    const [filtro, setFiltro] = useState("todos");
    const [pesquisa, setPesquisa] = useState("");
    const navigate = useNavigate();

    useEffect(() =>{
        api.get("/user")
        .then((response) => setUsuarios(response.data))
        .catch((error) => {
            VariaveisGlobais.visible=true
            navigate("/", { state: { message: error.response.data.message, type: "error", txtBotao: "Tentar novamente" } })
        });
    }, [usuarios])

    const salvarUsuario = (usuario) =>{
        if(usuario.usuario && usuario.idade){
            api.post("/user", {
                usuario: usuario.usuario,
                senha: "123",
                idade: usuario.idade
            })
            .then((response) => {
                VariaveisGlobais.visible=true
                navigate("/", { state: { message: "Usuário salvo com sucesso!", type: "sucess", txtBotao: "Prosseguir" } })
            })
            .catch((error) => {
                VariaveisGlobais.visible=true
                navigate("/", { state: { message: error.response.data.message, type: "error", txtBotao: "Tentar novamente" } })
            })
        }else {
            VariaveisGlobais.visible=true;
            navigate("/", { state: { message: "preencha corretamente", type: "error", txtBotao: "Tentar novamente" } });
        }
    }

    return(
        <Container>
            <div className={styles.divfiltros}>
                <Filtro
                    setFiltro={setFiltro}
                />

                <Pesquisa 
                    setPesquisa={setPesquisa}
                />
            </div>

            <div className={styles.divConteudo}>
                <h1>Usuários</h1>

                <Tabela
                    usuarios={usuarios}
                    filtro={filtro}
                    pesquisa={pesquisa}
                />
            </div>

            <div className={styles.divForm}>
                <h1>Cadastro</h1>
                
                <Form                 
                    executarAcao={salvarUsuario}
                    textoBotao={"Cadastrar"}
                />
            </div>
        </Container>
    )
}