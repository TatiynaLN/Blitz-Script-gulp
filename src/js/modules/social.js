export default function social() {
    const socialForm = document.querySelector('.socials');
    const socialLabel = document.querySelector('.socials ul li');
    const socialInput = document.querySelector('.socials ul li a');
    const socialClose = document.querySelector('.btn-close');

    // socialClose.addEventListener('click', inputClose);
    // socialForm.addEventListener('mouseover', socialFormOpen);
    socialForm.addEventListener('mouseleave', socialFormClose);

    // function socialFormOpen() {
    //     socialLabel.style.width = `${100}%`;
    //     socialForm.classList.add('social--active');
    //     socialForm.style.width = `${83}%`;
    // }

    function socialFormClose() {
        if (socialInput.value === '') {
            socialLabel.style.width = `${0}%`;
            socialForm.classList.remove('social--active');
            socialForm.style.width = `${10}%`;
        } else {
            socialLabel.style.width = `${100}%`;
        }
    }

    function inputClose() {
        socialInput.value = '';
    }

}