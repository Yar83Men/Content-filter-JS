const filterBox = document.querySelectorAll('.box');

document.querySelector('nav').addEventListener('click', (event) => {

    if (event.target.tagName != 'LI') return false;
    let filterClass = event.target.dataset['f'];
    //console.log(event.target.tagName);
    //console.log(filterClass);

    for(let i = 0; i < filterBox.length; i++) {
        filterBox[i].classList.remove('hide');
        if(!filterBox[i].classList.contains(filterClass) && filterClass != "all") {
            filterBox[i].classList.add("hide");
        }
    }
});