function Login() {
    let dataUsername = document.getElementById("username").value;
    let dataPassword = document.getElementById("password").value;

    if (dataUsername == "ahmad2017" && dataPassword == "integrity") {
        alert("Selamat anda berhasil login");
        window.location = "logintrue.html";
        return false;
    } else {
        alert("Maaf anda belum bisa login, perikasa kembali username & password anda!");
    }
}