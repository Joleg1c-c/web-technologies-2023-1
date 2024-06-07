const openInNewTab = () => {
    document.querySelectorAll("img").forEach(i => i.addEventListener("click", () => {
        window.open(i.src).focus();
    }))
}

openInNewTab()