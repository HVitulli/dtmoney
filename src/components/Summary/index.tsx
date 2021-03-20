import { useContext } from 'react'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext'

import { Container } from "./styles"

export function Summary() {
    const transactions = useContext(TransactionsContext);

    return (
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={ incomeImg } alt="Income img"/>
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Outcome</p>
                    <img src={ outcomeImg } alt="Outcome img"/>
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={ totalImg } alt="Total img"/>
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}