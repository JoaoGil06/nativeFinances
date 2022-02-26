import React from 'react';

import {
	Container,
	Header,
	Title,
	Icon,
	Footer,
	Amount,
	LastTransaction,
} from './styles';

export const HighlightCard = () => {
	return (
		<Container>
			<Header>
				<Title>Entrada</Title>
				<Icon name='arrow-up-circle' />
			</Header>
			<Footer>
				<Amount>€ 17.400,00</Amount>
				<LastTransaction>
					Última entrada foi no dia 26 de fevereiro
				</LastTransaction>
			</Footer>
		</Container>
	);
};
