import React from 'react'
import { HeaderContainer, HeaderTitle, HeaderBalance, BalanceContainer, BalanceButton } from './HeaderStyled'

export const Header = (props) => {
  // const [balance, setBalance] = useState(true);

  // function toggleBalance() {
  //   setBalance(!balance);
  // }

  return (
    <>
        <HeaderContainer>
            <HeaderTitle>Tommy's Token Tracker</HeaderTitle>
            <BalanceContainer>
              <HeaderBalance>
                {props.showBalance ? 'Balance: $120 Million' : 'Balance: xxxxxxxxxx'}
              </HeaderBalance>
              <BalanceButton onClick={props.toggleBalance}>{props.showBalance ? "Hide Balance" : "Show Balance"}</BalanceButton>
            </BalanceContainer>
        </HeaderContainer>
    </>
  )
}
