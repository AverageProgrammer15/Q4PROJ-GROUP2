function checkifcomplete(ids){
    Finished = true
    for (i = 0; i < ids.length; i++){
        InputUser = document.getElementById(ids[i]).value;
        if (InputUser.length  == 0){
            Finished = false
        }
    }

    return Finished
}

function submit(outputid){
    Status = checkifcomplete(["id1", "id2", "id3"])

    Result = "N/A"
    if (Status == true){
        Result = "Form submitted, thank you for filling it out"
    } else{
        Result = "Please finish the whole form"
    }
    

    try{
        if (Status == true){
            document.getElementById(outputid).innerHTML = Result
        } else{
            document.getElementById(outputid).innerHTML = "<span class='text-danger'>" + Result + "</span>"
        }
    } catch{
        window.alert(Result)
    }
}
