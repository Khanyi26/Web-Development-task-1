document.addEventListener('DOMContentLoaded',function()
{
    //Text content
    const firstLine =  "We're";
    const pageTitle = "coming soon";
    const pageDescription = "Hello fellow shoppers! We're  currently building our new fashion store. Add your email below to stay up-to-date with annoucements and our launch deals. ";
    //const emailPlaceholder = "Email Address";
    const attributionText = "Bootcamp 2023 by Khanyisa";
    const codeTribeLinkText = "CodeTribe";
    const khanyisaLinkText = "Kanyisa "; //must add link 
   
    
    //Get elements by ID
    const firstLineElement = document.getElementById('first');
    const titleElement = document.getElementById('title');
    const descriptionElement = document.getElementById('description');
    //const emailInputElement = document.getElementById('emailInput');    
    const attributionTextElement = document.getElementById('attributionText');
    const codeTribeLinkElement = document.getElementById('CodeTribeLink');
    const khanyisaLinkElement = document.getElementById('KhanyisaLink')
    const img = document.createElement('img');

    // Set text content
    firstLineElement.textContent = firstLine;
    titleElement.textContent = pageTitle;
    descriptionElement.textContent = pageDescription;
    //emailInputElement.setAttribute('placeholder',emailPlaceholder);
    attributionTextElement.textContent = attributionText;
    codeTribeLinkElement.textContent = codeTribeLinkText;
    codeTribeLinkElement.setAttribute('href','https://www.mlab.co.za');    
    khanyisaLinkElement.textContent = khanyisaLinkText;
    img.setAttribute('src','./assest/Snapchat-13398084.jpg');

    const form = document.getElementById('myform');
    
    //const emailInput = document.createElement('input');
    //emailInput.setAttribute('type','email');
    //emailInput.setAttribute('placeholder','Email Address');
    //emailInput.setAttribute('name','email');

    //const submitButton = document.createElement('button');
    //submitButton.setAttribute('type','submit');
    //submitButton.textContent = 'Submit';

    //form.appendChild(emailInput);
    //form.appendChild(submitButton);

    //document.body.appendChild(form);

    form.addEventListener('submit',function(event){
        event.preventDefault();

        //const formData = new FormData(form);
        //const email = formData.get('email');
        //console.log('Submitted Email:',email);

        //form,reset();
        handleFormSubmit();
    })
    function handleFormSubmit(){
        const formData = new FormData(form);
        const email = formData.get('email');
        console.log('Submitted Email:',email);
        form,reset();

    }
});

var btn = document.getElementById("button");

btn.addEventListener("click", (e)=>{
    const text = getElementById("texts").value;
    const re = /[A-z0-9\._]+\@+[A-z]+.com$/g;

    console.log(text)
    if (re.test(text)==true){
        console.log("correct")
        document.getElementById("pop-error").innerText = "";
        document.getElementById("error-icon").style.display = "none";
        document.getElementByI("texts").style.bordercolor = "green";
        document.getElementById("button").style.border = "green";
    }
    else if (re.test(text)==false){
        console.log("wrong")
        document.getElementById("pop-error").innerText = "Please provide a valid email";
        document.getElementById("error-icon").style.display = "block";
        document.getElementByI("texts").style.bordercolor = "red";
        document.getElementById("button").style.border = "red";
    }
})