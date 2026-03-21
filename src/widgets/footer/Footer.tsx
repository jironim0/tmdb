import s from './s.module.css'

export function Footer(){
    return (
        <footer className={s.container}>
            <div className={s.content}>
                <span>© 2026 Kinopoisk Demo · Data courtesy of TMDB.</span>
                
                <div className={s.socials}>
                    <a href='https://t.me/eazyscript' target='_blank' rel='noopener noreferrer'>Telegram</a>
                    <a href='https://github.com/jironim0' target='_blank' rel='noopener noreferrer'>GitHub</a>
                    <a href="https://www.instagram.com/nadirka666/" target="_blank" rel='noopener noreferrer'>IG</a>
                </div>
            </div>
        </footer>
    )
}
