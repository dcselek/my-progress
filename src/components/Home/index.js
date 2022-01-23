import { useEffect, useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl'

const messages = {
    "tr-TR": {
        title: "Selam! 🖖",
        description: "Burası benim oyun alanım 😂 Bu repo içerisinde benim gelişimim için ufak tefek kod parçalarımı görebilirsin. Kullandığım bütün teknolojiler README.md dosyasında yazıyor. Eğer bu repo altında kullanmadıysam seni yönlendirmek için linkler bıraktım, belki onlara da göz atarsın 👌 Görüşürüz! 🖖"
    },
    "en-US": {
        title: "Hi! 🖖",
        description: "Here is my playground 😂 In this repo, you can see little bits of code for my progress and all the techs I use are in README.md file. If I didn't use in this repo then I wrote link to direct you, maybe you will glance to they 👌 See ya! 🖖"
    }
}

function Home() {
    const defaultLocale = localStorage.getItem("locale") ? localStorage.getItem("locale") : navigator.language
    const [locale, setLocale] = useState(defaultLocale)
    useEffect(() => {
        localStorage.setItem("locale", locale)
    }, [locale])
    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <div>
                <h3>
                    <FormattedMessage id="title" />
                </h3>
                <p style={{ width: 400, fontWeight: 'bold', marginLeft: "auto", marginRight: "auto" }}>
                    <FormattedMessage id="description" />
                </p>
                <button onClick={() => setLocale("tr-TR")}>TR</button>
                <br />
                <button onClick={() => setLocale("en-US")}>EN</button>
            </div>
        </IntlProvider>
    )
}

export default Home;
