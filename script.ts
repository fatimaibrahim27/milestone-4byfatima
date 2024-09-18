//get references to the form and display area 
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display')as HTMLDivElement;

//HANDLE FORM SUBMISSION
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

//collect input values
const name = (document.getElementById('name') as HTMLInputElement).value
const email = (document.getElementById('email') as HTMLInputElement).value
const phone = (document.getElementById('phone') as HTMLInputElement).value
const education = (document.getElementById('education') as HTMLInputElement).value
const experience= (document.getElementById('experience') as HTMLInputElement).value
const skills = (document.getElementById('skills') as HTMLInputElement).value

//generate the resume content dynamically
const resumeHTML = `
<h2><b>EditableResume</b></h2>
<h3>personal information</h3>
<p><b>Name:</b><span contenteditable="true">${name}</span></p>
<p><b>email:</b><span contenteditable="true"${email}</span></p>
<p><b>phone:</b><span contenteditable="true"${phone}</span></p>

<h3>Edducation</h3>
<p contenteditable="true">${experience}</p>

<h3>skills</h3>
<p contenteditable="true">${skills}</p>
`;
//display the generated resume
if (resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
}else{
    console.error('the resume display element is missing');
}
})
