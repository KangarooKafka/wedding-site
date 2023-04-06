export default function setJPTheme() {
    const root = document.querySelector(':root')
    localStorage.setItem('stylePref', 'jurassic-park')
    root.style.setProperty('--background-left', 'var(--img-url2)')
    root.style.setProperty('--background-right', 'var(--img-url2)')
    root.style.setProperty('--font-var', 'JP')
    //root.style.setProperty('--font-var2', 'Pangolin')
    root.style.setProperty('--font-var2', 'JP')
    //root.style.setProperty('--font-master', '1.4rem')
    //root.style.setProperty('--font-scaling', '1.1')
    root.style.setProperty('--header-weight', 'normal')

}
