// Course Constructor
function Course(title, instructor, image) {
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}

//direkt bir fonksiyon olusturmak yerine bir obje olusturuyoruz boylece karisiklik olmasinin onune geciyoruz.

//UI constructor
function UI() {

}

UI.prototype.addCourseToList = function (course) {
    const list = document.getElementById('course-list')
    var html = `
        <tr>
            <td><img src="img/${course.image}"/></img></td>
            <td>${course.title}</td>
            <td>${course.instructor}</td>
            <td><a href="#" class = "btn btn-danger btn-sm delete">Delete</a></td>
        </tr>
    `;
    list.innerHTML += html; //+= olan bir kaydin uzerine ekleme yaptigimiz icin
}

UI.prototype.clearControls = function () {
    const title = document.getElementById('title').value = "";
    const instructor = document.getElementById('Instructor').value = "";
    const image = document.getElementById('image').value = "";

}

UI.prototype.deleteCourse = function (element) {
    if (element.classList.contains('delete')) {
        element.parentElement.parentElement.remove();
    }
}

UI.prototype.showAlert = function(message,className){
    var alert = `
    <div class='alert alert-${className}'>
    ${message}
    </div>
    `
    const row = document.querySelector('.row');
    // beforBegin , afterBegin , beferoEnd, afterEnd
    row.insertAdjacentHTML('beforeBegin',alert)

    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 2000);

}

document.getElementById('new-course').addEventListener('submit', function (e) {
    const title = document.getElementById('title').value;
    const instructor = document.getElementById('Instructor').value;
    const image = document.getElementById('image').value;

    //create course object
    const course = new Course(title, instructor, image);

    //create UI
    const ui = new UI();

    if (title === '' || instructor === '' || image === '') {
        ui.showAlert('Please Complete the Form', 'warning');
    } else {

        //add course to list course-list
        ui.addCourseToList(course);

        //clear controls //submit ettikten sonra ekranda ki bilgileri sil
        ui.clearControls();

        ui.showAlert('The Course has been added','success')
    }



    e.preventDefault();
})

document.getElementById('course-list').addEventListener('click', function (e) {
    const ui = new UI();
    ui.deleteCourse(e.target);
    ui.showAlert('The Course has been deleted','danger')
})