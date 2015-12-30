var config = {
    lang: 'en',
    time: {
        timeFormat: 12
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'London,England',
            units: 'metric',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'en',
            APPID: 'd3f7ffbc6ed742a4e557fb3539400a07'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            //'Good morning',
            //'Enjoy your day!',
            'Good morning'
        ],
        afternoon: [
            //'Hello, beauty!',
            //'You look sexy!',
            'Good afternoon'
        ],
        evening: [
            //'Wow, you look hot!',
            //'You look nice!',
            'Good evening'
        ]
    },
    calendar: {
        maximumEntries: 10,
        url: "https://p01-calendarws.icloud.com/ca/subscribe/1/n6x7Farxpt7m9S8bHg1TGArSj7J6kanm_2KEoJPL5YIAk3y70FpRo4GyWwO-6QfHSY5mXtHcRGVxYZUf7U3HPDOTG5x0qYnno1Zr_VuKH2M"
    },
    news: {
        feed: 'http://feeds.bbci.co.uk/news/rss.xml?edition=uk'
    }
}
