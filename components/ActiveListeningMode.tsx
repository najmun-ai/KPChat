'use client';

import { useState, useEffect } from 'react';

export default function ActiveListeningMode() {
  const [liveTranscript, setLiveTranscript] = useState(
    'আমি আপনার কথা শুনছি... আপনার কথা সম্পর্কে বলুন'
  );
  const [isListening, setIsListening] = useState(true);

  // Simulate live transcript updates (demonstration)
  useEffect(() => {
    if (!isListening) return;

    const timer = setTimeout(() => {
      setLiveTranscript(
        'আমি একটি সিভি তৈরি করতে চাই যা আন্তর্জাতিক মানের হবে। আমার অভিজ্ঞতা পাঁচ বছর এবং আমি সফটওয়্যার ডেভেলপার।'
      );
    }, 3000);

    return () => clearTimeout(timer);
  }, [isListening]);

  return (
    <div className="flex flex-col h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="flex-shrink-0 pt-6 px-4 pb-4 flex items-center justify-between">
        <h1 className="text-lg font-bold">Voice Mode</h1>
        <button
          className="text-slate-400 hover:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full p-2"
          aria-label="Close voice mode"
        >
          ✕
        </button>
      </div>

      {/* Status Badge */}
      <div className="flex-shrink-0 px-4 pb-6">
        <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/50 rounded-full px-4 py-2">
          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-indigo-300">AI LISTENING...</span>
        </div>
      </div>

      {/* Live Transcript - Teleprompter Style */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="text-center max-w-md">
          {/* Demonstration: Show older text faded, newer text bright */}
          {liveTranscript.split(' ').length > 10 ? (
            <div className="space-y-2">
              {/* Older words faded */}
              <p className="text-lg text-slate-500 opacity-50 leading-relaxed">
                আমি একটি সিভি তৈরি করতে চাই যা আন্তর্জাতিক মানের হবে।
              </p>
              {/* Newest words bright */}
              <p className="text-3xl font-bold text-slate-100 leading-relaxed">
                আমার অভিজ্ঞতা পাঁচ বছর এবং আমি সফটওয়্যার ডেভেলপার।
              </p>
            </div>
          ) : (
            <p className="text-3xl font-bold text-slate-100 leading-relaxed">
              {liveTranscript}
            </p>
          )}
        </div>
      </div>

      {/* Microphone Button - Hardware Accelerated */}
      <div className="flex-shrink-0 pb-12 flex justify-center">
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Pure CSS Ripple Animation - No heavy box-shadow */}
          {isListening && (
            <>
              <div
                className="absolute w-full h-full rounded-full bg-indigo-500/30 animate-ping"
                style={{
                  animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                  willChange: 'transform',
                  transform: 'translateZ(0)',
                }}
              />
              <div
                className="absolute w-20 h-20 rounded-full bg-indigo-500/20"
                style={{
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                  willChange: 'opacity',
                }}
              />
            </>
          )}

          {/* Microphone Button */}
          <button
            onClick={() => setIsListening(!isListening)}
            className="relative z-10 w-20 h-20 rounded-full bg-indigo-500 flex items-center justify-center text-2xl transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 focus:ring-offset-slate-900 will-change-transform"
            aria-label={isListening ? 'Stop listening' : 'Start listening'}
            style={{
              transform: 'translateZ(0)',
            }}
          >
            🎤
          </button>
        </div>
      </div>

      {/* Helper Text */}
      <div className="flex-shrink-0 pb-6 px-4 text-center">
        <p className="text-xs text-slate-500">
          {isListening
            ? 'মাইক্রোফোনে ট্যাপ করে থামুন'
            : 'আবার শুরু করতে ট্যাপ করুন'}
        </p>
      </div>
    </div>
  );
}
