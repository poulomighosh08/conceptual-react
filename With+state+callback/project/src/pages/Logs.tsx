import React, { useCallback, useMemo, useReducer, useState } from 'react';
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
import logsData from '../data/logs.json';
import FilterButtons from '../components/dashboard/FilterButtons';

const Logs: React.FC = () => {
  const { state, dispatch } = useFilter();
  const [selectedSeverity, setSelectedSeverity] = useState<string | null>(null);

  const filteredLogs = selectedSeverity
    ? logsData.filter((log) => log.severity === selectedSeverity)
    : logsData;
    
// ✅ useCallback memoizes the function
const handleFilter = useCallback((severity: string | null) => {
  console.log('[✅] handleFilter created once');
  setSelectedSeverity(severity);
}, []);

  // ✅ useMemo caches the result unless `logs` changes
  const errorLogs = useMemo(() => {
    console.log('[✅] Calculating errorLogs once...');
    return logsData.filter((log) => log.severity === 'error');
  }, [logsData]); // Only recomputes when logsData changes

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
        <FilterButtons onFilter={handleFilter} />
        <div className="px-6 pb-4">
          <h2 className="text-lg font-semibold">Filtered Logs ({filteredLogs.length})</h2>
          <ul className="list-disc pl-6 text-sm text-gray-700">
            {filteredLogs.map((log, idx) => (
              <li key={idx}>{log.severity.toUpperCase()} - {log.message}</li>
            ))}
          </ul>
        </div>

        <div className="px-6 pb-4">
          <h2 className="text-lg font-semibold">Error Logs (useMemo) - {errorLogs.length}</h2>
          <ul className="list-disc pl-6 text-sm text-red-600">
            {errorLogs.map((log, idx) => (
              <li key={idx}>{log.message}</li>
            ))}
          </ul>
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

export default Logs;
