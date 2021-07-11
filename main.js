
 var names_of_people = [];

 function submitguest()
 {
    var GuestName = document.getElementById("name_guests_input").value;
    names_of_people.push(GuestName);
    console.log(GuestName);
    console.log(names_of_people);

    var length_of_name = names_of_people.length;
    console.log(length_of_name);
    document.getElementById("guests").innerHTML = names_of_people.toString();
 }

 function showguestlist()
 {
     var i = names_of_people.join("<br>");
     console.log(names_of_people);
     document.getElementById("secretlist").innerHTML = i.toString();
     document.getElementById("sort_button").style.display = ("block");
 }

 function sorting()
 {
     names_of_people.sort();
     var i = names_of_people.join("<br>");
     console.log(names_of_people);
     document.getElementById("sorted_list").innerHTML = i.toString();
 }

 function search()
 {
     var s = document.getElementById("search_guest_name").value;
     var found = 0;
     var j;

     for(j=0; j<names_of_people.length; j++)
     {
         if(s==names_of_people[j])
         {
             found=found+1;
         }
     }

     document.getElementById("guests_name_results").innerHTML="name found" +found+ " time/s";
     console.log("found name "+found+" time/s");
 }












