const TelegramBot = require('node-telegram-bot-api');

const token = '1877929690:AAEGcU2Ytrn2sdBr66FTPS3NMshEaQh6fK8';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const name = msg.chat.first_name;

  const animal = ['краб', 'слон', 'жираф', 'кот', 'собака'];
  const random = Math.floor(Math.random() * 5);

  if (name === 'Eugene') {
    return bot.sendMessage(chatId, `${name}, краб`);
  }

  bot.sendMessage(chatId, `${name}, ${animal[random]}`);
});
