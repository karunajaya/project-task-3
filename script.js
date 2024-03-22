const container = document.querySelector('.container');
const btns = document.querySelectorAll('.btn'); // Use querySelectorAll to select all elements with class '.btn'
const imgList = ["1.jpg", "2.jpg", "3.jpg","4.jpg"];

let index = 0;

btns.forEach((button) => {
    button.addEventListener('click', () => { // Corrected addEventListener
        console.log('clicked');
        if (button.classList.contains('btn-left')) {
            index--;
            if (index < 0) {
                index = imgList.length - 1;
            }
        } else {
            index++;
            if (index === imgList.length) {
                index = 0; // Reset index to 0 when it reaches the end of the array
            }
        }
        container.style.background = `url("images/${imgList[index]}.jpg") center/cover fixed no-repeat`; // Use backticks for template literals
    });
});
