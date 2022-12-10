var ourprogram =[
    {name:"IMMIGRATION ASSISTANCE",
    icon:"fa-solid  fa-file-contract",
    details:"Assisting you and your family as you navigate the immigration process.",
    link:"program_immigration_assistance.html"
    },
    {name:"EMPLOYMENT SERVICES",
    icon:"fa-solid fa-file",
    details:"Assisting you and your family as you navigate the immigration process.",
    link:"program_employment_services.html"
    },
    {name:"IMMIGRATION CONSULTATION",
    icon:"fa-solid fa-microphone",
    details:"Assisting you and your family as you navigate the immigration process.",
    link:"program_consultaion.html"
    },
   /* {name:"Family services",
    icon:"fa-solid fa-users",
    details:"Assisting you and your family as you navigate the immigration process.",
    link:"program_family_service.html"
    },
    {name:"Medical referral services for medical government programs, social service providers",
    icon:"fa-solid fa-user-doctor",
    details:"Assisting you and your family as you navigate the immigration process.",
    link:"program_medical_related.html"
    }*/
]


var ournews =[
    {
        title:"News Headline here",
        caption:"We are excited to share the first episode of Illuminating Human Rights, a podcast in association with the Cconnet Network ...",
        date:"May 17, 2022",
        link:"",
        image:"images/blogimg.jpg"
    },
    {
        title:"News Headline here",
        caption:"We are excited to share the first episode of Illuminating Human Rights, a podcast in association with the Cconnet Network ...",
        date:"May 17, 2022",
        link:"",
        image:"images/blogimg.jpg"
    },
    {
        title:"News Headline here",
        caption:"We are excited to share the first episode of Illuminating Human Rights, a podcast in association with the Cconnet Network ...",
        date:"May 17, 2022",
        link:"",
        image:"images/blogimg.jpg"
    }
]

var programcontent="";
var blogcontent="";

function loadprogramcontent(){
    programcontent="";

    for(var i =0; i < ourprogram.length; i++){

        programcontent =  programcontent + `<div class='w3-col l4 s12 m12 ' style='padding:5px'>

        <div class='programcard sameheight w3-col w3-white w3-hover-pale-blue w3-border-round w3-center w3-margin-bottom'>
    
    
            <div class='inactive'  style='padding-top:100px; padding-bottom:100px'>
                <i class='${ourprogram[i].icon} w3-xxlarge w3-text-blue-grey'></i>
    
                <h3 class='myfont1 w3-text-blue-grey'> ${ourprogram[i].name} </h3>
            </div>
    
            <br />
    
            <div class='active' style='padding-top:20px; padding-bottom:20px'>
                <i class='${ourprogram[i].icon} w3-xxlarge w3-text-blue-grey'></i>
    
                <h3 class='myfont1 w3-text-blue-grey'> ${ourprogram[i].name} </h3>
                <p class='myfont1 w3-padding'> ${ourprogram[i].details}</p>
                <p>   <a href='${ourprogram[i].link}' class='w3-btn w3-blue myfont1'> Learn More </a></p>
            </div>
        
            
        </div>
    </div>`

    }
    document.getElementById("pnlprogram").innerHTML = programcontent;
}


function loadblogcontent(){
    blogcontent = "";

    for(var i =0; i < ournews.length; i++){

        blogcontent =   blogcontent + `
        <div class="w3-col l4 s12 m12" style="padding:5px">

        <div class="w3-col sameheightblog  w3-white w3-hover-pale-blue w3-border-round w3-margin-bottom">
            <img src="${ournews[i].image}" style="max-width:100%" />
            <div class="w3-padding">

                <h4> <b> ${ournews[i].title} </b> </h4>
                <p class="myfont2">${ournews[i].caption} </p>

                <p class="myfont2  w3-small"> 
                    <span class="w3-text-dark-grey"> ${ournews[i].date} </span>
                    <span class="w3-right w3-text-blue-grey"><a href='${ournews[i].link}'> <b> Read More >>> </b> </a> </span>
                </p>
            </div>
            
        </div>
        </div> `
    }

    document.getElementById("pnlblog").innerHTML = blogcontent;
}





loadprogramcontent();
loadblogcontent();

