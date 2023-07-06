let $result = document.getElementById("resultado");
let $myform = document.getElementById("myform");
$myform.addEventListener("submit", (e) => {
  e.preventDefault();
  $myform.number2.value === "0" && $myform.operacao.value === "/"
    ? ($result.innerHTML =
        '<span style="color:red;">A divisão por 0 nao ta definida, inserte um valor novo</span>')
    : ($result.innerHTML =
        `O resultado da ${
          $myform.operacao.options[$myform.operacao.selectedIndex].text
        } e ` +
        eval(
          `${$myform.number1.value}${$myform.operacao.value}${$myform.number2.value}`
        ).toFixed(2));
});
