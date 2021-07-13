var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl")

var siteContainer ;
if(localStorage.getItem("BookMark") == null){
     var siteContainer = []
}else{
     siteContainer = JSON.parse(localStorage.getItem("BookMark"));
     diplayUrls()
}
function addSite() {
     if(formValid() == true){
          var site ={
               name : siteName.value,
               url : siteUrl.value
          }
          siteContainer.push(site);
          clearForm()
          saveUrl()
          diplayUrls()
     }else{
          showNameError("Name is required")
          showUrlError("Url Field is required")
     }

}
function clearForm() {
     siteName.value = "";
     siteUrl.value = "";
}
function formValid() {
     var regexUrl = /(https?:\/\/)?(www\.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)|(https?:\/\/)?(www\.)?(?!ww)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
     if(siteName.value != "" && regexUrl.test(siteUrl.value) == true){
          return true
     }else{
          return false
     }
}
function showNameError(mas) {
     var nameError = document.getElementById("p-alert1");
     nameError.innerHTML = mas;
     nameError.style.display ='block'
}
function showUrlError(mas) {
     var urlError = document.getElementById("p-alert2");
     urlError.innerHTML = mas;
     urlError.style.display ='block'
}
function saveUrl() {
     localStorage.setItem("BookMark" , JSON.stringify(siteContainer));
}
function diplayUrls() {
     cartona = ``;
     for (var i = 0; i < siteContainer.length; i++) {
          cartona += `
          <div class="d-d-inline-block my-2">
          <table class="table">
          <tbody>
          <tr>
          <td class="w-25"><h2 class="d-inline-block">${siteContainer[i].name}</h2></td>
          <td class="w-25"><a href="${siteContainer[i].url}" target="_blank"><button class="btn btn-outline-warning " onclick="visitUrl(${i})">Visit</button></a></td>
          <td class="w-25 "><button class="btn btn-danger" onclick="deletUrl(${i})">Delete</button></td>
          </tr>
          </tbody>
          </table>
          </div>
          `
     }
     document.getElementById("display").innerHTML = cartona;
}
function deletUrl(index) {
     siteContainer.splice(index , 1)
     saveUrl()
     diplayUrls()
}
function deletAleart() {
     var nameError = document.getElementById("p-alert1");
     nameError.style.display ='none';
}