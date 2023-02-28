export default function setJPTheme() {
    const root = document.querySelector(':root')
    localStorage.setItem('stylePref', 'jurassic-park')
    root.style.setProperty('--text', 'red')
}
