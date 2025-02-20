import React from 'react';

const STATUS_TYPES = {
  AVAILABLE: {
    text: 'Dostępny do pracy',
    color: 'bg-green-500',
    textColor: 'text-green-500',
    pulseColor: 'bg-green-400'
  },
  FREELANCE: {
    text: 'Dostępny na zlecenie',
    color: 'bg-yellow-500',
    textColor: 'text-yellow-500',
    pulseColor: 'bg-yellow-400'
  },
  UNAVAILABLE: {
    text: 'Niedostępny do pracy',
    color: 'bg-red-500',
    textColor: 'text-red-500',
    pulseColor: 'bg-red-400'
  }
};

function HireStatus({ status = 'AVAILABLE' }) {
  const currentStatus = STATUS_TYPES[status];

  return (
    <div className="flex items-center gap-2">
      <div className="relative flex">
        <div className={`w-3 h-3 rounded-full ${currentStatus.color}`} />
        <div 
          className={`absolute inset-0 rounded-full ${currentStatus.pulseColor} animate-ping opacity-75`} 
        />
      </div>
      <span className={currentStatus.textColor}>{currentStatus.text}</span>
    </div>
  );
}

export default HireStatus; 