import articleImg from 'assets/images/dashboard-article-dummy.jpg'
import userAvatar from 'assets/images/user-avatar-dummy.jpg'

export const pieData = [
  { name: 'сплачено', value:1000000 },
  { name: 'очікується', value: 10000000 },
]

export const dataDebts = [
  {
    date: new Date(2020, 2, 1).getTime(),
    value: 10,
  },
  {
    date: new Date(2020, 3, 1).getTime(),
    value: 15,
  },
  {
    date: new Date(2020, 4, 1).getTime(),
    value: 15,
  },
  {
    date: new Date(2020, 5, 1).getTime(),
    value: 15,
  },
  {
    date: new Date(2020, 6, 1).getTime(),
    value: 20,
  },
  {
    date: new Date(2020, 7, 1).getTime(),
    value: 22,
  },
  {
    date: new Date(2020, 8, 1).getTime(),
    value: 25,
  },
  {
    date: new Date(2020, 9, 1).getTime(),
    value: 30,
  },
  {
    date: new Date(2020, 10, 1).getTime(),
    value: 22,
  },
  {
    date: new Date(2020, 11, 1).getTime(),
    value: 37,
  },
  {
    date: new Date(2021, 0, 1).getTime(),
    value: 39,
  },
  {
    date: new Date(2021, 1, 1).getTime(),
    value: 40,
  },
]

export const dataRequests = [
  {
    date: new Date(2020, 2, 1).getTime(),
    totalLabel: `всього заявок`,
    doneLabel: `закритi`,
    total: 10,
    done: 10,
  },
  {
    date: new Date(2020, 2, 8).getTime(),
    totalLabel: `всього заявок`,
    doneLabel: `закритi`,
    total: 20,
    done: 20,
  },
  {
    date: new Date(2020, 2, 15).getTime(),
    totalLabel: `всього заявок`,
    doneLabel: `закритi`,
    total: 18,
    done: 18,
  },
  {
    date: new Date(2020, 2, 22).getTime(),
    totalLabel: `всього заявок`,
    doneLabel: `закритi`,
    total: 28,
    done: 28,
  },
  {
    date: new Date(2020, 3, 1).getTime(),
    totalLabel: `всього заявок`,
    doneLabel: `закритi`,
    total: 25,
    done: 22,
  },
  {
    date: new Date(2020, 3, 8).getTime(),
    totalLabel: `всього заявок`,
    doneLabel: `закритi`,
    total: 12,
    done: 11,
  },
  {
    date: new Date(2020, 3, 15).getTime(),
    totalLabel: `всього заявок`,
    doneLabel: `закритi`,
    total: 20,
    done: 18,
  },
  {
    date: new Date(2020, 3, 22).getTime(),
    totalLabel: `всього заявок`,
    doneLabel: `закритi`,
    total: 28,
    done: 18,
  },
]

export const articleData = {
  image: articleImg,
  author: `Керуючий`,
  title: `Встановили автомат для води`,
  tags: [`покращення`],
  description: `Шановні мешканці, було встановлено автомат для води. Постачальник послуг компанія аквафор. Вода оброблена осмосом корисна для вашого здоров&rsquo;я.`,
  social: {
    liked: 65,
    disliked: 11,
    comments: 11
  }
}

export const commentsData = [
  {
    avatar: userAvatar,
    name: `Igor T.`,
    description: `Шановні мешканці на території комплексу було встановлено другий автомат води. Шановні мешканці на території комплексу було встановлено другий автомат води.`,
    social: {
      liked: 65,
      disliked: 11,
      comments: 11
    }
  },
  {
    avatar: userAvatar,
    name: `Ольга Шевчук`,
    description: `Шановні мешканці на території комплексу було встановлено другий автомат води. Шановні мешканці на території комплексу було встановлено другий автомат води.`,
  },
]

export const popularData = [
  {
    image: articleImg,
    author: `Керуючий`,
    title: `Встановили автомат для води`,
    tags: [`покращення`],
    description: `Шановні мешканці, було встановлено автомат для води. Постачальник послуг компанія аквафор.  `,
    social: {
      liked: 65,
      disliked: 11,
      comments: 11
    }
  },
  {
    image: articleImg,
    author: `Керуючий`,
    title: `Планове відключення елетроенергії`,
    tags: [`погіршення`],
    description: `Шановні мешканці, повидомляємо про планове відключення електроенергії, в звязку з ремонтними роботами.`,
    social: {
      liked: 0,
      disliked: 80,
      comments: 11
    }
  },
  {
    author: `Керуючий`,
    title: `Птдвищення таріфив на газ`,
    tags: [`покращення`],
    description: `В Україні держава більше не регулює ціни на газ. З 1 серпня минулого року запрацював ринок газу для населення. Крім того, зросла і плата за доставку газу - в середньому в понад півтора рази. Тож тепер одні споживачі платитимуть 37 копійок за кубометр на місяць, а інші - понад 3 гривні.`,
    social: {
      liked: 65,
      disliked: 11,
      comments: 11
    }
  },
]
