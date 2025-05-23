// A function that checks if all inputs have been filled
function checkifcomplete(ids, score_ids, show_average = false){
    Finished = true
    AllRatings = []
    for (i = 0; i < ids.length; i++){
        InputUser = document.getElementById(ids[i]).value;
        if (InputUser.length  == 0){
            Finished = false
            document.getElementById(score_ids[i]).innerHTML = "Rating: <span class='text-danger'>Not edited</span>" 
        }else{
            GetRating = Number(InputUser)
            if (GetRating > 10){
                GetRating = 10
                document.getElementById(ids[i]).value = 10
            }
            
            
            AllRatings.push(GetRating*10)

            if(GetRating >= 1 && GetRating < 5){
                document.getElementById(score_ids[i]).innerHTML = "Rating: <span class='text-danger'>Bad</span>" 
            }else if(GetRating >= 5 && GetRating <= 7){
                document.getElementById(score_ids[i]).innerHTML = "Rating: <span class='text-warning'>OK</span>" 
            } else if(GetRating >=8 && GetRating <=9){
                document.getElementById(score_ids[i]).innerHTML = "Rating: <span class='text-success'>Good</span>" 
            }else if(GetRating == 10){
                document.getElementById(score_ids[i]).innerHTML = "Rating: <span class='text-success'>Excellent</span>" 
            } 
        }
    }

    if ((show_average == true)){
        if (Finished == true){
        let sum = AllRatings.reduce((a, b) => a + b, 0);
        let average = (sum / AllRatings.length).toFixed(2);
        alert("The average rating is: " + average);
        } else{
            alert("Please fill out everything..")
        }
    }

    return Finished
}

// When pressing the submit btn
function submit(outputid){
    Status = checkifcomplete(
        ["rating_allen", "rating_carl", "rating_ramon", "rating_calvin", "rating_sofia"], 
        ["finalRating_allen", "finalRating_carl", "finalRating_ramon", "finalRating_calvin", "finalRating_sofia"]
    )

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

    
    document.getElementById("rating_allen").value = "";
    document.getElementById("rating_carl").value = "";
    document.getElementById("rating_ramon").value = "";
    document.getElementById("rating_calvin").value = "";
    document.getElementById("rating_sofia").value = "";
    
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

// function feedbackSystem(memberId) {
//   var inputId = 'rating_' + memberId;
//   var outputId = 'finalRating_' + memberId;
//   var inputElement = document.getElementById(inputId);
//   var ratingElement = document.getElementById(outputId);

//   var givenRating = parseInt(inputElement.value);

//   var value = inputElement.value.trim();

//   var givenRating = parseInt(value);

//   var result = "";
//   var color = "";

//   switch (givenRating) {
//     case 1:
//     case 2:
//         result = "Rating: Poor";
//         color = "red";
//         break;
//     case 3:
//     case 4:
//         result = "Rating: Needs Improvement";
//         color = "orange";
//         break;
//     case 5:
//     case 6:
//         result = "Rating: Satisfactory";
//         color = "goldenrod";
//         break;
//     case 7:
//     case 8:
//         result = "Rating: Above Satisfactory";
//         color = "blue";
//         break;
//     case 9:
//     case 10:
//         result = "Rating: Excellent";
//         color = "green";
//         break;
//     default:
//         result = "Rating: --";
//         color = "black";
//         break;
//   }

//   ratingElement.innerText = result;
//   ratingElement.style.color = color;
// }

// function submitAllRatings(){
//   const members = ['sofia', 'carl', 'calvin', 'allen', 'ramon'];

//     for (let memberId of members) {
//     let input = document.getElementById('rating_' + memberId);
//     if (!input || input.value.trim() === "" || isNaN(parseInt(input.value))) {
//       window.alert("Please fill out the form for all members.");
//       return;
//     }
  
//   members.forEach(memberId => feedbackSystem(memberId));
// }

function submitAllRatings(){
    Status = checkifcomplete(
        ["rating_allen", "rating_carl", "rating_ramon", "rating_calvin", "rating_sofia"], 
        ["finalRating_allen", "finalRating_carl", "finalRating_ramon", "finalRating_calvin", "finalRating_sofia"],
        true
    )
}
