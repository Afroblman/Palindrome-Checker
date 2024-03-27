const palindromeInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const showResult = document.querySelector(".show-result");

const checkInput = () => {
  if(palindromeInput.value == "") {
      alert("Please input a value");
      return;
  }
  else {
      result.classList.remove("hidden");
              result.innerHTML = `<p class="show-result"><strong><i>${palindromeInput.value}</i></strong> ${palindrome(palindromeInput.value)}</p>`;

      palindromeInput.value = "";
  }
}

checkBtn.addEventListener("click", checkInput);

function palindrome(str) {
  const cleanStr = str.replace(/[\W_\s*]/ig,"").toLowerCase();
  let i = 0, len = cleanStr.length;
  while(i<len/2) {
    if(cleanStr[i] !== cleanStr[len-i-1]) {
       return " is not a palindrome";
    }
     i++;
  }
  return " is a palindrome";
}

palindromeInput.addEventListener("keydown", (e) => {
  if(e.key === "Enter") {
      checkInput();
  }
})

