import React from 'react'
import { TableContainer, TableWrapper } from './TableStyled'
import { Token } from '../Token/Token'

export const Table = (props) => {
  return (
    <>
        <TableWrapper>
            <TableContainer>
                <thead>
                    <tr>
                        <th>Token Name</th>
                        <th>Token Symbol</th>
                        <th>Token Price</th>
                        <th>Token Balance</th>
                        <th>Refresh Data</th>
                    </tr>
                </thead>

                <Token showBalance={props.showBalance} coinData={props.coinData} balance={props.balance} refreshBalance={props.refreshBalance}/>

            </TableContainer>
        </TableWrapper>
    </>
  )
}
