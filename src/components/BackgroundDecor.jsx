import React from 'react';

export function HeartPattern() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute -top-16 -left-16 animate-float">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" className="text-rose-300">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
      {/* Add more hearts with different positions and animations */}
    </div>
  );
}

export function FloatingElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-full h-full">
        <div className="absolute top-1/4 left-1/4 animate-pulse-slow">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-rose-200/20 to-pink-200/20 blur-xl"/>
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-pulse-slower">
          <div className="w-40 h-40 rounded-full bg-gradient-to-r from-purple-200/10 to-rose-200/10 blur-xl"/>
        </div>
      </div>
    </div>
  );
}

export const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <div 
          key={i}
          className={`absolute opacity-20 ${
            i % 2 === 0 ? 'text-rose-300' : 'text-pink-300'
          }`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${6 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
      ))}
    </div>
  );
};

export const GlowingOrbs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute top-1/4 -left-10 w-40 h-40 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"/>
      <div className="absolute bottom-1/4 -right-10 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slower"/>
      <div className="absolute top-3/4 left-1/3 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"/>
    </div>
  );
};