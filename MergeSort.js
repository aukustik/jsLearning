	var n = 0;
	function ArrInput()
	{
		Arr = [];
		ArrTemp = [];
		var InputValue = document.getElementById('InputMerge').value;
		Arr = InputValue.split(' ');
		console.log(Arr);
		CopyArray(Arr, 0, Arr.length, ArrTemp);
		TDSplitMerge(ArrTemp, 0, Arr.length, Arr);
		console.log(ArrTemp);
	}

	function TDSplitMerge(ArrayTemp, iBegin, iEnd, ArrayMain)
	{
		if (iEnd - iBegin < 2) return;
		var iMiddle = ((iEnd + iBegin) / 2);
		TDSplitMerge(ArrayMain, iBegin, iMiddle, ArrayTemp);
		TDSplitMerge(ArrayMain, iMiddle, iEnd, ArrayTemp);
		TopDownMerge(ArrayTemp, iBegin, iMiddle, iEnd, ArrayMain);
	}

	function TopDownMerge(ArrayMain, iBegin, iMiddle, iEnd, ArrayTemp)
	{
		var i = iBegin;
		var j = iMiddle;
		for (k = iBegin; k < iEnd; k++)
		{
			if (i < iMiddle && (j >= iEnd || ArrayMain[i]<=ArrayMain[j]))
			{
				ArrayTemp[k] = ArrayMain[i];
				i = i + 1;
			}
			else
			{
				ArrayTemp[k] = ArrayMain[j];
				j = j + 1;
			}
		}
	}

	function CopyArray(ArrayMain, iBegin, iEnd, ArrayTemp)
	{
		for (i = iBegin; i < iEnd; i++)
		{
			ArrayTemp[i] = ArrayMain[i];
		}
		console.log(ArrayMain);
		console.log(ArrayTemp);
	}
