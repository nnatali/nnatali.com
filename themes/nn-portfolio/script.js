window.addEventListener('load',()=>{
    document.querySelectorAll('.wpcf7-text, .wpcf7-textarea').forEach((input)=>{
        input.addEventListener('focus', (e) => {
            e.currentTarget.parentNode.parentNode.classList.add('focused');
        });
      
        input.addEventListener('blur', (e) => {
            if (!input.value) {
                e.currentTarget.parentNode.parentNode.classList.remove('focused');
            }
        });
    });
});