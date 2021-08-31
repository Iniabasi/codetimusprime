/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title : "Classic Core single Matrix Multiplication",
        authors : "Ini Ekanem, Jai Chauhan",
        conferences : "Computer Architecture lab reports",
        researchYr : 2021,
        citebox : "popup1",
        image : "assets/images/research-page/inteferenceNetwork.png",
        citation: {
            vancouver: "Professor Miodrag Biolic"
        },
        abstract: "One problem with the Pool of Task  PoT is that it makes use of Data Dependence. When a thread is completed, it will write data to a shared variable in which the data can be altered by another thread. This is possible because all the tasks can finish at separate times, they don't have to finish at the same time. In this regard, a data hazard could occur, however, it can also be prevented through a barrier function.",
        absbox: "absPopup1"
    },

    {
        title : "Design and Simulation of Sequential Logic circuits",
        authors : "Ini Ekanem, Khalid Sayeed",
        conferences : "Computer Architecture Labs",
        researchYr : 2018,
        citebox : "popup2",
        image : "assets/images/research-page/crossLingual.png",
        citation: {
            vancouver: ""
        },
        abstract: "Sequential Circuits are a type of a circuit where the output is dependent on the value of the inputs. In addition to the value of the inputs, the output is also dependent on the timing of the input. Since this lab is pertinent to  Synchronous counters, the timing of the input is facilitated by a clock pulse generator. Due to the fact that data needs to be stored Sequential Circuits implement flip flops and gates. Flip flops are a type of storage element which stores 1-bit of information and will switch states when the clock pulse generator produces a clock pulse",
        absbox: "absPopup2"
    },

    {
        title : "Introduction to Microprocessor Programming",
        authors : "Ini Ekanem, Min Ju Kim",
        conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
        researchYr : 2020,
        citebox : "popup3",
        image : "assets/images/research-page/wordRepresentation.png",
        citation: {
            vancouver: "Basim Hafidh Ph. D, P.Eng"
        },
        abstract: "It can be said that, MiniIDE can be used for viewing both machine code and assembly source codes. This in turn helps in improving the debugging processes. It also helps in figuring out the address locations, memory addressing and instruction size. ",
        absbox: "absPopup3"
    }
];
   
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, citebox, citation, absbox, abstract}) =>
        (output +=`
            <tr> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div> ${authors} </div> <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
        
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            BIBTEX
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

