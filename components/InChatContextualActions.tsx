'use client';

export default function InChatContextualActions() {
  const actionOptions = [
    {
      id: 1,
      emoji: '🛂',
      label: 'Passport',
      description: 'আপনার পাসপোর্ট',
    },
    {
      id: 2,
      emoji: '⚡',
      label: 'Electric Bill',
      description: 'বিদ্যুৎ বিল',
    },
    {
      id: 3,
      emoji: '🏠',
      label: 'Rent Agreement',
      description: 'ভাড়া চুক্তি',
    },
    {
      id: 4,
      emoji: '📋',
      label: 'Bank Statement',
      description: 'ব্যাংক বিবরণ',
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-slate-50">
      {/* Chat Feed */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        {/* AI Chat Bubble */}
        <div className="mb-6 flex justify-start">
          <div className="bg-white rounded-[20px] rounded-tl-sm shadow-sm px-5 py-4 max-w-xs">
            <p className="text-slate-900 font-semibold text-base">
              আপনার কাছে কোন ধরনের ডকুমেন্ট আছে?
            </p>
            <p className="text-slate-600 text-sm mt-1">
              নীচে থেকে একটি বেছে নিন বা অন্য কিছু বলুন।
            </p>
          </div>
        </div>

        {/* Action Blocks Grid - 2 Columns */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {actionOptions.map((option) => (
            <button
              key={option.id}
              className="bg-white rounded-[20px] p-4 flex flex-col items-center justify-center aspect-square shadow-sm active:scale-95 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
              aria-label={`${option.label}: ${option.description}`}
            >
              <div className="text-3xl mb-2">{option.emoji}</div>
              <p className="font-bold text-slate-900 text-sm text-center leading-tight">
                {option.label}
              </p>
              <p className="text-xs text-slate-500 text-center mt-1">
                {option.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Escape Hatch Button - Sticky Bottom */}
      <div className="flex-shrink-0 px-4 pb-6 border-t border-slate-200 pt-4">
        <button
          className="w-full border-2 border-dashed border-slate-300 text-slate-600 py-3 rounded-[16px] font-semibold text-sm transition-colors active:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300"
          aria-label="আমার কাছে ভিন্ন ধরনের ডকুমেন্ট আছে"
        >
          আমার কাছে ভিন্ন ডকুমেন্ট আছে
        </button>
      </div>
    </div>
  );
}
