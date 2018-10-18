Задание:
Применив любой шаблонизатор сверстать страницу.
Модель для шаблона - js объект, содержащий поля:
{
  decision: string,
  category: string; optional,
  slp: string; optional,
  upc: string; optional,
  price: number; optional,
  imageUrl: string; optional,
  canVoid: boolean,
  canReprint: boolean,
  isVoided: boolean,
}
Желательно - flexbox
Не желательно - css grid layput

Требования:
1. Все элементы должны помещаться и выглядеть хорошо при любом разрешении,
описанном в требованиях и при любых допустимых значениях в модели
2. Если разрешение меньше допустимого возможно появление скролла
3. Поддержка retina дисплеев
4. Min resolution 960x640 (landscape / portrait)
5. Max resolution 2880x1800
6. Браузеры: chrome, safari, firefox, edge, default ios/android browsers

Критерии оценки (по приоритетам):
1. Выполненность требований
2. Семантическое разбиение на компоненты (совсем хорошо - переиспользование компонентов напр. кнопка)
3. Изящность html кода (минимальное количество html разметки и css атрибутов)
4. Наличие косметики: хавера на кнопках, тени, красивые бордеры (все на усмотрение разработчика)