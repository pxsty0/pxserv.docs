export default function LanguageLandingPage() {
  const redirectScript = `
    (() => {
      const browserLanguage = navigator.languages?.[0] || navigator.language || 'en'
      const locale = browserLanguage.toLowerCase().split('-')[0] === 'tr' ? 'tr' : 'en'

      window.location.replace('/' + locale + '/')
    })()
  `

  return (
    <main className="redirect-page" aria-label="Language detection">
      <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
      <img
        className="redirect-logo"
        src="/images/shared/logo.webp"
        alt="PxServ"
        width="40"
        height="40"
      />
      <noscript>
        <nav className="redirect-fallback" aria-label="Language selection">
          <a href="/tr/">Türkçe</a>
          <a href="/en/">English</a>
        </nav>
      </noscript>
    </main>
  )
}
