const first = () => {
    console.log('first');
}
const second = () => {
    console.log('second');
}
const third = () => {
    setTimeout(() => {
        console.log('third');

    }, 2000);
}

first();