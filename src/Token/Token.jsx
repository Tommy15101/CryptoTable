import React from 'react'
import { TableRow } from './TokenStyled'

export const Token = (props) => {

  return (
    <>
     {props.coinData.map((value) => {
        return (
            <tbody key={props.key}>
                <TableRow>
                    <td>{value.name}</td>
                    <td>{value.ticker}</td>
                    <td>{'$' + value.price}</td>
                    <td>{ props.showBalance ? props.balance : "X X X" }</td>
                    <td><button onClick={props.refreshBalance}>Refresh Data</button></td>
                </TableRow>
            </tbody>
        )
     })}
    </>
  )
}
