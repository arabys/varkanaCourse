// const service = document.getElementsByClassName('service-item')

function clicking(event) {
    console.log(event.target.id)
}

// carousel slider

// const   slide_item_count    = 9
// let     active_slide_item   = 5
const   slidesContainer     = document.getElementById("slidesContainer");
let     item_width          = 450
// function setRight(right) {
//     slidesContainer.style.right = right
// }

// function move_next() {
//     setInterval(slide_next, 400)
// }

// function move_provius() {
//     setInterval(slide_previus, 400)
// }

function slide_next() {
    
    // let container_right         = slidesContainer.style.right || '0px';
    // let container_right_digit   =  container_right.match(/(\d+)/);
    
    
    // console.log(result);

    if(item_width > -1350 ){

        item_width -= 450
        slidesContainer.style.right = String(item_width) + "px"
        console.log(slidesContainer.style.right);
    }
    
    // else if(item_width === -1350){
    //     document.getElementById("arrowNext").style.visibility = "hidden";

    // }

  

    // console.log(container_right);
    // console.log(container_right_digit[0]);   
    // if(active_slide_item < slide_item_count - 1){
    //     active_slide_item ++
    // }
    // else if(active_slide_item === slide_item_count - 1){
    //     active_slide_item = 2
    // }
    


}

function slide_previus() {

 

    if(item_width < 1350 ){

        item_width += 450
        slidesContainer.style.right = String(item_width) + "px"
        console.log(slidesContainer.style.right);
    }
    
    // else if(item_width === 1350){
    //     document.getElementById("arrowPrevius").style.visibility = "hidden";
    //     slidesContainer.style.right = "0px"
        
    // }


    // if(active_slide_item > 2){
    //     active_slide_item --
    // }
    // else if(active_slide_item === 2){
    //     active_slide_item = 8
    // }




    
    // let active_element  = document.getElementById('slide-' + active_slide_item)
    // let left_of_active  = document.getElementById('slide-' + (active_slide_item + 1))
    // let right_of_active = document.getElementById('slide-' + (active_slide_item - 1))
    // active_element.style.right = '400px'
    // let elementRight = active_element.style.right
    // console.log(elementRight)
    // result = elementRight.match(/(\d+)/)
    // console.log(result[0])
    // right_of_active.style.right -= 450
    // active_element.style.right  -= 450
    // left_of_active.style.right -= 450

    // console.log(active_element.id);
    // active_element.style.top    = 317 + 'px'
    // active_element.innerHTML = '<h1>Test Shod!</h1>'

}


// Test for count of childe

const slides     = document.querySelector('#portfolio');
const slideCount = slides.childElementCount;
// console.log(slideCount);

const card_digit_1 = document.getElementById('card-digit-1')
const card_digit_2 = document.getElementById('card-digit-2')
const card_digit_3 = document.getElementById('card-digit-3')
const card_digit_4 = document.getElementById('card-digit-4')
const card_digit_5 = document.getElementById('card-digit-5')
const card_digit_6 = document.getElementById('card-digit-6')
const card_digit_7 = document.getElementById('card-digit-7')
const card_digit_8 = document.getElementById('card-digit-8')
const card_digit_9 = document.getElementById('card-digit-9')



let digit_1 = 0;
let digit_2 = 0;
let digit_3 = 0;
let digit_4 = 0;
let digit_5 = 0;
let digit_6 = 0;
let digit_7 = 0;
let digit_8 = 0;
let digit_9 = 0;


setInterval(() => {

    if (digit_1 < 2200) {
        digit_1 += 1
        card_digit_1.innerText = digit_1
        
    }

}, .1);
setInterval(() => {

    if (digit_2 < 1560) {
        digit_2 += 1
        card_digit_2.innerText = digit_2
    }

}, .1);
setInterval(() => {

    if (digit_3 < 1620) {
        digit_3 += 1
        card_digit_3.innerText = digit_3
    }

}, .1);
setInterval(() => {

    if (digit_4 < 1500) {
        digit_4 += 1
        card_digit_4.innerText = digit_4
    }

}, .1);
setInterval(() => {

    if (digit_5 < 3200) {
        digit_5 += 1
        card_digit_5.innerText = digit_5
    }

}, .1);
setInterval(() => {

    if (digit_6 < 2540) {
        digit_6 += 1
        card_digit_6.innerText = digit_6
    }

}, .1);
setInterval(() => {

    if (digit_7 < 3200) {
        digit_7 += 1
        card_digit_7.innerText = digit_7
    }

}, .1);
setInterval(() => {

    if (digit_8 < 1450) {
        digit_8 += 1
        card_digit_8.innerText = digit_8
    }

}, .1);
setInterval(() => {

    if (digit_9 < 1200) {
        digit_9 += 1
        card_digit_9.innerText = digit_9
    }

}, .1);


function post_data(e) {
    
    e.preventDefault()

    message.classList.remove('success')
    message.classList.remove('failed')
    
    formData = new FormData(e.target)

    formData.append('email', e.target.email.value)
    formData.append('message', e.target.message.value)

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        //    alert(xhttp.responseText)
            let message = document.getElementById('message')
            switch (xhttp.responseText) {
                case '1':
                    message.classList.remove('failed')
                    message.classList.add('success')
                    message.innerHTML = 'ارسال ایمیل و ذخیره در دیتابیس با موفقیت انجام شد.'
                    break;
                case '0':
                    message.classList.remove('success')
                    message.classList.add('failed')
                    message.innerHTML = 'لطفا آدرس ایمیل و پیام خود را وارد نمایید'
                    break;
                case '2':
                    message.classList.remove('success')
                    message.classList.add('failed')
                    message.innerHTML = 'خطا در اتصال به دیتابیس'
                    break;
                case '3':
                    message.classList.remove('success')
                    message.classList.add('failed')
                    message.innerHTML = 'خطا در ارسال ایمیل'
                    break;
                default:
                    break;
            }
        }
    };
    xhttp.open("POST", "https://test.shikmanzel.org/index.php", true);
    //xhttp.setRequestHeader("Content-type", "multipart/form-data");
    xhttp.send(formData);

}
