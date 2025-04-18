import React from 'react';

type Props = {
  onFilter: (severity: string | null) => void;
};

const FilterButtons: React.FC<Props> = ({ onFilter }) => {
  console.log('[🧠] FilterButtons rendered');

  return (
    <div className="mb-4 flex gap-2">
      <button onClick={() => onFilter(null)}>All</button>
      <button onClick={() => onFilter('info')}>Info</button>
      <button onClick={() => onFilter('warning')}>Warning</button>
      <button onClick={() => onFilter('error')}>Error</button>
    </div>
  );
};

export default React.memo(FilterButtons); // 🔁 avoids re-render unless props change
