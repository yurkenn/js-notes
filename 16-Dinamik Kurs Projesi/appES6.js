// Course Class
class Course {
    constructor(title, instructor, image) {
        this.courseId = Math.floor(Math.random() * 1000);
        this.title = title;
        this.instructor = instructor;
        this.image = image;

    }
}

// UI class
class UI {
    addCourseToList(course) {
        const list = document.getElementById('course-list')
        var html = `
            <tr>
                <td><img src="img/${course.image}"/></img></td>
                <td>${course.title}</td>
                <td>${course.instructor}</td>
                <td><a href="#" data-id="${course.courseId}" class = "btn btn-danger btn-sm delete">Delete</a></td>
            </tr>
        `;
        list.innerHTML += html; //+= olan bir kaydin uzerine ekleme yaptigimiz icin
    }

    clearControls() {
        const title = document.getElementById('title').value = "";
        const instructor = document.getElementById('Instructor').value = "";
        const image = document.getElementById('image').value = "";

    }

    deleteCourse(element) {
        if (element.classList.contains('delete')) {
            element.parentElement.parentElement.remove();
            return true;
        }
    }

    showAlert(message, className) {
        var alert = `
        <div class='alert alert-${className}'>
        ${message}
        </div>
        `
        const row = document.querySelector('.row');
        // beforBegin , afterBegin , beferoEnd, afterEnd
        row.insertAdjacentHTML('beforeBegin', alert)

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 2000);
    }
}

// Storage class
class Storage {

    static getCourses() {
        let courses;

        if (localStorage.getItem('courses') === null) {
            courses = [];
        } else {
            courses = JSON.parse(localStorage.getItem('courses'));
        }

        return courses;
    }
    static displayCourse() {
        const courses = Storage.getCourses();
        courses.forEach(course => {
            const ui = new UI();
            ui.addCourseToList(course);
        });
    }
    static addCourse(course) {
        const courses = Storage.getCourses();
        courses.push(course);
        localStorage.setItem('courses', JSON.stringify(courses));
    }
    static deleteCourse(element) {
        if (element.classList.contains('delete')) {
            const id = element.getAttribute('data-id');
            const courses = Storage.getCourses();

            courses.forEach((course, index) => {
                if (course.courseId == id) {
                    courses.splice(index, 1);
                }
            })
            localStorage.setItem('courses', JSON.stringify(courses))
        }

    }
}

document.addEventListener('DOMContentLoaded', Storage.displayCourse);

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

        // save to LS
        Storage.addCourse(course);

        //clear controls //submit ettikten sonra ekranda ki bilgileri sil
        ui.clearControls();

        ui.showAlert('The Course has been added', 'success')
    }



    e.preventDefault();
})

document.getElementById('course-list').addEventListener('click', function (e) {
    const ui = new UI();

    //delete course
    if (ui.deleteCourse(e.target) == true) {

        //delete from LS
        Storage.deleteCourse(e.target);

        ui.showAlert('The Course has been deleted', 'danger')

    };

})