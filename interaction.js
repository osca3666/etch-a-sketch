//
const user_input = document.createElement('input');
user_input.type = 'range';
user_input.max = '60';
user_input.min = '10';
user_input.style.height = '5%';
user_input.style.width = '10%';

let num_squares = user_input.value;


//contains all the squares
const all_container = document.createElement("div");
all_container.style.height = '100%';
all_container.style.width = '100%';
all_container.style.backgroundColor ='black';
all_container.style.display ='flex';
all_container.style.flexDirection='column';
all_container.style.justifyContent='center';
all_container.style.alignItems='center';

const sketch_pad = document.createElement('div');
sketch_pad.style.backgroundColor= 'rgb(220, 40, 40)';
sketch_pad.style.height='510px';
sketch_pad.style.width = '700px';
sketch_pad.style.display ='flex';
sketch_pad.style.justifyContent='center';
sketch_pad.style.borderRadius ='2%';


const container = document.getElementById("container");
container.style.height='500px';
container.style.width = '500px';
container.style.display='flex';
container.style.flexDirection='column';
// Purpose: create a 25x25 grid composed of div elements
// Process: Double for loop: 16 rows of 16 divs per row
for (let i = 0; i < num_squares; i++){

    //contains a row of the squares
    const row_holder = document.createElement('div');
    row_holder.style.display='flex';
    row_holder.style.justifyContent='center';


    for (let j = 0; j < num_squares;j++){
        let square = document.createElement('div');
        row_holder.appendChild(square);
        square.style.height = "15px";
        square.style.width = "15px";
        square.style.border = "1px solid grey";
        square.style.backgroundColor ="white";

        square.addEventListener("mouseover",function(){
            square.style.backgroundColor = "blue";
        });
    }
    container.appendChild(row_holder);
}

sketch_pad.append(container);
all_container.append(user_input);
all_container.append(sketch_pad);
document.body.append(all_container);