import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      
      <table>
        <tbody>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>- R$ 59,00</td>
            <td>Alimentação</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>- R$ 1.200,00</td>
            <td>Casa</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>R$ 5.400,00</td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}