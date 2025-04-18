import React from 'react';

const EmptyFeedback: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-48 text-gray-500 text-sm">
      No feedback scores available.
    </div>
  );
};

export default EmptyFeedback;