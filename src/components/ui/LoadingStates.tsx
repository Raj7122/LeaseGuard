import React from 'react';

export function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg animate-pulse border border-gray-100">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gray-200 rounded-lg" />
        <div className="flex-1">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
          <div className="h-6 bg-gray-200 rounded w-1/2" />
        </div>
      </div>
    </div>
  );
}

export function ModernSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div className="w-8 h-8 border-4 border-blue-200 rounded-full" />
        <div className="absolute top-0 left-0 w-8 h-8 border-4 border-blue-600 rounded-full animate-spin border-t-transparent" />
      </div>
    </div>
  );
}

export default { SkeletonCard, ModernSpinner };


