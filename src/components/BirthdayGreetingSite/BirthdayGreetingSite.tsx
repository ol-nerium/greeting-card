import React, { useState } from 'react';
import { motion } from 'framer-motion';

// BirthdayGreetingSite
// Single-file React component (TailwindCSS + Framer Motion + shadcn-ready structure)
// - Hero with headline + CTA
// - Gallery of templates to choose
// - Form to enter recipient name, sender name and custom message
// - Live preview card
// - Share / download stub buttons (no external APIs)

export default function BirthdayGreetingSite() {
  const templates = [
    {
      id: 'sunrise',
      title: 'Сонячне вітання',
      accent: 'from-yellow-300 to-pink-300',
      emoji: '🌅',
      sample: 'Нехай цей день буде наповнений світлом і теплом!',
    },
    {
      id: 'balloons',
      title: 'Кольорові кульки',
      accent: 'from-cyan-300 to-blue-400',
      emoji: '🎈',
      sample: 'Свято в кожній миті — святкуй на повну!',
    },
    {
      id: 'cake',
      title: 'Торт і свічки',
      accent: 'from-pink-300 to-rose-400',
      emoji: '🍰',
      sample: 'З Днем народження! Бажаю найсолодших миттєвостей!',
    },
  ];

  const [selected, setSelected] = useState(templates[0].id);
  const [recipient, setRecipient] = useState('');
  const [sender, setSender] = useState('');
  const [message, setMessage] = useState(templates[0].sample);

  const current = templates.find(t => t.id === selected) || templates[0];

  function handleTemplateChange(id) {
    setSelected(id);
    const t = templates.find(x => x.id === id);
    if (t) setMessage(t.sample);
  }

  function handleSend(e) {
    e.preventDefault();
    // Stub: real implementation would call an API to send email/sms or generate downloadable image.
    alert(`Привітання для ${recipient || 'невідомий'} готове!\n\nВід: ${
      sender || 'хто'
    }
    Повідомлення:${message}`);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-12 px-6">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Привітання з Днем народження
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Швидко створюй красиві листівки і надсилай рідним.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-md">
              Створити
            </button>
            <button className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-600">
              Увійти
            </button>
          </div>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column: templates + form */}
          <section className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                Виберіть шаблон
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Клікніть на картку, щоб вибрати стиль листівки.
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {templates.map(t => (
                  <button
                    key={t.id}
                    onClick={() => handleTemplateChange(t.id)}
                    className={`relative rounded-xl p-4 text-left border transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 ${
                      selected === t.id
                        ? 'ring-2 ring-offset-2 ring-indigo-400'
                        : 'border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-12 w-12 rounded-lg bg-gradient-to-br ${t.accent} flex items-center justify-center text-2xl shadow-inner`}
                      >
                        {t.emoji}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {t.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          Коротке привітання
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSend}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                Налаштувати привітання
              </h3>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm text-gray-600">Кому</span>
                  <input
                    value={recipient}
                    onChange={e => setRecipient(e.target.value)}
                    placeholder="Ім'я отримувача"
                    className="mt-2 px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-200"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm text-gray-600">Від кого</span>
                  <input
                    value={sender}
                    onChange={e => setSender(e.target.value)}
                    placeholder="Твоє ім'я"
                    className="mt-2 px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-200"
                  />
                </label>
              </div>

              <label className="block mt-4">
                <span className="text-sm text-gray-600">Повідомлення</span>
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  rows={4}
                  className="mt-2 w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-200"
                />
                <div className="mt-2 text-xs text-gray-400">
                  Порада: використовуйте емодзі, щоб зробити привітання
                  теплішим.
                </div>
              </label>

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-2xl bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow"
                >
                  Надіслати
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setRecipient('');
                    setSender('');
                    setMessage(templates.find(t => t.id === selected).sample);
                  }}
                  className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700"
                >
                  Очистити
                </button>
                <div className="ml-auto text-sm text-gray-500">
                  Шаблон:{' '}
                  <span className="font-medium text-gray-700">
                    {current.title}
                  </span>
                </div>
              </div>
            </motion.form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-800">Поради</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>
                  • Додайте спільну пам'ять або жарт — це робить привітання
                  унікальним.
                </li>
                <li>
                  • Вставте фото (ця версія — шаблон, фото можна додати у повній
                  реалізації).
                </li>
                <li>• Спробуйте інші шаблони для різного настрою.</li>
              </ul>
            </motion.div>
          </section>

          {/* Right column: live preview */}
          <aside className="sticky top-6">
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-3xl p-6 shadow-lg w-full max-w-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`h-12 w-12 rounded-lg bg-gradient-to-br ${current.accent} flex items-center justify-center text-2xl`}
                  >
                    {current.emoji}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Шаблон</div>
                    <div className="font-semibold text-gray-900">
                      {current.title}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-400">Прев'ю</div>
              </div>

              <div className="mt-6 bg-gradient-to-b from-white/60 to-gray-50 rounded-xl p-4 border border-gray-100 shadow-inner">
                <div className="rounded-lg overflow-hidden">
                  {/* Card preview */}
                  <div
                    className={`p-6 rounded-lg bg-gradient-to-br ${current.accent}`}
                  >
                    <div className="text-xl font-bold text-white">
                      {current.emoji}{' '}
                      {recipient ? `Для ${recipient}` : 'Для вас'}
                    </div>
                    <div className="mt-3 text-white/90 text-sm leading-relaxed">
                      {message}
                    </div>
                    <div className="mt-6 text-xs text-white/80">
                      З любов'ю,{' '}
                      <span className="font-semibold">{sender || 'Ти'}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <button className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm">
                    Завантажити
                  </button>
                  <button className="flex-1 px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm">
                    Поділитися
                  </button>
                </div>
              </div>

              <div className="mt-4 text-xs text-gray-500">
                Порада: натисніть{' '}
                <span className="font-medium">Поділитися</span>, щоб згенерувати
                посилання (потрібна реалізація на бекенді).
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-sm text-gray-600"
            >
              <h4 className="font-medium text-gray-800">Швидкі дії</h4>
              <div className="mt-2 flex gap-2">
                <button className="flex-1 px-3 py-2 rounded-lg border border-gray-200">
                  Поділитися в Viber
                </button>
                <button className="flex-1 px-3 py-2 rounded-lg border border-gray-200">
                  Поділитися в Telegram
                </button>
              </div>
            </motion.div>
          </aside>
        </main>

        <footer className="mt-12 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Листівки з теплом • Зроблено з ❤️
        </footer>
      </div>
    </div>
  );
}
