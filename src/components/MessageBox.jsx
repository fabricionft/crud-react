import styles from './MessageBox.module.css';
import VariaveisGlobais from './VariaveisGlobais';

export default function MessageBox({msg, type, txtBotao}){

    const fecharMessageBox = () =>{
        VariaveisGlobais.visible=false;
    }

    return(
        <>  
            {VariaveisGlobais.visible &&(
                <div className={styles.containerMessage}>
                    <div className={styles.messageBox +" "+ styles[type]}>
                        <div className={styles.margemMessageBox}>
                            <p>{msg}</p>
                            <button type='button' onClick={fecharMessageBox} className={styles.btnMessageBox}>{txtBotao}</button>
                        </div>
                    </div>
                </div>
            )}
            
        </>
    )
}