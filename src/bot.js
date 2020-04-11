const express = require('express')
const bodyParser = require('body-parser')
const { Botact } = require('botact')

const app = express()
const bot = new Botact({
  confirmation: 'confirmation',
  token: 'token'
})

bot.on((ctx) => {
    console.log(ctx.body)
    ctx.reply('Не понимаю такого. Напиши "Начать", чтобы появился список команд :-)')
})

function cancel() {
    bot.command('Назад', (ctx) => {
        ctx.reply('Выбери действие', null, {
        one_time: false,
        buttons: [
          [
            {
              action: {
                type: 'text',
                label: 'Дай загадку'
              },
              color: 'primary'
            },
            {
              action: {
                type: 'text',
                label: 'Закат'
              },
              color: 'positive'
            }
          ]
        ]
        })
    })
}

bot.command('Начать', (ctx) => {
    ctx.reply('Привет! Благодарю, что уделил мне внимание, внизу есть команды, на которые я реагирую', null, {
    one_time: false,
    buttons: [
      [
        {
          action: {
            type: 'text',
            label: 'Дай загадку'
          },
          color: 'primary'
        },
        {
          action: {
            type: 'text',
            label: 'Закат'
          },
          color: 'positive'
        }
      ]
    ]
    })
})

bot.command('Дай загадку', (ctx) => {
    let randomNum = Math.ceil(Math.random() * 8);
    switch (randomNum) {
        case 1:
            ctx.reply('Не лёд, а тает, не лодка, а уплывает.', null, {
            one_time: false,
            buttons: [
              [
                {
                  action: {
                    type: 'text',
                    label: 'Узнать ответ 1'
                  },
                  color: 'positive'
                },
                {
                  action: {
                    type: 'text',
                    label: 'Назад'
                  },
                  color: 'negative'
                }
              ]
            ]
            })
            bot.command('Узнать ответ 1', (ctx) => {
                ctx.reply('Зарплата.')
            })
            cancel();
            break;
        case 2:
            ctx.reply('Что нужно делать, когда видишь зеленого человечка?', null, {
            one_time: false,
            buttons: [
              [
                {
                  action: {
                    type: 'text',
                    label: 'Узнать ответ 2'
                  },
                  color: 'positive'
                },
                {
                  action: {
                    type: 'text',
                    label: 'Назад'
                  },
                  color: 'negative'
                }
              ]
            ]
            })
            bot.command('Узнать ответ 2', (ctx) => {
                ctx.reply('Переходить улицу.')
            })
            cancel();
            break;
        case 3:
            ctx.reply('Сколько месяцев в году имеет 28 дней?', null, {
            one_time: false,
            buttons: [
              [
                {
                  action: {
                    type: 'text',
                    label: 'Узнать ответ 3'
                  },
                  color: 'positive'
                },
                {
                  action: {
                    type: 'text',
                    label: 'Назад'
                  },
                  color: 'negative'
                }
              ]
            ]
            })
            bot.command('Узнать ответ 3', (ctx) => {
                ctx.reply('Все месяцы.')
            })
            cancel();
            break;
        case 4:
            ctx.reply('Вы сидите в самолете, впереди вас лошадь, сзади автомобиль. Где вы находитесь?', null, {
            one_time: false,
            buttons: [
              [
                {
                  action: {
                    type: 'text',
                    label: 'Узнать ответ 4'
                  },
                  color: 'positive'
                },
                {
                  action: {
                    type: 'text',
                    label: 'Назад'
                  },
                  color: 'negative'
                }
              ]
            ]
            })
            bot.command('Узнать ответ 4', (ctx) => {
                ctx.reply('В карусели.')
            })
            cancel();
            break;
        case 5:
            ctx.reply('Сколько программистов нужно, чтобы закрутить лампочку?', null, {
            one_time: false,
            buttons: [
              [
                {
                  action: {
                    type: 'text',
                    label: 'Узнать ответ 5'
                  },
                  color: 'positive'
                },
                {
                  action: {
                    type: 'text',
                    label: 'Назад'
                  },
                  color: 'negative'
                }
              ]
            ]
            })
            bot.command('Узнать ответ 5', (ctx) => {
                ctx.reply('Ни одного. Это аппаратная проблема, программисты их не решают.')
            })
            cancel();
            break;
        case 6:
            ctx.reply('В каком слове 3 буквы «Л» и три буквы «П»?', null, {
            one_time: false,
            buttons: [
              [
                {
                  action: {
                    type: 'text',
                    label: 'Узнать ответ 6'
                  },
                  color: 'positive'
                },
                {
                  action: {
                    type: 'text',
                    label: 'Назад'
                  },
                  color: 'negative'
                }
              ]
            ]
            })
            bot.command('Узнать ответ 6', (ctx) => {
                ctx.reply('Параллелепипед.')
            })
            cancel();
            break;
        case 7:
            ctx.reply('Детей у него может и не быть, но он все равно папа. Как такое возможно?', null, {
            one_time: false,
            buttons: [
              [
                {
                  action: {
                    type: 'text',
                    label: 'Узнать ответ 7'
                  },
                  color: 'positive'
                },
                {
                  action: {
                    type: 'text',
                    label: 'Назад'
                  },
                  color: 'negative'
                }
              ]
            ]
            })
            bot.command('Узнать ответ 7', (ctx) => {
                ctx.reply('Папа Римский.')
            })
            cancel();
            break;
        case 8:
            ctx.reply('При каком условии 3 мальчика и 2 девочки, 4 взрослых, 1 собака и 1 кот не намокнут, став всего под 1 зонт?', null, {
            one_time: false,
            buttons: [
              [
                {
                  action: {
                    type: 'text',
                    label: 'Узнать ответ 8'
                  },
                  color: 'positive'
                },
                {
                  action: {
                    type: 'text',
                    label: 'Назад'
                  },
                  color: 'negative'
                }
              ]
            ]
            })
            bot.command('Узнать ответ 8', (ctx) => {
                ctx.reply('При условии, что дождя не будет.')
            })
            cancel();
            break;
        default:
            ctx.reply( 'Что-то пошло не так' );
    }
})

bot.command('Закат', (ctx) => {
    ctx.reply('Держи', null, {
        one_time: false,
        buttons: [
          [
            {
              action: {
                type: 'text',
                label: 'Дай загадку'
              },
              color: 'primary'
            },
            {
              action: {
                type: 'text',
                label: 'Закат'
              },
              color: 'positive'
            }
          ]
        ]
    })
    let randomNum = Math.ceil(Math.random() * 30);
    switch(randomNum) {
        case 1:
            ctx.reply(null, "photo173111817_456247778")
            break;
        case 2:
            ctx.reply(null, "photo-80837242_456240828")
            break;
        case 3:
            ctx.reply(null, "photo-80837242_456240828")
            break;
        case 4:
            ctx.reply(null, "photo-80837242_456240828")
            break;
        case 5:
            ctx.reply(null, "photo-80837242_456240828")
            break;
        case 6:
            ctx.reply(null, "photo-80837242_456240828")
            break;
        case 7:
            ctx.reply(null, "photo-80837242_456240828")
            break;
        case 8:
            ctx.reply(null, "photo-80837242_456240828")
            break;
        case 9:
            ctx.reply(null, "photo-80837242_456240828")
            break;
        case 10:
            ctx.reply(null, "photo-80837242_456240828")
            break;
        case 11:
            ctx.reply(null, "photo-80837242_456240828")
            break;
        case 12:
            ctx.reply(null, "photo-80837242_456240828")
            break;
        case 13:
            ctx.reply(null, "photo-80837242_456240828")
            break;
        case 14:
            ctx.reply(null, "photo-80837242_456240828")
            break;
        case 15:
            ctx.reply(null, "photo-345790_387260761")
            break;
        case 16:
            ctx.reply(null, "photo-123775318_456250757")
            break;
        case 17:
            ctx.reply(null, "photo210883388_456253837")
            break;
        case 18:
            ctx.reply(null, "photo-80837242_456242063")
            break;
        case 19:
            ctx.reply(null, "photo-80837242_456242041")
            break;
        case 20:
            ctx.reply(null, "photo-80837242_456241868")
            break;
        case 21:
            ctx.reply(null, "photo-80837242_456241873")
            break;
        case 22:
            ctx.reply(null, "photo-80837242_456241872")
            break;
        case 23:
            ctx.reply(null, "photo-80837242_456241875")
            break;
        case 24:
            ctx.reply(null, "photo-80837242_456241878")
            break;
        default:
            ctx.reply('Эта картинка еще не добавлена :|');
    }
})

app.use(bodyParser.json())

app.post('/', bot.listen)

app.listen(80, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on port 80`)
})
