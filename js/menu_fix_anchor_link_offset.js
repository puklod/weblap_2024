const ANCHOR_HREFS = document.querySelectorAll('.anchor');

(function setCorrectPosition() {
    if(window.innerWidth <= 749){
        for (const HREF of ANCHOR_HREFS) {
            HREF.addEventListener('click',(event) => {
                event.preventDefault();

                let fixedHeaderSize = document.querySelector('header').offsetHeight;
                let target = document.querySelector(HREF.getAttribute('href'));
                let targetRealPosition = target.getBoundingClientRect().top;
                let offset = targetRealPosition-fixedHeaderSize;

                window.scrollTo({
                    top: offset + window.scrollY,
                    behavior: 'smooth'
                })
            });
        }
    }
})()