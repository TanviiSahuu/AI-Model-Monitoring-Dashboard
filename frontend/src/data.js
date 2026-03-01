export const kpis = {
  accuracy: 94.3,
  latency: 186,
  volume: 128_420,
  drift: 6.4
};

export const accuracyTrend = [
  { time: '09:00', accuracy: 95.1 },
  { time: '10:00', accuracy: 95.0 },
  { time: '11:00', accuracy: 94.8 },
  { time: '12:00', accuracy: 94.7 },
  { time: '13:00', accuracy: 94.5 },
  { time: '14:00', accuracy: 94.3 },
  { time: '15:00', accuracy: 94.2 }
];

export const models = [
  { id: 'rec-v1', name: 'Recommender v1', accuracy: 95.4, latency: 160, volume: 42120, status: 'Healthy' },
  { id: 'fraud-v3', name: 'Fraud Detector v3', accuracy: 92.1, latency: 220, volume: 22119, status: 'Warning' },
  { id: 'support-v2', name: 'Support Classifier v2', accuracy: 96.6, latency: 140, volume: 32311, status: 'Healthy' }
];

export const alerts = [
  { id: 1, severity: 'critical', message: 'Fraud Detector accuracy dropped below 93%', timestamp: '2 mins ago' },
  { id: 2, severity: 'warning', message: 'Data drift rose above 6% on Recommender v1', timestamp: '13 mins ago' },
  { id: 3, severity: 'info', message: 'Support Classifier latency improved by 8%', timestamp: '21 mins ago' }
];

export const logs = [
  { id: 'p-1001', model: 'Recommender v1', prediction: 'Upsell', confidence: 0.93, latency: 132, time: '2026-03-01 14:09:03' },
  { id: 'p-1002', model: 'Fraud Detector v3', prediction: 'Fraud', confidence: 0.87, latency: 245, time: '2026-03-01 14:08:50' },
  { id: 'p-1003', model: 'Support Classifier v2', prediction: 'Billing', confidence: 0.96, latency: 118, time: '2026-03-01 14:08:41' }
];
