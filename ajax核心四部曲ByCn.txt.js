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
			// 1.�ɹ�����Microsoft.XMLHTTP����/XMLHttpRequest����
			S_xmlhttprequest();
			if (!xmlHttp)
			{
				alert("����Microsoft.XMLHTTPʧ��");
				return false;
			}

			// 2.�򿪼�������
			/*POST���Ա��⻺�棬������url�������һ��ʱ�亯��*/
			xmlHttp.open("POST","check.php?id="+id_val,true);\
			
			// 3.׼������״̬
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
			
			// 4.����
			xmlHttp.send(null);
		}
		
	}


</script>