import React, { useMemo, useReducer, useState } from 'react';
import Header from '../components/layout/Header';
import DashboardActions, { LogsHeader } from '../components/dashboard/DashboardActions';
import MetricCard from '../components/dashboard/MetricCard';
import ChartCard from '../components/dashboard/ChartCard';
import {
  logsMetrics,
  traceTimeData,
  usageTimeData,
  latencyData
} from '../data/mockData';
import { useFilter } from '../context/FilterContext';

type Log = {
  id: string;
  message: string;
}

const Logs_Bad: React.FC = () => {
  const { state, dispatch } = useFilter();

  const [logs, setLogs] = useState<Log[]>([]);

  // ❌ Side effect during render
  console.log('Fetching logs...');
  fetch('/api/logs')
    .then(response => response.json())
    .then(data => setLogs(data));

  return (
    <div className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50">
      <Header
        title="SAMPLE! Repository"
        subtitle="sitory"
        activeTab="Alerts"
      />

      <div className="flex-1 pb-6">
        <DashboardActions
          timeRange={state.timeRange}
          isFilterOpen={state.isFilterOpen}
          onTimeRangeChange={(range) => dispatch({ type: 'SET_TIME_RANGE', payload: range })}
          onFilterToggle={(open) => dispatch({ type: 'TOGGLE_FILTER', payload: open })}
        />

        <LogsHeader />
        <div>
      {logs.map(log => (
        <div key={log.id}>{log.message}</div>
      ))}
    </div>

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
          <ChartCard data={traceTimeData} />
          <ChartCard data={usageTimeData} dropdown="Cost" />
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
          />

          <ChartCard
            data={latencyData}
            dropdown="p50"
            width="w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Logs_Bad;
