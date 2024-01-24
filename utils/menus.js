export default [
    {
        isLink: true,
        name: 'Asosiy Sahifa',
    },
    {
        isLink: false,
        name: 'Universitet haqida',
        sub: [
            {
                isLink: true,
                name: 'Rahbariyat',
                link: '/teachers'
            },
            {
                isLink: true,
                name: 'Xalqaro bo`lim',
            },
            {
                isLink: false,
                name: 'Ma’naviyat bo’limi',
                sub: [
                    {
                        isLink: true,
                        name: 'Xalqaro bo`lim',
                    },
                    {
                        isLink: false,
                        name: 'Ilmiy bo`lim',
                        sub: [
                            {
                                isLink: true,
                                name: 'ActaCAMU ilmiy jurnali',
                            },
                            {
                                isLink: true,
                                name: 'ActaCAMu Arxiv',
                            },
                            {
                                isLink: true,
                                name: 'Jurnal talablari',
                            },
                        ],
                    },
                ],
            },
            {
                isLink: false,
                name: 'Fakultetlar',
                sub: [
                    {
                        isLink: false,
                        name: 'Tibbiyot fakulteti',
                        sub: [
                            {
                                isLink: false,
                                name: 'Kafedralar',
                                sub: [
                                    {
                                        isLink: true,
                                        name: 'Ijtimoiy fanlar va jismoniy madaniyat',
                                    },
                                    {
                                        isLink: true,
                                        name: 'Anatomiya va mikroanatomiya',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        isLink: false,
        name: "Yo'nalishlar",
        sub: [
            // {
            //     isLink: 'false',
            //     name: 'Bakalavt',
            //     sub: [
            //         {
            //             isLink: true,
            //             name: 'Davolash ishi',
            //         },
            //         {
            //             isLink: true,
            //             name: 'Pediatriya ishi',
            //         },
            //         {
            //             isLink: true,
            //             name: 'Stomatologiya',
            //         },
            //     ],
            // },
        ],
    },
    {
        isLink: false,
        name: 'Yangiliklar',
        sub: [
            // {
            //     isLink: 'true',
            //     link: `/news/${1}`,
            //     name: 'So`ngi yangiliklar',
            // },
            // {
            //     isLink: 'true',
            //     link: `/news/${2}`,
            //     name: 'E`lonlar',
            // },
            // {
            //     isLink: 'true',
            //     link: `/news/${3}`,
            //     name: 'Bo’sh ish o’rinlari',
            // },
            // {
            //     isLink: 'true',
            //     link: `/news/${4}`,
            //     name: 'Fotogalareya',
            // },
            // {
            //     isLink: 'true',
            //     link: `/news/${5}`,
            //     name: 'Videogalareya',
            // },
        ],
    },
    {
        isLink: false,
        name: 'Aloqa',
        sub: [
            {
                isLink: 'true',
                name: 'Murojaat qoldirish',
            },
            {
                isLink: 'true',
                name: 'Aloqa ma’lumotlari',
            },
        ],
    },
    {
        isLink: false,
        name: 'Elektron resurslar',
        sub: [
            {
                isLink: 'true',
                name: 'Elektron kutubxona',
            },
            {
                isLink: 'true',
                name: 'Onlayn o`quv platformasi (moodule)',
            },
            {
                isLink: 'true',
                name: 'HEMIS',
            },
            {
                isLink: 'true',
                name: 'Diplomni tasdiqlash',
            },
            {
                isLink: 'false',
                name: 'Elektron havolalar',
                sub: [
                    {
                        isLink: 'true',
                        name: 'https://president.uz/',
                    },
                    {
                        isLink: 'true',
                        name: 'https://www.gov.uz/uz',
                    },
                    {
                        isLink: 'true',
                        name: 'http://ferghana.uz/',
                    },
                    {
                        isLink: 'true',
                        name: 'https://my.gov.uz/',
                    },
                    {
                        isLink: 'true',
                        name: 'http://www.minzdrav.uz/',
                    },
                    {
                        isLink: 'true',
                        name: 'http://edu.uz/uz',
                    },
                    {
                        isLink: 'true',
                        name: 'http://ziyonet.uz/',
                    },
                    {
                        isLink: 'true',
                        name: 'http://www.lex.uz/',
                    },
                ],
            },
        ],
    },
    {
        isLink: false,
        name: 'Talaba',
        sub: [
            {
                isLink: 'true',
                name: 'Qabul',
            },
            {
                isLink: 'true',
                name: 'Xalqaro talabalar qabuli',
            },
            {
                isLink: 'true',
                name: 'Talabalar hayotidani',
            },
        ],
    },
    {
        isLink: true,
        name: 'Tillar',
    },
]
