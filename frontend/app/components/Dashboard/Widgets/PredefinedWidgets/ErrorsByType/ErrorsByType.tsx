import React from 'react';
import { NoContent } from 'UI';
import {
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import { NO_METRIC_DATA } from 'App/constants/messages';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Styles } from '../../common';

interface Props {
  data: any;
  metric?: any;
}
function ErrorsByType(props: Props) {
  const { data, metric } = props;
  return (
    <NoContent
      size="small"
      title={
        <div className="flex items-center gap-2 text-base font-normal">
          <InfoCircleOutlined size={12} /> {NO_METRIC_DATA}
        </div>
      }
      show={metric.data.chart.length === 0}
      style={{ height: '240px' }}
    >
      <ResponsiveContainer height={240} width="100%">
        <BarChart data={metric.data.chart} margin={Styles.chartMargins}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#EEEEEE"
          />
          <XAxis
            {...Styles.xaxis}
            dataKey="time"
            interval={metric.params.density / 7}
          />
          <YAxis
            {...Styles.yaxis}
            tickFormatter={(val) => Styles.tickFormatter(val)}
            label={{ ...Styles.axisLabelLeft, value: 'Number of Errors' }}
            allowDecimals={false}
          />
          <Legend />
          <Tooltip {...Styles.tooltip} />
          <Bar
            minPointSize={1}
            name="Integrations"
            dataKey="integrations"
            stackId="a"
            fill={Styles.compareColors[0]}
          />
          <Bar
            name="4xx"
            dataKey="4xx"
            stackId="a"
            fill={Styles.compareColors[1]}
          />
          <Bar
            name="5xx"
            dataKey="5xx"
            stackId="a"
            fill={Styles.compareColors[2]}
          />
          <Bar
            name="Javascript"
            dataKey="js"
            stackId="a"
            fill={Styles.compareColors[3]}
          />
        </BarChart>
      </ResponsiveContainer>
    </NoContent>
  );
}

export default ErrorsByType;
