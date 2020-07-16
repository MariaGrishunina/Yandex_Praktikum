let phrases = [
    { text: 'посмотреть мемесы.', image: 'https://media.tenor.com/images/2057f20854ca8a9fc52de07839cc60a1/tenor.gif' },
    { text: 'поиграть в Hearthstone.', image: 'https://i.imgur.com/wafmaGE.jpg' },
    { text: 'поковырять ногу.', image: 'https://peopletalk.ru/wp-content/uploads/2017/05/1494940986.gif' },
    { text: 'покурить с Антоном.', image: 'https://lh3.googleusercontent.com/proxy/qc3EBCqN5ljGSu-82u3zZhGR3IKkqQe80Q2OrsZsdjl2AKiCO1N8nrpwuSOeXHsA9JBsU2UyQf2esOZ30ZpYvp5-Fdsz4Dc71_v6u8sHHWxTzeDostwENe-q71rCJaR1lnGcT9xk-BWEw-yZyNog6TA' },
    { text: 'попить чай/кофе.', image: 'https://pa1.narvii.com/6455/5cee4df3d8924092cd88de99efb7dd5c24cc9edb_00.gif' },
    { text: 'перекусить.', image: 'https://i.pinimg.com/originals/ed/a8/67/eda86729179d246d88aa1b331ff2d7d4.gif' },
    { text: 'посмотреть ПикПоки.', image: 'https://i.pinimg.com/originals/8e/1d/1c/8e1d1cee4879db1796c87f0a620afe6a.png' },
    { text: 'посмотреть Youtube.', image: 'https://www.youtube.com/s/desktop/9225b7fd/img/favicon_144.png' },
    { text: 'посмотреть трейлер аниме/фильма/сериала.', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
    { text: 'проверить непрочитанные сообщения на телефоне.', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' },
    { text: 'сделать ЛЕГКУЮ разминку для профилактики остеохондроза.', image: 'https://steamuserimages-a.akamaihd.net/ugc/39730888998950946/AA7E1267B035B7ADB1348F23F072B737B5442153/'},
    { text: 'поспать.', image: 'https://media1.giphy.com/media/XoM1eSwGMXK4huqV2E/source.gif'}
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  });
  