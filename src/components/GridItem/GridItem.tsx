import { Level } from "../../helpers/imc"
import downImage from "../../assets/down.png"
import upImage from "../../assets/up.png"
import styles from "./GridItem.module.css"

type Props = {
    level: Level
}

export const GridItem = ({ level } : Props ) => {
    return (
        <div className={styles.main} style={{ backgroundColor: level.color }}> 
            <div className={styles.gridIcon}>

                <img src={ level.icon === 'up' ? upImage : downImage } width={30} />

            </div>

            <div className={styles.gridInfo}><h1>{ level.title }</h1> </div>

            { level.userImc && 

                <div className={styles.userImc}><p>Seu IMC é de <strong>{ level.userImc.toFixed(2) } kg/m²</strong></p></div>
             
            }

            { !level.userImc && 
                <div className={styles.gridInfo}><p>IMC está entre <strong>{ level.imc[0] }</strong> e <strong>{ level.imc[1] }</strong> </p></div>
            }

        </div>
    )
}