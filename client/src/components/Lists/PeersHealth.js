/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import ReactTable from '../Styled/Table';
import { peerStatusType } from '../types';

/* eslint-disable */

const styles = theme => ({
	table: {
		height: 335,
		overflowY: 'scroll'
	},
	center: {
		textAlign: 'left'
	}
});

/* eslint-enable */

const PeersHealth = ({ peerStatus, classes }) => {
	const { t } = useTranslation();
	const columnHeaders = [
		{
			Header: t('Peer Name'),
			accessor: 'server_hostname',
			filterAll: false,
			className: classes.center
		} /*
    {
      Header: 'Status',
      accessor: 'status',
      filterAll: false,
      className: classes.center,
      Cell: row => (
        <Badge color="success">
          {row.value}
        </Badge>
      ),
    },*/
	];
	return (
		<div>
			<ReactTable
				data={peerStatus}
				columns={columnHeaders}
				className={classes.table}
				minRows={0}
				showPagination={false}
			/>
		</div>
	);
};

PeersHealth.propTypes = {
	peerStatus: peerStatusType.isRequired
};

export default withStyles(styles)(PeersHealth);
