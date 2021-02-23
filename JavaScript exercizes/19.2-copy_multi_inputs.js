// Instructions
// Many times an application needs to verify the account by
// sending a verification code by text message.
// Lets create a functionality the enables the user to paste the
// verification code to the input fields.
// Features:
// 1. The user is allowed to type the values manually. After
// each value is inserted, the next input will be focused.
// 2. The user is allowed to paste the verification code.
// 3. An extra challenge will be to auto submit the form once
// all inputs all populated.
// Things to thing about:
// What happens if the user pastes only 3 digits and there are
// 6 inputs to fill out.
// Here is an example.
// Things to help you:
// Google “paste event” to understand how to listen to a
// paste event.
// Google “clipboardData” to find out how to get the value of
// a paste event.


const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');


for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', (key) => {
        if (inputs[i].value.length == 1) {
            if (i < inputs.length - 1) {
                inputs[i + 1].focus();
            }
        }
        
        if(!/[1-9]/g.test(key.key)){
            inputs[i].value = '';
            inputs[i].focus();
        }
        
    })
}


document.addEventListener('paste', (e) => {
    var clipboardData = e.clipboardData || e.originalEvent.clipboardData || window.clipboardData;
    var pastedData = clipboardData.getData('text');
    for (let i = 0; i < pastedData.length; i++) {
        inputs[i].value = pastedData[i]
    }
    if (pastedData.length < inputs.length){
        inputs[pastedData.length].focus();
    }else {
        button.focus()
    }
    
})
