
var xmlhttp = new XMLHttpRequest();
var url = "file.json"; /// the name of JSON file

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

var arrOfImages = document.getElementsByTagName("img");
var cardOfImages = document.getElementsByClassName("h-100");
var divsOfh5s = document.getElementsByClassName("text-center");
console.log(divsOfh5s)
//console.log(arrOfImages)





function myFunction(arr) { // The functuion which will display the data in the object
    var image = new Image();
    console.log(arr)
    
for(i=0;i<arr.length;i++){
    image.src=arr[i].imgSrc;
    nameOfBird=arr[i].name;
    console.log(nameOfBird)
    //cardOfImages[i]=image.src;
    add_img(i,image.src);
    add_nameOfBirds(i,nameOfBird)

    
}


}


function add_img(i,srcOfImage) {
    var img = document. createElement('img');
    img.src = srcOfImage;
    img.classList.add("card-img-top");
    cardOfImages[i]=document.getElementById('body'+i).appendChild(img);
}


function add_nameOfBirds(i,nameOfBird) {
    var header = document. createElement('h5');
    header.textContent=nameOfBird;
    header.classList.add("fw-bolder");
    /*img.classList.add("card-img-top");*/
    divsOfh5s[i]=document.getElementById('head'+i).appendChild(header);
}





