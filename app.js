let ques = document.getElementById("ques");
let a=document.getElementById("a")
let b=document.getElementById("b")
let c=document.getElementById("c")
let d=document.getElementById("d")
var option=document.getElementsByName("option") 
const options_cont=document.getElementById("options")
const btn_cont=document.getElementById("btn")
const result=document.getElementById("result")
var categery=document.getElementById("categery");

let questions_index =0;
let question_index =0;

function ques_type(n)
{    question_index=0;  
     options_cont.style.display="flex";
     btn_cont.style.display="flex";
     result.style.display="none";
     last_ques=false;
     previous_ques=false;
     clearSelection()
    switch(n)
    {  
        case 0:questions_index=0;
        ques.textContent=questions[0][question_index].question;
        a.textContent=questions[0][question_index].a;
        b.textContent=questions[0][question_index].b;
        c.textContent=questions[0][question_index].c;
        d.textContent=questions[0][question_index].d;
        categery.textContent="Programming";
        break;
        case 1:questions_index=1;
        ques.textContent=questions[1][question_index].question;
        a.textContent=questions[1][question_index].a;
        b.textContent=questions[1][question_index].b;
        c.textContent=questions[1][question_index].c;
        d.textContent=questions[1][question_index].d;
        categery.textContent="General";
        break;
        case 2:questions_index=2;
        ques.textContent=questions[2][question_index].question;
        a.textContent=questions[2][question_index].a;
        b.textContent=questions[2][question_index].b;
        c.textContent=questions[2][question_index].c;
        d.textContent=questions[2][question_index].d;
        categery.textContent="Maths";
        break;
        case 3:questions_index=3;
        ques.textContent=questions[3][question_index].question;
        a.textContent=questions[3][question_index].a;
        b.textContent=questions[3][question_index].b;
        c.textContent=questions[3][question_index].c;
        d.textContent=questions[3][question_index].d;
        categery.textContent="DSA";
        break;
        case 4:questions_index=4;
        ques.textContent=questions[4][question_index].question;
        a.textContent=questions[4][question_index].a;
        b.textContent=questions[4][question_index].b;
        c.textContent=questions[4][question_index].c;
        d.textContent=questions[4][question_index].d;
        categery.textContent="Social";
        break;
    }
}

let last_ques=false;
let previous_ques=false;

function skip()
{   
  if(questions[questions_index].length > (question_index+1))
  {   
    ques.textContent=questions[questions_index][++question_index].question;
    a.textContent=questions[questions_index][question_index].a;
    b.textContent=questions[questions_index][question_index].b;
    c.textContent=questions[questions_index][question_index].c; 
    d.textContent=questions[questions_index][question_index].d; 
    clearSelection() 
  }
  else{
    alert("No more questions");
    last_ques=true;
  }
}

function previous()
{  
  if(question_index !=0)
  {
    ques.textContent=questions[questions_index][--question_index].question;
    a.textContent=questions[questions_index][question_index].a;
    b.textContent=questions[questions_index][question_index].b;
    c.textContent=questions[questions_index][question_index].c; 
    d.textContent=questions[questions_index][question_index].d; 
    last_ques=false;
    previous_ques=true;
  }
  else
  {
    alert("No questions yet")
  }
}

var selected_opt ='';
var correct_score=0;
var wrong_score=0;

function check_selection() {
       
  var options = document.getElementsByName("option");
        for (var i = 0; i < options.length; i++) {
            if (options[i].checked) {
              selected_opt=options[i].value;
              break;
            }
        }
      
        if(selected_opt !='')
        {
          check_answer(selected_opt);
        }
        else 
        {
            alert("Please select an option");
        }
      }

   
      function check_answer(answer) {
    
    if(last_ques!=true && previous_ques !=true){
      if (questions[questions_index][question_index].ans == answer ) {
                ++correct_score;
             } 
             else{
                ++wrong_score;
              }
              skip()  
            }
           else{
            skip()
           }
          }
    
function finish_quiz()
{

  if(confirm("Make sure before submiting click submit"))
  {
  btn_cont.style.display="none";
  options_cont.style.display="none";
  ques.textContent='';
  display_result();
 }
}

 function display_result()
{ 
  var total_answerd=correct_score+wrong_score;
  document.getElementById("total_ans").textContent=total_answerd;
  document.getElementById("score").textContent=correct_score ;
  document.getElementById("wrong_ans").textContent=wrong_score;
  result.style.display="inline-block";
  total_answerd=correct_score=wrong_score=0;
}

function clearSelection() {
        var options = document.getElementsByName("option");
        for (var i = 0; i < options.length; i++) {
            options[i].checked = false;
        }
        selected_opt='';
      }