import TelegramBot from 'node-telegram-bot-api';

const token = '5557629531:AAEsX5ILQJf-dZ-wUJXxecmfYohokjQuAxY';
const bot = new TelegramBot(token, {
  polling: true,
  baseApiUrl:"https://tg.hjzovo.workers.dev"
});

// 匹配/hentai
bot.onText(/\/hentai/, function onLoveText(msg) {
  bot.sendMessage(msg.chat.id, 'Are you a hetai?');
});


// 匹配/echo
bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, resp);
});