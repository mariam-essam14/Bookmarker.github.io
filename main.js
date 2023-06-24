var siteNameInput = document.getElementById("siteName")
var siteUrlInput = document.getElementById("siteUrl")
var userlist = [];
if (localStorage.getItem("userlist") == null) {
    userlist = [];
}
else {
    userlist = JSON.parse(localStorage.getItem("userlist"))
    display()
}


function submit() {


    var user = {
        siteName: siteNameInput.value,
        url: siteUrlInput.value,
    }
    var count = 0
    for (var i = 0; i < userlist.length; i++) {
        if (userlist[i].siteName == siteNameInput.value) {


            count++
        }
    }
    if (count == 0) {
        if (siteNameInput.value == "") {
            document.getElementById("notrequired").style.display = "block"


        }

        else if (siteUrlInput.value == "") {
            document.getElementById("notrequired1").style.display = "block"
        }


        else {
            document.getElementById("notrequired").style.display = "none"
            document.getElementById("notrequired1").style.display = "none"
            document.getElementById("notrequired2").style.display = "none"

            userlist.push(user)
            localStorage.setItem("userlist", JSON.stringify(userlist))
        }
    }
    else {
        document.getElementById("notrequired2").style.display = "block"
        document.getElementById("notrequired1").style.display = "block"

    }

    display()


}

function display() {
    temp = "";
    for (var i = 0; i < userlist.length; i++) {
        temp += `
       <div class="row mb-5 ">
       <div class="col-4 p-2"><h3 class="fw-bold">`+ userlist[i].siteName + `</h3></div>
       <div class="col-3 p-2 ">
           <a class="  btn1  btn  text-white" href="https:`+ userlist[i].url + `" target="_blank"> visit</a>
           <a class=" btn2 btn  text-white ms-2"  onclick="deletebokmark(`+ i + `)">Delete</a>
       </div>
      </div>
       `
    }

    document.getElementById("users").innerHTML = temp;
    clearform()
}

function deletebokmark(index) {

    userlist.splice(index, 1);
    display()
    localStorage.setItem("userlist", JSON.stringify(userlist))
}

function clearform() {
    siteNameInput.value = ""
    siteUrlInput.value = ""

}


















