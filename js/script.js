// function writeWithLineBreak(message)
// {
//     document.writeln(message)
//     document.writeln("<br>");
// }

// writeWithLineBreak("masood");
// writeWithLineBreak("Levi");
// writeWithLineBreak("Manju");

// alert(2+2);

// function add(a , b)
// {
//     alert(a + b);
// }

// var a = prompt("Enter First Number: ");
// var b = prompt("Enter Second Number: ");

// var convertedNumberA = parseInt(a);
// var convertedNumberB = parseInt(b);

// add(convertedNumberA  , convertedNumberB);

// function DisplayMessage()
// {
//     alert("Great, you have just clicked a Button")
//     document.getElementById("paragragh").innerHTML = "<h2> Added a content </h2>"
// }
// var i = 1;
// function AddNumber()
// {
//     document.getElementById("unOrderList").innerHTML += "<li> " + i++ + "</li>";
// }



function changeText()
{
    var inputField = document.getElementById("inputField");
    document.getElementById("heading1").innerText = inputField.value;
    inputField.value = "";
}

function alertIt(element)
{
    alert(element.innerText)
}
// function add(firstNumber , secondNumber)
// {
//     alert(firstNumber + secondNumber);
// }


// var a = prompt("Enter first Number: ");
// var b = prompt("Enter Second Number: ");



// add( parseInt(a) , parseInt(b));

 function Remove()
 {
     document.getElementById("unOrderList").lastChild.remove();
 }

function ChangeColor()
 {
    document.getElementById("unOrderList").style.color = "red";
}
 function NormalColor()
 {
    document.getElementById("unOrderList").style.color = "black";
 }

var Names = [];
function AddName()
{
    var inputControl = document.getElementById("inputField");
    Names.push(inputControl.value);
    document.getElementById("unOrderList").innerHTML += 
    "<li onmouseover='alertItems(this)'> " + inputControl.value + "</li>";
    inputControl.value = "";
}

function alertItems(item)
{
    alert(item.innerText);
}








