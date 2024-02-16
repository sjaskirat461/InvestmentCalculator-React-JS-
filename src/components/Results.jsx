import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
  const result = calculateInvestmentResults(input);
  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </thead>
      <tbody>
        {result.map((resultObj) => {
          const totalInterest =
            resultObj.valueEndOfYear -
            resultObj.annualInvestment * resultObj.year -
            initialInvestment;
          const totalAmountInvested = resultObj.valueEndOfYear - totalInterest;
          return (
            <tr key={resultObj.year}>
              <td>{resultObj.year}</td>
              <td>{formatter.format(resultObj.valueEndOfYear)}</td>
              <td>{formatter.format(resultObj.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
