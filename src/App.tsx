import { useState } from "react";
import styles from "./App.module.css";
import poweredImage from "./assets/powered.png";
import leftArrowImage from "./assets/leftarrow.png";
import { levels, calcImc, Level } from "./helpers/imc";
import { GridItem } from "./components/GridItem";

const App = () => {

	const [ heightField, setHeightField ] = useState<number>(0)
	const [ weightField, setWeightField ] = useState<number>(0)
	const [ showItem, setShowItem ] = useState<Level | null >(null)

	const handleCalculateButton = () => {

		if (!heightField || !weightField) {
			alert("Digite todos os campos")
		}

		setHeightField(0)
		setWeightField(0)
		setShowItem(calcImc(heightField, weightField))

	}

	const handleArrowButton = () => setShowItem(null)

	return (
	<div className={styles.main} >

		<header> 

		<div className={styles.headerContainer} >
			<img src={poweredImage} width={150} />
		</div> 

		<div className={styles.container}>

			<div className={styles.leftSide}>

				<h1>Calcule o seu IMC.</h1>
				<p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

				<input 
					type="number" 
					placeholder="Digite a sua altura. Ex:1.5 (Em metros)"
					value={heightField > 0 ? heightField : ''}
					disabled={showItem ? true : false }
					onChange={e => setHeightField(parseFloat(e.target.value))}
				/>

				<input 
					type="number" 
					placeholder="Digite o seu peso. Ex:75 (Em kg)"
					value={weightField > 0 ? weightField : ''}
					onChange={e => setWeightField(parseFloat(e.target.value))}
					disabled={showItem ? true : false }
				/>

				<button onClick={handleCalculateButton} disabled={showItem ? true : false } >Calcular</button>

			</div>

			<div className={styles.rightSide}>

				{ !showItem &&

					<div className={styles.grid} >

						{levels.map( ( level, key ) => (

							<GridItem level={level} key={key} />

						))}

					</div>
				}

				{ showItem &&

					<div className={styles.rightBig} >
						<div className={styles.rightArrow} onClick={handleArrowButton}  > <img src={leftArrowImage} alt="" width={25} /> </div>
						<GridItem level={showItem} />
					</div>

				}

			</div>
			
		</div>

		</header>

	</div>
	)
}

export default App