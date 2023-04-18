document.addEventListener('DOMContentLoaded', function(){
    let count = 0;
    document.querySelector('#increase').onclick = function(){

        count++;
        document.querySelector('#quantity').innerHTML = count;

    document.querySelector('#decrease').onclick = function(){
        if (count > 0){
            count--;
            document.querySelector('#quantity').innerHTML = count;
        }
    }

    }
});