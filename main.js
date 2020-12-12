student_name_array=[];
function submit(){
   var displaystudent_array = [];
   for(var i=1;i<=4;i++){
       var student_name=document.getElementById("name_of_the_student_"+i).value;
       console.log(student_name);
       student_name_array.push(student_name);
       
   }
   console.log(student_name_array);
   var length=student_name_array.length;
   console.log(length);
   for(var x=0;x<length;x++){
       displaystudent_array.push("<h4>NAME: "+student_name_array[x]+"</h4>");
       
   }
   console.log(displaystudent_array);
   document.getElementById("display_name_with_commas").innerHTML=displaystudent_array;
   var remove_commas=displaystudent_array.join(" ");
   console.log(remove_commas);
   document.getElementById("display_name_without_commas").innerHTML=remove_commas;
   document.getElementById("submit_button").style.display="none";
   document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    student_name_array.sort();
    console.log(student_name_array);
    var display_sort=[];
    var length=student_name_array.length;
    for(var j=0;j<length;j++){
        display_sort.push("<h4>NAME:"+student_name_array[j]+"</h4>");
    }
    console.log(display_sort);
    document.getElementById("display_name_with_commas").innerHTML=display_sort;
   var remove_commas=display_sort.join(" ");
   console.log(remove_commas);
   document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}