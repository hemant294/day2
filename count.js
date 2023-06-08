// const btn = document.getElementById("b33");

// btn.addEventListener('click', function(){
//     console.log('Hii');
//     let cot;
//     for(let i = 0; i<100; i++){
//         // console.count();
//         cot = i;
//     }
//     const tot = cot.count();
//     document.getElementById("demo").innerHTML = tot;
// });


let count = 0;

const value  = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// console.log(btns);

btns.forEach(function (btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
            // console.count();
        }
        else if(styles.contains("increase")){
            count++;
            // console.count();
        }
        else{
            count = 0;
            // console.count();
        }
        if(count > 0){
            value.style.color = 'green';
        }
        if(count < 0){
            value.style.color = 'red';
        }
        if(count === 0){
            value.style.color = '#222';
        }
        value.textContent = count;
    });
});