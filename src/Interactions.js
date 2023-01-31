import {React, useState, useEffect} from 'react'
import {ethers} from 'ethers'
import styles from './Wallet.module.css'


const Interactions = (props) => {

	const [transferHash, setTransferHash] = useState(null);

	const transferHandler = async (e) => {
		e.preventDefault();
		let betBoolean = e.target.bet.checked;
		console.log(betBoolean)
		try{
		let txt = await props.contract.flip(betBoolean);
		setTransferHash(txt.hash);
		}catch(e){
			setTransferHash(e.message);
		}
		
	}
	
return (
			<div className={styles.interactionsCard}>
				<form onSubmit={transferHandler}>
						<h2> {"Step-3. Flip the Coin here "} </h2>
					<h3> {"Once you receive the transaction hash, just refresh the page."}</h3>
						<h3> Your Balance will get doubled if you win or will become 0 if you loose.</h3>
					<h3> Flip the Coin here</h3>
						<p> Checked Box - Head</p>
			
						<p> Unchecked Box - Tail </p>
						<input type='checkbox' id='bet' step='1' style={{width:"30px",height:"30px"}}/>

						<button type='submit' className={styles.button6}>Send</button>
						<div>
							{transferHash}
						</div>
			</form>
			</div>
		)
}

export default Interactions;