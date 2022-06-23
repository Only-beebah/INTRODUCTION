const intro={
    name:"Abibat",
    lastname:"Abdulhakeem",
    height:"5,11",
    country:"Nigeria",
    myfunction: function() {
        
       return"Name: " +    this.name+ " <br> <br>"+  
      "Lastname:"        +   this.lastname+ " <br> <br>" +
      "Country:"     +       this.country+ " <br> <br>" +
      "Height:"       +       this.height+ "<br> <br>" 
    }
};
document.getElementById("new").innerHTML=intro.myfunction();