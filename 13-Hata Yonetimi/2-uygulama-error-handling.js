document.querySelector('#myBtn'), addEventListener('click', function (e) {
    e.preventDefault();

    var name = document.querySelector('#name');
    var age = document.querySelector('#age');
    var errors = document.querySelector('#errors');
    errors.innerHTML='';
    try {
        if (name.value.length === 0) {
            throw new Error('name is required');
        }

        if (name.value.length > 20) {
            throw new Error('name is too long');
        }

        if (age.value.length === 0) {
            throw new Error('age is requiered');
        }

        if (isNaN(age.value)) {
            throw new Error('age must be numeric');
        }
        console.log('form is submited');
    } catch (err) {
        errors.innerHTML = err.message;

    } finally {
        // name.value = "";
        // aga.value = "";
    }
    
})