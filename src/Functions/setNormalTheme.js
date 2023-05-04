export default function setNormalTheme() {

    // Get the root
    const root = document.querySelector(':root')

    // Update style preference
    localStorage.setItem('stylePref', 'normal')

    // Change background image
    root.style.setProperty('--background-image', 'var(--zion-url)')

    // Change bullet image
    root.style.setProperty('--li-symbol', 'var(--rose-svg-url)')

    // Change fonts
    root.style.setProperty('--header-font', 'Poiret One')
    root.style.setProperty('--body-font', 'Lato')

    // Change header weight so font looks right
    root.style.setProperty('--header-weight', 'bold')

    // Readjust font size
    root.style.setProperty('--font-scaling', '1.2')

}