<script type="text/javascript">
	var xmlHttp;
	function S_xmlhttprequest()
	{
		if(window.ActiveXObject) 
		{
			xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
		} 
		else if(window.XMLHttpRequest) 
		{
			xmlHttp = new XMLHttpRequest();
		}
	} 
	function check_name()
	{
		var id_val=document.registerForm.user.value;
		if (id_val != "")
		{
			// 1.成功创建Microsoft.XMLHTTP对象/XMLHttpRequest对象
			S_xmlhttprequest();
			if (!xmlHttp)
			{
				alert("创建Microsoft.XMLHTTP失败");
				return false;
			}

			// 2.打开监听对象
			/*POST可以避免缓存，或者在url后面加上一个时间函数*/
			xmlHttp.open("POST","check.php?id="+id_val,true);\
			
			// 3.准备发送状态
			xmlHttp.onreadystatechange = function()
				{
					if (xmlHttp.readyState == 4)
					{
						if(xmlHttp.status == 200)
						{
							var nameDiv=document.getElementById('check_name');
							var tt =  xmlHttp.responseText;
							nameDiv.innerHTML = tt;
						}
					}
				}
			
			// 4.发送
			xmlHttp.send(null);
		}
		
	}


</script>