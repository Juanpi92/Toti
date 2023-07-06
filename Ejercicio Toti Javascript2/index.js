let $result = document.getElementById("resultado");
let $myform = document.getElementById("myform");
$myform.addEventListener("submit", (e) => {
  e.preventDefault();
  $result.innerHTML =
    $myform.number1.value % 2 === 0
      ? `O numero ${number1.value} e par`
      : `O numero ${number1.value} e impar`;
});
