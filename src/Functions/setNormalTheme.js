export default function setNormalTheme() {
    const root = document.querySelector(':root')
    localStorage.setItem('stylePref', 'normal')
    root.style.setProperty('--background-left', 'var(--img-url)')
    root.style.setProperty('--background-right', 'var(--img-url)')
    root.style.setProperty('--font-var', 'Poiret One')
    root.style.setProperty('--font-var2', 'Lato')
    root.style.setProperty('--font-master', '1.0rem')
    root.style.setProperty('--header-weight', 'bold')
}