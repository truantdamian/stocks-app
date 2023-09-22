import { LineChart } from "components/LineChart";

export default async function Page({ searchParams }) {
  const { symbol, code } = searchParams;

  const response = await fetch(
    `http://localhost:3000/api/stock/detail?symbol=${symbol}&code=${code}`
  );

  const data = await response.json();

  return (
    <>
      <p>{data.name}</p>
      <hr />
      <div>
        <input type="radio" value="real_time" name="timeType" checked />
        Tiempo Real
      </div>
      <div>
        <input type="radio" value="history" name="timeType" />
        Histórico
        <input type="date" name="date_start" />{" "}
        <input type="date" name="date_finish" />
      </div>
      <div>
        Intervalo
        <select>
          <option value="1min" selected>
            1min
          </option>
          <option value="5min">5min</option>
          <option value="15min">15min</option>
        </select>
      </div>
      <div>
        <button>Ver Gráfico</button>
      </div>
      <div>
        <LineChart symbol="NFLX" interval={"1min"} />
      </div>
    </>
  );
}
