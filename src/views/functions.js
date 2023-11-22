function add()
        {
          var num1, num2, sum;
          num1 = parseInt(document.getElementById("firstnumber").value);
          num2 = parseInt(document.getElementById("secondnumber").value);
          sum = num1 + num2;
          document.getElementById("answer").value = sum;
        }

function checkInp() {
          // Get the value of the input field with id="numb"
          let x = document.getElementById("firstnumber").value;
          let y = document.getElementById("secondnumber").value;
          // If x is Not a Number or less than one or greater than 10
          let text;
          if (isNaN(x) || isNaN(y)) {
            text = "Input not valid";
          } else {
            text = "Input OK";
          }
          document.getElementById("demo").innerHTML = text;
        }
