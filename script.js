const knowMore = document.querySelector(".know-more");
        const close = document.querySelector(".close");
        const hiddenDescription = document.querySelector(".hidden-description");
        hiddenDescription.style.display = "none";
        knowMore.addEventListener("click", () => {
            hiddenDescription.style.display = 'block';
        })
        close.addEventListener("click", () => {
            hiddenDescription.style.display = "none"
        })