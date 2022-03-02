import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import {
	TransactionCard,
	TransactionCardProps,
} from '../../components/TransactionCard';

import {
	Container,
	Header,
	UserWrapper,
	UserInfo,
	Photo,
	User,
	UserGreeting,
	UserName,
	Icon,
	HighlightCards,
	Transactions,
	Title,
	TransactionsList,
} from './styles';

export interface DataListProps extends TransactionCardProps {
	id: string;
}

export const Dashboard = () => {
	const data: DataListProps[] = [
		{
			id: '1',
			type: 'positive',
			title: 'Desenvolvimento de website',
			amount: '€ 1000',
			category: { name: 'Vendas', icon: 'dollar-sign' },
			date: '02/03/2022',
		},
		{
			id: '2',
			type: 'negative',
			title: 'Desenvolvimento de website',
			amount: '€ 1000',
			category: { name: 'Vendas', icon: 'dollar-sign' },
			date: '02/03/2022',
		},
		{
			id: '3',
			type: 'negative',
			title: 'Desenvolvimento de website',
			amount: '€ 1000',
			category: { name: 'Vendas', icon: 'dollar-sign' },
			date: '02/03/2022',
		},
	];

	return (
		<Container>
			<Header>
				<UserWrapper>
					<UserInfo>
						<Photo
							source={{
								uri: 'https://avatars.githubusercontent.com/u/33355337?v=4',
							}}
						/>
						<User>
							<UserGreeting>Olá,</UserGreeting>
							<UserName>João Gil</UserName>
						</User>
					</UserInfo>
					<Icon name='power' />
				</UserWrapper>
			</Header>
			<HighlightCards>
				<HighlightCard
					title='Entradas'
					amount='€ 17,400'
					lastTransaction='Última entrada dia 28 de fevereiro'
					type='up'
				/>
				<HighlightCard
					title='Saídas'
					amount='€ 10,400'
					lastTransaction='Última saída dia 02 de março'
					type='down'
				/>
				<HighlightCard
					title='Total'
					amount='€ 7,400'
					lastTransaction='01 fevereiro a 31 de março'
					type='total'
				/>
			</HighlightCards>

			<Transactions>
				<Title>Lista de Transações</Title>
				<TransactionsList
					data={data}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <TransactionCard data={item} />}
				/>
			</Transactions>
		</Container>
	);
};
