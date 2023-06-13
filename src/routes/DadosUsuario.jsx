import { useParams, useNavigate, Link } from "react-router-dom";
import Container from "../components/Container";
import api from '../services/api';
import Form from '../components/Form';
import VariaveisGlobais from "../components/VariaveisGlobais";
import BotaoVoltar from "../components/BotaoVoltar";

export default function DadosUSuarios(){

    const {id} = useParams();
    const navigate = useNavigate();

    const editarUsuario = (usuario) =>{
        api.post('/user',{
            codigo: id,
            usuario: usuario.usuario,
            senha: "123",
            idade: usuario.idade
        })
        .then((resp) =>{
            VariaveisGlobais.visible=true
            navigate("/", { state: { message: "Usuário editado com sucesso!", type: "sucess", txtBotao: "Prosseguir" } })
        })
        .catch((error) => {
            VariaveisGlobais.visible=true
            navigate("/", { state: { message: error.response.data.message, type: "error", txtBotao: "Tentar novamente" } })
        });
    }

    return(
        <Container>
            <BotaoVoltar
                destino={"/"}
            />

            <Form
                executarAcao={editarUsuario}
                textoBotao={"Editar"}
                id={id}
            />
        </Container>
    )
}