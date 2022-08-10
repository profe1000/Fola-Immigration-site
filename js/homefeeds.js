var ourprogram =[
    {name:"Immigration Legal Referrals",
    icon:"fa-solid fa-hand",
    details:"Assisting you and your family as you navigate the immigration process."
    },
    {name:"Immigrant applications forms assistance",
    icon:"fa-solid fa-hand",
    details:"Assisting you and your family as you navigate the immigration process."
    },
    {name:"Work authorization applications",
    icon:"fa-solid fa-hand",
    details:"Assisting you and your family as you navigate the immigration process."
    },
    {name:"Consultations - eligibility and guidance on immigration laws and regulations",
    icon:"fa-solid fa-hand",
    details:"Assisting you and your family as you navigate the immigration process."
    },
    {name:"Family services",
    icon:"fa-solid fa-hand",
    details:"Assisting you and your family as you navigate the immigration process."
    },
    {name:"Medical referral services for medical government programs, social service providers",
    icon:"fa-solid fa-hand",
    details:"Assisting you and your family as you navigate the immigration process."
    }
]


var ournews =[
    {
        title:"Illuminating Human Rights: Afghanistan",
        caption:"We are excited to share the first episode of Illuminating Human Rights, a podcast in association with the Luminus Network ...",
        date:"May 17, 2022",
        link:"",
        image:"images/blogimg.jpg"
    },
    {
        title:"Illuminating Human Rights: Afghanistan",
        caption:"We are excited to share the first episode of Illuminating Human Rights, a podcast in association with the Luminus Network ...",
        date:"May 17, 2022",
        link:"",
        image:"images/blogimg.jpg"
    },
    {
        title:"Illuminating Human Rights: Afghanistan",
        caption:"We are excited to share the first episode of Illuminating Human Rights, a podcast in association with the Luminus Network ...",
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
                <p>   <a class='w3-btn w3-blue myfont1'> Learn More </a></p>
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
            <img src="images/blogimg.jpg" style="max-width:100%" />
            <div class="w3-padding">

                <h4> <b> Illuminating Human Rights: Afghanistan </b> </h4>
                <p class="myfont2">We are excited to share the first episode of Illuminating Human Rights, a podcast in association with the Luminus Network ... </p>

                <p class="myfont2  w3-small"> 
                    <span class="w3-text-dark-grey"> May 17, 2022</span>
                    <span class="w3-right w3-text-blue-grey"><a> <b> Read More >>> </b> </a> </span>
                </p>
            </div>
            
        </div>
        </div> `
    }

    document.getElementById("pnlblog").innerHTML = blogcontent;
}





loadprogramcontent();
loadblogcontent();

