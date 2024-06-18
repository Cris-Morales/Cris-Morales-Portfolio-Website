export default function navScript() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log(entry.target.id)
            }
        })
    })
}

