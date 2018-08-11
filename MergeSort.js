class MergeSortClass
{
	function MergeSortClass()
	{
		this.Arr = [];
		var InputValue = document.getElementById('InputMerge').value;
		Arr = InputValue.split(' ');
		console.log(this.Arr);
	}
	
	function MergeSort(ArrayMain)
	{
		console.log(ArrayMain);
		var n = ArrayMain.length;
		console.log('Arrays length: ' + ArrayMain.length);
		if (n == 1) return ArrayMain;
		var Half1 = ArrayMain.splice(0, n/2);
		var Half2 = ArrayMain.splice(n/2);
		console.log('First Array:' + Half1);
		console.log('Second Array:' + Half2);
	}
}

