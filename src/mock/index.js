export const mockData = {
    title: 'Информация о сотруднике',
    fields: [
        {
            name: 'surname',
            type: 'stringInput',
            label: 'Фамилия',
            validation: {
                required: true,
                 messages: {
                    required: 'Поле являеться обязательным'
                }
            },
        },
        {
            name: 'name',
            type: 'stringInput',
            label: 'Имя',
            validation: {
                required: true,
                 messages: {
                    required: 'Поле являеться обязательным'
                }
            },
        },
        {
            name: 'second_name',
            type: 'stringInput',
            label: 'Отчество',
        },
        {
            name: 'sex',
            type: 'select',
            label: 'Пол',
            options: [
                {
                    database_name: 'm',
                    display_name: 'Мужской'
                },
                {
                    database_name: 'f',
                    display_name: 'Женский'
                }
            ],
        },
        {
            name: 'birthday',
            type: 'dateInput',
            label: 'Дата рождения',
            validation: {
                required: true,
                messages: {
                    required: 'Поле являеться обязательным'
                }
            }
        },
        {
            name: 'phone',
            type: 'maskInput',
            label: 'Мобильный телефон',
            mask: '',
            validation: {
                required: true,
                messages: {
                    required: 'Поле являеться обязательным'
                }
            },

        },
        {
            name: 'email',
            type: 'stringInput',
            label: 'Email (обязательно)',
            validation: {
                required: true,
                 messages: {
                    required: 'Поле являеться обязательным',
                    match: 'Введён не корректный адрес почты'
                }
            },
        },
        {
            name: 'address',
            type: 'stringInput',
            label: 'Адрес постоянной регистрации',
        },
        {
            name: 'worker_name',
            type: 'stringInput',
            label: 'Название работодателя',
        },
    ]
}