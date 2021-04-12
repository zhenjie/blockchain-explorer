/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import matchSorter from 'match-sorter';
import { useTranslation } from 'react-i18next';
import ReactTable from '../Styled/Table';
import { peerListType } from '../types';

/* istanbul ignore next */
const Peers = ({ peerList }) => {
	const { t } = useTranslation();
	const columnHeaders = [
		{
			Header: t('Peer Name'),
			accessor: 'server_hostname',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['server_hostname'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		},
		{
			Header: t('Request Url'),
			accessor: 'requests',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['requests'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		},
		{
			Header: t('Peer Type'),
			accessor: 'peer_type',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['peer_type'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		},
		{
			Header: t('MSPID'),
			accessor: 'mspid',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['mspid'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		},
		{
			Header: t('Ledger Height'),
			columns: [
				{
					Header: t('High'),
					accessor: 'ledger_height_high',
					filterMethod: (filter, rows) =>
						matchSorter(
							rows,
							filter.value,
							{ keys: ['ledger_height_high'] },
							{ threshold: matchSorter.rankings.SIMPLEMATCH }
						),
					filterAll: true
				},
				{
					Header: t('Low'),
					accessor: 'ledger_height_low',
					filterMethod: (filter, rows) =>
						matchSorter(
							rows,
							filter.value,
							{ keys: ['ledger_height_low'] },
							{ threshold: matchSorter.rankings.SIMPLEMATCH }
						),
					filterAll: true
				},
				{
					Header: t('Unsigned'),
					id: 'ledger_height_unsigned',
					accessor: d => d.ledger_height_unsigned.toString(),
					filterMethod: (filter, rows) =>
						matchSorter(
							rows,
							filter.value,
							{ keys: ['ledger_height_unsigned'] },
							{ threshold: matchSorter.rankings.SIMPLEMATCH }
						),
					filterAll: true
				}
			]
		}
	];

	return (
		<div>
			<ReactTable
				data={peerList}
				columns={columnHeaders}
				defaultPageSize={5}
				filterable
				minRows={0}
				showPagination={peerList.length >= 5}
			/>
		</div>
	);
};

Peers.propTypes = {
	peerList: peerListType.isRequired
};

export default Peers;
