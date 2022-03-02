import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';

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
} from './styles';

export const Dashboard = () => {
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
					title='Entradast'
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
		</Container>
	);
};
