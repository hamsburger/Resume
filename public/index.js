let p = document.querySelector('.container'); 
p.mouseover = changeBackgroundOnHover;

/* Name: changeBackgroundOnHover
*  Description: Change background colour if mouse hovers over container. 
*/
function changeBackgroundOnHover() {
    let body = document.querySelector('body');
    body.style.backgroundColor = 'green';
} 