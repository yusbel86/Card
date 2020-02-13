<imput
				onKeyPress={e => {
					if (e.key === "Enter") {
						setNumero(e.target.value);
					}
				}}
			/>
			{numero}