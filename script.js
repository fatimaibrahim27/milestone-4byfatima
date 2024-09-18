//get references to the form and display area 
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//HANDLE FORM SUBMISSION
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //generate the resume content dynamically
    var resumeHTML = "\n<h2><b>EditableResume</b></h2>\n<h3>personal information</h3>\n<p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>email:</b><span contenteditable=\"true\"").concat(email, "</span></p>\n<p><b>phone:</b><span contenteditable=\"true\"").concat(phone, "</span></p>\n\n<h3>Edducation</h3>\n<p contenteditable=\"true\">").concat(experience, "</p>\n\n<h3>skills</h3>\n<p contenteditable=\"true\">").concat(skills, "</p>\n");
    //display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display element is missing');
    }
});
