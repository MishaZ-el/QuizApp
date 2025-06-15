const questionsElectrical = [
  {
    text: "Что такое электрический ток?",
    answers: [
      { id: 1, option: "Направленное движение заряженных частиц", isCorrect: true },
      { id: 2, option: "Количество энергии, потребляемое лампочкой", isCorrect: false },
      { id: 3, option: "Процесс передачи тепла проводником", isCorrect: false },
    ],
  },
  {
    text: "Единица измерения напряжения:",
    answers: [
      { id: 1, option: "Вольт", isCorrect: true },
      { id: 2, option: "Ом", isCorrect: false },
      { id: 3, option: "Ампер", isCorrect: false },
    ],
  },
  {
    text: "Закон Ома гласит, что сила тока прямо пропорциональна напряжению и обратно пропорциональна чему?",
    answers: [
      { id: 1, option: "Температуре", isCorrect: false },
      { id: 2, option: "Электрическому сопротивлению", isCorrect: true },
      { id: 3, option: "Массе тела", isCorrect: false },
    ],
  },
  {
    text: "Как называют соединение, при котором все компоненты соединены последовательно друг за другом?",
    answers: [
      { id: 1, option: "Параллельное", isCorrect: false },
      { id: 2, option: "Смешанное", isCorrect: false },
      { id: 3, option: "Последовательное", isCorrect: true },
    ],
  },
  {
    text: "Какой вид тока используется в бытовой электросети?",
    answers: [
      { id: 1, option: "Постоянный ток (DC)", isCorrect: false },
      { id: 2, option: "Переменный ток (AC)", isCorrect: true },
      { id: 3, option: "Импульсный ток", isCorrect: false },
    ],
  },
  {
    text: "Какой прибор предназначен для измерения силы тока?",
    answers: [
      { id: 1, option: "Амперметр", isCorrect: true },
      { id: 2, option: "Вольтметр", isCorrect: false },
      { id: 3, option: "Омметр", isCorrect: false },
    ],
  },
  {
    text: "Что защищает электрическую цепь от короткого замыкания?",
    answers: [
      { id: 1, option: "Выключатель света", isCorrect: false },
      { id: 2, option: "Автоматический выключатель (автомат)", isCorrect: true },
      { id: 3, option: "Розетка", isCorrect: false },
    ],
  },
];

export default questionsElectrical;
