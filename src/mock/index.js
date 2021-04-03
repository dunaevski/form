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
            value: '',
        },
        {
            name: 'first_name',
            type: 'stringInput',
            label: 'Имя',
            validation: {
                required: true,
                 messages: {
                    required: 'Поле являеться обязательным'
                }
            },
            value: '',
        },
        {
            name: 'second_name',
            type: 'stringInput',
            label: 'Отчество',
            value: '',
        },
        [
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
                value: 'm',
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
                },
                value: ''
            },
        ],
        [
            {
                name: 'phone',
                type: 'stringInput',
                label: 'Мобильный телефон',
                mask: '+7(999) 999 99 99',
                validation: {
                    required: true,
                    messages: {
                        required: 'Поле являеться обязательным'
                    }
                },
                value: ''
            },
            {
                name: 'email',
                type: 'stringInput',
                label: 'Email (обязательно)',
                validation: {
                    required: true,
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    messages: {
                        required: 'Поле являеться обязательным',
                        pattern: 'Введён не корректный адрес почты'
                    }
                },
                value: '',
            },
        ],
        {
            name: 'address',
            type: 'stringInput',
            label: 'Адрес постоянной регистрации',
            value: '',
        },
        {
            name: 'worker_name',
            type: 'stringInput',
            label: 'Название работодателя',
            value: '',
        },
    ]
}