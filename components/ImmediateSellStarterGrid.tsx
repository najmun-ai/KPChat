'use client';

export default function ImmediateSellStarterGrid() {
  const tasks = [
    {
      id: 1,
      emoji: '📄',
      title: 'CV/Resume',
      subtitle: 'তৈরি করুন বা আপডেট করুন',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
    },
    {
      id: 2,
      emoji: '✉️',
      title: 'Letter',
      subtitle: 'আবেদন পত্র লিখুন',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100',
    },
    {
      id: 3,
      emoji: '🛂',
      title: 'NID/Passport',
      subtitle: 'ডকুমেন্ট সাহায্য',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100',
    },
    {
      id: 4,
      emoji: '🔧',
      title: 'Fix Files',
      subtitle: 'ফাইল সারাই করুন',
      bgColor: 'bg-amber-50',
      iconBg: 'bg-amber-100',
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-slate-50">
      {/* Header */}
      <div className="flex-shrink-0 pt-6 px-4 pb-4">
        <h1 className="text-center text-2xl font-bold text-slate-900">
          আসসালামু আলাইকুম!
        </h1>
        <p className="text-center text-base text-slate-600 mt-2">
          আজকে আপনাকে কীভাবে সাহায্য করতে পারি?
        </p>
      </div>

      {/* Main Grid - 2x2 Bento */}
      <div className="flex-1 px-4 py-6 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {tasks.map((task) => (
            <button
              key={task.id}
              className={`${task.bgColor} rounded-[24px] p-4 flex flex-col items-start justify-start aspect-square transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400`}
              aria-label={`${task.title}: ${task.subtitle}`}
            >
              {/* Icon Circle */}
              <div className={`${task.iconBg} rounded-full w-12 h-12 flex items-center justify-center text-2xl mb-3`}>
                {task.emoji}
              </div>
              {/* Title & Subtitle */}
              <h2 className="text-sm font-bold text-slate-900 leading-tight">
                {task.title}
              </h2>
              <p className="text-xs text-slate-600 mt-1 leading-tight">
                {task.subtitle}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Anchor Button */}
      <div className="flex-shrink-0 px-4 pb-6">
        <button
          className="w-full bg-slate-900 text-white py-4 rounded-[20px] font-bold text-base transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-600"
          aria-label="সাধারণ সাহায্য বা অন্য কিছু জিজ্ঞাসা করুন"
        >
          সাধারণ সাহায্য / অন্য প্রশ্ন
        </button>
      </div>
    </div>
  );
}
