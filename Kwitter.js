function addUser()
{
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "Kwitter_room.html";
}

function logout()
{
    logout = document.getElementById("logout").value;

    localStorage.setItem("logout", logout);
    
    window.location = "login_page_index.html";
}