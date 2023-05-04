export default function setJPTheme() {

    // Get the root
    const root = document.querySelector(':root')

    // Update style preference
    localStorage.setItem('stylePref', 'jurassic-park')

    // Change background image
    root.style.setProperty('--background-image', 'var(--dino-url)')

    // Change bullet image
    root.style.setProperty('--li-symbol', 'var(--dino-svg-url)')

    // Change fonts
    root.style.setProperty('--header-font', 'JP')
    root.style.setProperty('--body-font', 'JP')

    // Change header weight so font looks right
    root.style.setProperty('--header-weight', 'normal')

    // Adjust font size scaling
    root.style.setProperty('--font-scaling', '1.1')
}
