
const backContactUs = document.querySelector(".back-contact-us");

function contactUsInit(){
    axios
    .get(
      "https://testrender-tga5.onrender.com/contacts"
    )
    .then(function (response) {
        let str ="";
        response.data.forEach((item)=>{
           let content = `<tr class="back-contact-us">
           <th scope="row">
               <div>
                   <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
               </div>
           </th>
           <td>#AHG12345</td>
           <td>#AHG12345</td>
           <td>${item.name}</td>
           <td>${item.email}</td>
           <td>${item.phoneNumber}</td>
           <td> ${item.EventTime}</td>
           <td>${item.issue}</td>
           <td>${item.issueContent}</td>
       </tr>`
       str+=content
       console.log(str);
        })
        backContactUs.innerHTML = str;
    })
    
};
contactUsInit();
