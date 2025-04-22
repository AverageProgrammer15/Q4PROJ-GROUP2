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

function previewquarter(num, outputid){

    OutputInsert = document.getElementById(outputid)
    // Note: Make the htmls for each quarter and put then in their respective variables below
    Quarter1_html = ""
    Quarter2_html = ""
    Quarter3_html = ""
    Quarter4_html = ""

 try{
       switch(num){
        case "1":
            OutputInsert.innerHTML = Quarter1_html
            break
        case "2":
            OutputInsert.innerHTML = Quarter2_html 
            break
        case "3":
            OutputInsert.innerHTML = Quarter3_html
            break
        case "4":
            OutputInsert.innerHTML = Quarter4_html
            break
        default:
            window.alert("No data found for this quarter")
       }
    } catch{
        window.alert("An error occured")
    }

} 
