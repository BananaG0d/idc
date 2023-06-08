var list_of_student_names= [] ;
  
function submit(){
    name_1 = document.getElementById(name_1).value
    name_2 = document.getElementById(name_2).value
    name_3 = document.getElementById(name_3).value
    name_4 = document.getElementById(name_4).value

    list_of_student_names.push(name_1)
    list_of_student_names.push(name_2)
    list_of_student_names.push(name_3)
    list_of_student_names.push(name_4)

    document.getElementById("names").innerHTML=list_of_student_names
    document.getElementById("sort").style.display="inline-block"
    document.getElementById("sub").style.display="none"
    
}

function sort(){
       
list_of_student_names.sort()
document.getElementById("names").innerHTML=list_of_student_names

}