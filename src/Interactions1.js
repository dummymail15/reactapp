import {React, useState, useEffect} from 'react'
import {ethers} from 'ethers'
import styles from './Wallet.module.css'

import EthersAdapter from '@safe-global/safe-ethers-lib'
import Safe, { SafeFactory, EthSignSignature } from '@safe-global/safe-core-sdk'


const Interactions1 = (ethAdapter) => {

	const [transferHash, setTransferHash] = useState(null);

	const transferHandler = async (e) => {
		e.preventDefault();

		const safeFactory = await SafeFactory.create({ ethAdapter });

		const owners = ['0xb67c267A0D15547f4C675318111A0492e1bCEB5f', '0xA0c97D5164b953c731bFFB7d0BAe88eE2417e064'];
		const threshold = 2;
		
		console.log("safeFactory  ",safeFactory);

		const safeAccountConfig = { owners: owners, threshold: threshold};
	 
			const safeSdk_ceo = await safeFactory.deploySafe({safeAccountConfig});
	
		
		
		console.log("treasury 2  ",safeSdk_ceo);
	
	
		  // Getting the address of the safe
		  const treasury = safeSdk_ceo.getAddress();
		
		
		  console.log("treasury   ",treasury);

		//let betAmount = e.target.betAmount.value;
		
	
		//let txt = await props.contract.deposit({ value: ethers.utils.parseEther(betAmount)});

		setTransferHash(treasury);
	}
	
return (
	
			<div className={styles.interactionsCard}>
				<form onSubmit={transferHandler}>
						<h2> {"Step-1. Deploying safe. "} </h2>
						<p> Amount </p>
						<input type='number' id='betAmount' className={styles.numberInput}/>

					

						<button type='submit' className={styles.button6}>Send</button>
						<div>
							{transferHash}
						</div>
			</form>
			</div>
		)
}

export default Interactions1;