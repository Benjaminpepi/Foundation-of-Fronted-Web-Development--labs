/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Function to delete the content of form fields
function deleteContent() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
}

// Function to edit the content of form fields (dummy function, you can customize as needed)
function editContent() {
    document.getElementById('name').value = 'New Name';
    document.getElementById('email').value = 'newemail@example.com';
    document.getElementById('phone').value = '1234567890';
    document.getElementById('message').value = 'New Message';
}

// Add event listeners to the delete and edit buttons
document.getElementById('deleteButton').addEventListener('click', deleteContent);
document.getElementById('editButton').addEventListener('click', editContent);




