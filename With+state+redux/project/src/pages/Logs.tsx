import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/layout/Header';
import DashboardActions, { LogsHeader } from '../components/dashboard/DashboardActions';
import MetricCard from '../components/dashboard/MetricCard';
import ChartCard from '../components/dashboard/ChartCard';
import { useFilter } from '../context/FilterContext';
import { getLogsMetricsRequest } from '../store/logs/logsSlice';
import { selectLogsMetrics } from '../store/logs/logsSelector';

const Logs: React.FC = () => {
  const { state, dispatch: filterDispatch } = useFilter();
  const dispatch = useDispatch();
  const logsMetrics = useSelector(selectLogsMetrics);

  useEffect(() => {
    dispatch(getLogsMetricsRequest());
  }, [dispatch]);

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
          onTimeRangeChange={(range) => filterDispatch({ type: 'SET_TIME_RANGE', payload: range })}
          onFilterToggle={(open) => filterDispatch({ type: 'TOGGLE_FILTER', payload: open })}
        />

        <LogsHeader />

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
            data={{
              title: 'Traces over time',
              data: [{ time: '5:08 PM', value: 8 }],
              xAxisLabel: 'Time',
              yAxisLabel: 'Traces',
            }}
          />
          <ChartCard
            data={{
              title: 'Total usage over time',
              data: [{ time: '5:08 PM', value: 2.01 }],
              xAxisLabel: 'Time',
              yAxisLabel: 'Cost ($)',
            }}
            dropdown="Cost"
          />
        </div>

        <div className="px-4 flex flex-wrap -mx-2 mt-4">
          <ChartCard
            data={{
              title: 'Average user feedback',
              data: [],
              xAxisLabel: '',
              yAxisLabel: '',
            }}
            width="w-1/2"
          />
          <ChartCard
            data={{
              title: 'Latency',
              data: [{ time: '5:08 PM', value: 280 }],
              xAxisLabel: 'Time',
              yAxisLabel: 'Latency (s)',
            }}
            dropdown="p50"
            width="w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Logs;
