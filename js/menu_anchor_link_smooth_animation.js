{
const ANCHOR_HREFS = document.querySelectorAll('.anchor');

(function setCorrectPosition() {
        for (const HREF of ANCHOR_HREFS) {

            HREF.addEventListener('click',(event) => {
                event.preventDefault();

                let target = document.querySelector(HREF.getAttribute('href'));
                let targetPosition = target.getBoundingClientRect().top;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            });
        }
})()
}