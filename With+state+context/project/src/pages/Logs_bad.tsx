import React, { useState } from 'react';
import Header from '../components/layout/Header';
import DashboardActions, { LogsHeader } from '../components/dashboard/DashboardActions';
import MetricCard from '../components/dashboard/MetricCard';
import ChartCard from '../components/dashboard/ChartCard_bad';
import {
  logsMetrics,
  traceTimeData,
  usageTimeData,
  latencyData
} from '../data/mockData';

const Logs: React.FC = () => {
  const [timeRange, setTimeRange] = useState('Last 24 hours');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleTimeRangeChange = (range: string) => {
    setTimeRange(range);
  };

  const handleFilterToggle = (open: boolean) => {
    setIsFilterOpen(open);
  };

  return (
    <div className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50">
      <Header title="SAMPLE! Repository" subtitle="sitory" activeTab="Alerts" />

      <div className="flex-1 pb-6">
        <DashboardActions
          timeRange={timeRange}
          isFilterOpen={isFilterOpen}
          onTimeRangeChange={handleTimeRangeChange}
          onFilterToggle={handleFilterToggle}
        />

        <LogsHeader
          //timeRange={timeRange}
          //isFilterOpen={isFilterOpen}
        />

        <div className="px-4 flex flex-wrap -mx-2">
          <MetricCard title="Total traces" value={logsMetrics.totalTraces} />

          <MetricCard
            title="Total usage"
            value={logsMetrics.totalUsage.cost}
            subtitle={
              <div className="text-sm text-gray-600">
                <div>Input: {logsMetrics.totalUsage.input}</div>
                <div>Completion: {logsMetrics.totalUsage.completion}</div>
              </div>
            }
          />

          <MetricCard
            title="Average user feedback"
            value={logsMetrics.averageFeedback.value}
            subtitle={
              <div className="text-sm text-gray-600">
                {logsMetrics.averageFeedback.ratings} ratings
              </div>
            }
          />
        </div>

        <div className="px-4 flex flex-wrap -mx-2 mt-4">
          <ChartCard
            data={traceTimeData}
            timeRange={timeRange} // props passed again
          />
          <ChartCard
            data={usageTimeData}
            dropdown="Cost"
            timeRange={timeRange}
          />
        </div>

        <div className="px-4 flex flex-wrap -mx-2 mt-4">
          <ChartCard
            data={{
              title: 'Average user feedback',
              data: [],
              xAxisLabel: '',
              yAxisLabel: ''
            }}
            width="w-1/2"
            timeRange={timeRange}
          />
          <ChartCard
            data={latencyData}
            dropdown="p50"
            width="w-1/2"
            timeRange={timeRange}
          />
        </div>
      </div>
    </div>
  );
};

export default Logs;
