import { useLocation } from 'react-router-dom';
import styles from './Container.module.css';
import MessageBox from './MessageBox';

export default function Container({children}){

    const location = useLocation();
    let msg = "";
    let type = ""
    let txtBotao = "";
    
    if(location.state){
        msg = location.state.message;
        type = location.state.type;
        txtBotao = location.state.txtBotao;
    }

    return(
        <div className={styles.containerPrincipal}>
            <div className={styles.margemContainerPrincipal}>
                <MessageBox
                    msg={msg}
                    type={type}
                    txtBotao={txtBotao}
                />
                
                {children}
            </div>
        </div>
    )
}