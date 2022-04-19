const sections = document.querySelectorAll("section");
const options = {
    threshold: "0.4",
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach((i) => {
        if (i.isIntersecting) {
            if (i.target.id == "games") {
                document.documentElement.setAttribute("style", "--background-color: #490082");
            }
            else {
                document.documentElement.setAttribute("style", "--background-color: #7821bd");
            }
        }
    });
}, options);
sections.forEach((section) => {
    observer.observe(section);
});