const drinks=new Map(
    [
        ["Espresso",{description:"Smooth espresso made with our signature blend of coffee beans",price:20}],
        ["Cappuccino",{description:"Espresso combined with steamed milk and topped with a layer of foam",price:10}],
        ["Latte",{description:"A smooth and creamy combination of espresso and steamed milk",price:10}],
        ["Americano",{description:"Espresso combined with hot water for a bold and flavorful coffee experience",price:10}],
        ["Mocha",{description:"Espresso combined with rich, chocolatey mocha sauce and steamed milk",price:10}]
    ]
    )
const breakfast=new Map(
    [
        ["Classic American",{description:"two eggs cooked any style, crispy bacon or savory sausage, and your choice of toast, bagel, or English muffin.",price:70}],
        ["Belgian Waffles",{description:"ndulge in our fluffy Belgian waffles, served with your choice of fresh fruit, whipped cream, and syrup. Add bacon or sausage for an extra savory touch.",price:90}],
        ["Breakfast Burrito",{description:"scrambled eggs, crispy bacon or sausage, melted cheese, and your choice of vegetables. Served with a side of salsa and sour cream for dipping.",price:85}],
        ["Yogurt Parfait",{description:"Layers of creamy Greek yogurt, fresh fruit, and crunchy granola make this a delicious and healthy way to start your day.",price:50}],
        ["Avocado Toast",{description:"Our avocado toast is made with fresh, smashed avocado, served on a slice of toasted artisanal bread",price:60}],
        ["Huevos Rancheros",{description:"fried eggs served on a bed of spicy black beans, crispy tortillas, and a tangy salsa",price:55}]
    ]
    )
const lunch=new Map(
    [
        ["Grilled Chicken",{description:"juicy grilled chicken breast topped with crispy bacon, melted Swiss cheese,",price:120}],
        ["Caesar Salad",{description:"A classic Caesar salad made with crisp romaine lettuce, garlic croutons",price:75}],
        ["Veggie Wrap",{description:"veggie wrap is filled with roasted vegetables, hummus, and feta cheese",price:95}],
        ["Turkey Club",{description:"A triple-decker sandwich featuring oven-roasted turkey breast, crispy bacon",price:90}],
        ["Beef Burger",{description:"A juicy beef burger served on a toasted bun with your choice of toppings",price:110}],
        ["Greek Salad",{description:"Our Greek salad is made with crisp lettuce, juicy tomatoes, cucumbers",price:55}]
    ]
    )
const dessert=new Map(
    [
        ["New York Cheesecake",{description:"Classic creamy cheesecake with a graham cracker crust.",price:90}],
        ["Brownie Sundae",{description:"Warm chocolate brownie topped with vanilla ice cream, whipped cream",price:75}],
        ["Carrot Cake",{description:"Moist carrot cake with cream cheese frosting and chopped walnuts",price:95}],
        ["Fruit Tart",{description:"Buttery tart crust filled with vanilla pastry cream and topped with fresh fruit",price:90}],
        ["Tiramisu",{description:"layers of espresso-soaked ladyfingers and mascarpone cream.",price:80}],
        ["Lemon Bars",{description:"Langy lemon filling on a buttery shortbread crust, dusted with powdered sugar",price:55}]
    ]
    )

for(let[key,value] of drinks)
{
    document.getElementById('drink_item').insertAdjacentHTML('beforeend', key+"<br/><br/>");
    document.getElementById('drink_description').insertAdjacentHTML('beforeend', value.description+"<br/><br/>");
    document.getElementById('drink_price').insertAdjacentHTML('beforeend', value.price+"<br/><br/>");
}
for(let[key,value] of breakfast)
{
    document.getElementById('breakfast_item').insertAdjacentHTML('beforeend', key+"<br/><br/>");
    document.getElementById('breakfast_description').insertAdjacentHTML('beforeend', value.description+"<br/><br/>");
    document.getElementById('breakfast_price').insertAdjacentHTML('beforeend', value.price+"<br/><br/><br/><br/>");
}

for(let[key,value] of lunch)
{
    document.getElementById('lunch_item').insertAdjacentHTML('beforeend', key+"<br/><br/>");
    document.getElementById('lunch_description').insertAdjacentHTML('beforeend', value.description+"<br/><br/>");
    document.getElementById('lunch_price').insertAdjacentHTML('beforeend', value.price+"<br/><br/>");
}
for(let[key,value] of dessert)
{
    document.getElementById('dessert_item').insertAdjacentHTML('beforeend', key+"<br/><br/>");
    document.getElementById('dessert_description').insertAdjacentHTML('beforeend', value.description+"<br/><br/>");
    document.getElementById('dessert_price').insertAdjacentHTML('beforeend', value.price+"<br/><br/>");
}


function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");


    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "Please Enter Correct Subject";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 11){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(emailRegex.test(email)==false){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 50){
      text ="Please Enter More Than 50 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }