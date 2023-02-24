export default function setNormalTheme() {
    const root = document.querySelector(':root')
    localStorage.setItem('stylePref', 'normal')
    root.style.setProperty('--text', '#495048')
}