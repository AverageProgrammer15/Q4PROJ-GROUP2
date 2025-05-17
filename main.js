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
    Status = checkifcomplete(["id1", "id2", "id3"]) //Placeholders - used for testing

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

function feedbackSystem(memberId) {
  var inputId = 'rating_' + memberId;
  var outputId = 'finalRating_' + memberId;
  var inputElement = document.getElementById(inputId);
  var ratingElement = document.getElementById(outputId);

  var givenRating = parseInt(inputElement.value);

  var value = inputElement.value.trim();

  var givenRating = parseInt(value);

  var result = "";
  var color = "";

  switch (givenRating) {
    case 1:
    case 2:
        result = "Rating: Poor";
        color = "red";
        break;
    case 3:
    case 4:
        result = "Rating: Needs Improvement";
        color = "orange";
        break;
    case 5:
    case 6:
        result = "Rating: Satisfactory";
        color = "goldenrod";
        break;
    case 7:
    case 8:
        result = "Rating: Above Satisfactory";
        color = "blue";
        break;
    case 9:
    case 10:
        result = "Rating: Excellent";
        color = "green";
        break;
    default:
        result = "Rating: --";
        color = "black";
        break;
  }

  ratingElement.innerText = result;
  ratingElement.style.color = color;
}

function submitAllRatings() {
  const members = ['sofia', 'carl', 'calvin', 'allen', 'ramon'];

    for (let memberId of members) {
    let input = document.getElementById('rating_' + memberId);
    if (!input || input.value.trim() === "" || isNaN(parseInt(input.value))) {
      window.alert("Please fill out the form for all members.");
      return;
    }
  
  members.forEach(memberId => feedbackSystem(memberId));
}
