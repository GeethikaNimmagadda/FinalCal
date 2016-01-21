



<script>
	function clearA()
	{
		document.getElementById("A").value="";
	}
	function clearB()
	{
		document.getElementById("B").value="";
	}
	function clearR()
	{
		document.getElementById("R").value="";
	}
	function clearALL()
	{
		document.getElementById("A").value="";
		document.getElementById("B").value="";
		document.getElementById("R").value="";
		document.getElementById("operand").value="";
	}
	function inputforA(a)
	{
	document.getElementById("A").value+=a;
	}
	function inputforB(a)
	{
		document.getElementById("B").value+=b;
	}
	function inputforoperand(a)
	{(
		if(!Nan)
	document.getElementById("operand").innerHTML=a;
	var numberButtons= document.getElementsByClassName=("buttons");
	}
  function c(val)
    {
    document.getElementById("Id").value=val;
}
    function v(val)
{
    document.getElementById("Id").value+=val;
}
 function e() 
  { 
  	try 
  	{ 
  	  c(eval(document.getElementById("d").value))
    } 
  	catch(e) 
  	{
  	  c('Error') 
    } 
  }
