export const mockData = {
    title: 'Информация о сотруднике',
    fields: [
        {
            name: 'surname',
            type: 'stringInput',
            label: 'Фамилия',
            validation: {
                required: true,
            },
        },
        {
            name: 'name',
            type: 'stringInput',
            label: 'Имя',
            validation: {
                required: true,
            },
        },
        {
            name: 'second_name',
            type: 'stringInput',
            label: 'Отчество',
            validation: {
                required: false,
            },
        },
        {
            name: 'sex',
            type: 'select',
            label: 'Пол',
            validation: {
                required: false,
            },
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
            }
        },
        {
            name: 'phone',
            type: 'maskInput',
            label: 'Мобильный телефон',
            mask: '',
            validation: {
                required: true,
            },

        },
        {
            name: 'email',
            type: 'stringInput',
            label: 'Email (обязательно)',
            validation: {
                required: true,
            },
        },
        {
            name: 'address',
            type: 'stringInput',
            label: 'Адрес постоянной регистрации',
            validation: {
                required: false,
            },
        },
        {
            name: 'worker_name',
            type: 'stringInput',
            label: 'Название работодателя',
            validation: {
                required: false,
            },
        },
    ]
}