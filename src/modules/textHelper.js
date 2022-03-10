let copy = true;
export const textPaste = () => copy;

function myFunction() {
  
  navigator.clipboard.writeText(copyText.value);

  alert("Copied the text: " + copyText.value);
}

document.querySelector('#textBtn').addEventListener('click', myFunction);

