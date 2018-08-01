	var KekArray = [];
	var tabl = document.createElement('table');
	var tableBody = document.createElement('tbody');
	function createCell()
	{
		var body = document.getElementById('kekBody');
		var textNode = document.createTextNode('kek');
		var row = document.createElement('tr');
		var cell = document.createElement('td');
		cell.appendChild(textNode);
		row.appendChild(cell);
		tableBody.appendChild(row);
		tabl.appendChild(tableBody);
		body.appendChild(tabl);
		tabl.setAttribute("border", "1");
	}
	function createRow()
	{
		var cell = document.createElement('td');
		var cellnode = document.createTextNode('kke2');
		cell.appendChild(cellnode);
		var insRow = tabl.insertRow();
		insRow.insertCell(cell);

	}
	function TikatMihanuNaEbalo()
	{
		var list = document.getElementById('Arrays');
		var li = document.createElement("li");
		var Input = document.getElementById('kekText').value;
		if (Input == "") 
		{
			alert('IDI NAHUY S PUSTIM POLEM');
		}
		else
			{
				KekArray.push(Input);
				li.appendChild(document.createTextNode(KekArray[KekArray.length-1]));
				list.appendChild(li);
			}
	}
	function RemoveLi()
	{
		var Num = document.getElementById('Numb');
		var list = document.getElementById('Arrays');
		KekArray.splice([Num.value - 1], 1);
		list.innerHTML = '';
		for (i=0; i<KekArray.length; i++)
		{
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(KekArray[i]));
			list.appendChild(li);
			
		}
	}
	function CheckSkopki()
	{
		var Skobka = 0;
		var data = document.getElementById('Skob').value;
		var SkobArray = data.split("");
		for (i = 0; i < SkobArray.length; i++)
		{
			if (SkobArray[i]==('('))
				Skobka++;
			if (SkobArray[i]==(')'))
				Skobka--;
			if (Skobka<0)
				break;
		}
		if (Skobka==0)
		{
			alert("True!");
		}
		else
			alert("false!");
	}
	function OtherSkobochki()
	{
		data = document.getElementById('Skob').value;
		var SkobArray = data.split("");
		var Stack = [];
		var BOOL = true;
		for (i = 0; i<SkobArray.length; i++)
		{
			if (SkobArray[i]=="(" || SkobArray[i]=="[" || SkobArray[i]=="{")
			{
				Stack.push(SkobArray[i]);
				console.log(SkobArray[i]);
			}
			if (SkobArray[i]==")")
			{
				if (Stack.length == 0)
					{
						BOOL = false;
						break;
					}
				else 
					{
						var kek = Stack.splice(Stack.length-1, 1);
						if (kek[0] != '(')
						{
							alert('Ne OK!');
							BOOL = false;
							break;
						}
					}
			}
			if (SkobArray[i]=="]" )
			{
				if (Stack.length == 0)
					{
						BOOL = false;
						break;
					}
				else
					{  
						var kek = Stack.splice(Stack.length-1, 1);
						if (kek[0] != '[')
						{
							alert('Ne OK!');
							BOOL = false;
							break;
						}
					}
			}
			if (SkobArray[i]=="}")
			{
				if (Stack.length == 0)
					{
						BOOL = false;
						break;
					}
				else
					{
						var kek = Stack.splice(Stack.length-1, 1);
						if (kek[0] != '{')
						{
							alert('Ne OK!');
							BOOL = false;
							break;
						}
					}
			}

		}
		if (BOOL == true && Stack.length == 0)
			alert('OK!');
		else
			alert('Ne OK!');
	}

