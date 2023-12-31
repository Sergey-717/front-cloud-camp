const initialState = {
  newUser: {
    nickname: "",
    name: "",
    surname: "",
    phone: "",
    email: "",
    sex: "",
    advantages: [],
    radio: 0,
    checkbox: [],
    about: "",
  },
  modal: {
    isModalActive: false,
    response: {
      status: "",
      message: "",
    },
  },
};

export default initialState;

// {
//	'nickname - строковое значение, максимальная длина 30 символов, могут быть просто буквы и цифры (спец символы запрещены)
// name - строковое значение, максимальная длина 50 символов, только буквы
// sername - строковое значение, максимальная длина 50 символов, только буквы
// phone - строковое значение, форма записи +7 (900) 000-00-00 - реализовать маску ввода, +7, (), -, уже подставленные символы, валидация - цифры
// email - строковое значение, валидация на email стандартная @ и .домен
// sex - enum 'man' | 'woman' реализовать как select
// advantages - массив строк, основной критерий - массив строк. По нажатию на “Плюс” должно добавляться новое поле и так же валидироваться.
// radio - number блок, в дизайне должна быть группа элементов RadioGroup
// checkbox - массив number, в дизайне должна быть группа элементов CheckboxGroup
// about - textarea блок максимальная длина 200 символов, в правом нижнем углу добавить счётчик символов без пробелов
// '}
