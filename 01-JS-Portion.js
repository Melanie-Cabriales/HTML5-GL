let favoriteColor, favoriteCity;
//here we declared two variables that will hold the users favorite color and favorite city

document.querySelector('#favorite-color').addEventListener('input', function(){
    //here we store the input value in our local storage and in local storage you can only store strings
    favoriteColor = this.value;
    localStorage.setItem('favorite-color',favoriteColor);

    //this changes the background color of the body
    // document.body.style.backgroundColor = favoriteColor;

    //this changes the background color of the container
    document.querySelector('.round-ctn1').style.backgroundColor = favoriteColor;
    
    //when the users types in the input field with the id favorite-color the event listener triggers and its value is stored in local storage
});

document.querySelector('#favorite-city').addEventListener('input', function(){
    //in local storage you can store only strings
    favoriteCity = this.value;
    localStorage.setItem('favorite-city',favoriteCity)
});