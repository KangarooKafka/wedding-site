export default function setJPTheme() {
    const root = document.querySelector(':root')
    localStorage.setItem('stylePref', 'jurassic-park')
    root.style.setProperty('--background-left', 'var(--img-url2)')
    root.style.setProperty('--background-right', 'var(--img-url2)')
    root.style.setProperty('--font-var', 'Caesar Dressing')
    root.style.setProperty('--font-var2', 'Pangolin')
}
