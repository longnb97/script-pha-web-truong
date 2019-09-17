let arrList = [471817, 531815, 451753, 391703, 391728, 401703, 461736, 461804, 471707, 471717, 451752, 531753, 531713, 461703, 461709, 451750, 531734, 461810, 401808, 401712, 401702, "TOR02"];
let index = parseInt(localStorage.getItem('index'));

if (!index) {
    localStorage.setItem('index', 0);
    index = 0;
}

function submitAllSubjects(item) {

    document.getElementById('txtSubject').value = item;
    document.getElementById('btnFilterSubject').click();
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "checkbox") {
            if (inputs[i].checked == false) {
                inputs[i].checked = true;
            }
        }
    }
    let myEle = document.getElementById('btnRegisterSubject');
    if (myEle) {
        myEle.click();
    }
    index++;
    localStorage.setItem('index', index);
}


if (index < arrList.length) {
    submitAllSubjects(arrList[index]);
}

else if (index >= arrList.length) {
    localStorage.removeItem('index');
    alert('Ngon chưa :))');
}
