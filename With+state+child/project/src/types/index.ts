export interface NavItem {
  label: string;
  path: string;
  icon: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export interface UsageMetric {
  value: string | number;
  label: string;
}

export interface ChartDataPoint {
  time: string;
  value: number;
}

export interface TimeSeriesData {
  title: string;
  data: ChartDataPoint[];
  xAxisLabel: string;
  yAxisLabel: string;
}