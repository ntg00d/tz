import {FC} from 'react'
import {IChartProps} from '../models/props/Chart'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const Chart: FC<IChartProps> = ({products}) => {
  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Product ratings'
    },
    xAxis: {
      categories: products.map(product => product.title)
    },
    yAxis: {
      title: {
        text: 'Products'
      }
    },
    series: [{
      name: 'Rating',
      data: products.map(product => product.rating)
    }],
    responsive: {
      rules: [{
        condition: {},
        chartOptions: {
          chart: {
            className: 'chart'
          },
          legend: {
            enabled: false
          }
        }
      }]
    }
  }

  return (
    <div className="chart">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
}

export default Chart