import React, { useEffect, useState } from 'react';
import logsData from '../data/logs.json';

type Log = {
  timestamp: string;
  message: string;
  severity: string;
};

const LogsPage: React.FC = () => {
  const [logs, setLogs] = useState<Log[]>([]);
  const [timeRange, setTimeRange] = useState<string>('Last 24 hours');
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  useEffect(() => {
    // Imagine later this fetch depends on timeRange too
    setLogs(logsData);
  }, []);

  const handleTimeRangeChange = () => {
    const next =
      timeRange === 'Last 24 hours'
        ? 'Last 7 days'
        : timeRange === 'Last 7 days'
        ? 'Last 30 days'
        : 'Last 24 hours';

    setTimeRange(next);
    // you might forget to reset other states here!
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div>
      <h2>Logs</h2>
      <button onClick={handleTimeRangeChange}>
        Time Range: {timeRange}
      </button>
      <button onClick={toggleFilter}>
        {isFilterOpen ? 'Hide Filter' : 'Show Filter'}
      </button>

      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Message</th>
            <th>Severity</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, idx) => (
            <tr key={idx}>
              <td>{log.timestamp}</td>
              <td>{log.message}</td>
              <td>{log.severity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogsPage;
