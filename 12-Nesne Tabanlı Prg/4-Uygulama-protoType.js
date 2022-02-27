/*
    Demo: Creating Objects

    ** Disaridan name ve salary bilgilerini alan employee constructori tanimlayiniz.
    ** Yil icinde o ana kadar alina toplam maas ve alinan toplam vergi tutarini hesaplayan fonskyionu olusturun.
        Vergi dilimleri
        ** 20.000'e kadar %20 vergi
        ** 30.000'e kadar %25 vergi
        ** 30.000'den sonra %30 vergi

*/

let Employee = function (name, salary) {

    if (!(this instanceof Employee)) {
        // employeeden turuyen nesne new employ degilse, new empleyee kendimiz uretiriz 
        return new Employee(name, salary);
    }

    this.name = name;
    this.salary = salary;
}

Employee.prototype.calculateSalary = function () {
    //month diye bir degisken tanimladik ve guncel ay'i aldik
    let month = new Date().getMonth() + 1;
    //vergiyi hesaplamak icin tax adinda bir degisken tanimladik
    let tax = 0;
    total = this.salary * month

    if (total <= 20000) {
        tax = total * 0.2;
    } else if (total > 20000 && total <= 30000) {
        tax = total * 0.25;
    } else {
        tax = total * 0.3
    }

    return {
        tax: tax,
        paid: total - tax
    }
}

// yukarida yazdigimiz if kosulu olmasa idi new olmadan hata verirdi.
let emp1 = Employee('yigit', 3000);
let emp1_salary = emp1.calculateSalary();

console.log(`${emp1.name} isimli personel toplam ${emp1_salary.tax} TL vergi odemistir. Eline gecen miktar toplam ${emp1_salary.paid} TL'dir.`);

let emp2 = new Employee('Can', 4000);
let emp2_salary = emp2.calculateSalary();
console.log(`${emp2.name} isimli personel toplam ${emp2_salary.tax} TL vergi odemistir. Eline gecen miktar toplam ${emp2_salary.paid} TL'dir.`);
