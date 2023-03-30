pizzaListArray = [];

function getmenu()
	{    
        // Dê o nome apropriado ao id como pizzaName
        var item = document.getElementById("pizzaName").value; 
        //Adicione a função push() para empurrar o item no array
        pizzaListArray.push(item);
        var removeCommas = pizzaListArray.join("<br># ");
        document.getElementById("displayMenu").innerHTML =  "# " + removeCommas;
	}