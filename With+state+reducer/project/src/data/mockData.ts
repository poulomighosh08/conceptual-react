import { NavSection, TimeSeriesData } from '../types';

export const navigationSections: NavSection[] = [
  {
    title: 'EVALUATE',
    items: [
      { label: 'Prompts', path: '/prompts', icon: 'FileText' },
      { label: 'Workflows', path: '/workflows', icon: 'GitBranch' },
      { label: 'Runs', path: '/runs', icon: 'Play' }
    ]
  },
  {
    title: 'OBSERVE',
    items: [
      { label: 'Logs', path: '/logs', icon: 'List' }
    ]
  },
  {
    title: 'ANALYZE',
    items: [
      { label: 'Dashboards', path: '/dashboards', icon: 'BarChart2' }
    ]
  },
  {
    title: 'LIBRARY',
    items: [
      { label: 'Evaluators', path: '/evaluators', icon: 'CheckSquare' },
      { label: 'Datasets', path: '/datasets', icon: 'Database' },
      { label: 'Context sources', path: '/context-sources', icon: 'Layers' },
      { label: 'Prompt tools', path: '/prompt-tools', icon: 'Tool' },
      { label: 'Prompt partials', path: '/prompt-partials', icon: 'Scissors' }
    ]
  }
];

export const additionalNavItems: NavSection[] = [
  {
    title: '',
    items: [
      { label: "What's new", path: '/whats-new', icon: 'Bell' },
      { label: 'Support', path: '/support', icon: 'LifeBuoy' },
      { label: 'Documentation', path: '/documentation', icon: 'BookOpen' },
      { label: 'Settings', path: '/settings', icon: 'Settings' }
    ]
  }
];

export const logsMetrics = {
  totalTraces: 8,
  totalUsage: {
    cost: '$2.01',
    input: '$0.41',
    completion: '$1.59'
  },
  averageFeedback: {
    value: '-',
    ratings: 0
  }
};

export const traceTimeData: TimeSeriesData = {
  title: 'Traces over time',
  data: [
    { time: '5:08 PM', value: 8 }
  ],
  xAxisLabel: 'Time',
  yAxisLabel: 'Traces'
};

export const usageTimeData: TimeSeriesData = {
  title: 'Total usage over time',
  data: [
    { time: '5:08 PM', value: 2.01 }
  ],
  xAxisLabel: 'Time',
  yAxisLabel: 'Cost ($)'
};

export const latencyData: TimeSeriesData = {
  title: 'Latency',
  data: [
    { time: '5:08 PM', value: 280 }
  ],
  xAxisLabel: 'Time',
  yAxisLabel: 'Latency (s)'
};