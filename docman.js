function fileSelectOption(input, encodedRef, ext)
{
    var filename = input.innerHTML;
	
	
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
	 window.open(input.href);	    
  }
    else
    {

		try
		{
			document.getElementById("overlaybar").parentNode.removeChild(document.getElementById("overlaybar"))
		}
		catch(err)
		{
		}
			
	   var i = document.createElement('div');	    
	   document.body.appendChild(i);
	   
		if(ext == "doc" || ext == "docx" || ext == "xlsx" || ext == "ppt" || ext == "pptx" || ext == "pdf" || ext == "txt" || ext == "rtf")
		{
			if(ext == "xlsx" || ext == "pdf")
			{
				i.innerHTML = "<div id=\"overlaybar\" style=\"position: fixed; z-index:100; bottom: 20px !important; left: 0px; height:20px; width:100%;\">"+ titlex +"<span id=\"overlayinsert\" style=\"float:right !Important\"><a href=\"view/"+encodedRef+"/"+filename+"\" class=\"border\" onclick=\"document.getElementById('overlaybar').parentNode.removeChild(document.getElementById('overlaybar'));\">View File<\/a>&nbsp;&nbsp;<a href=\"download/"+encodedRef+"/"+filename+"\" class=\"border\" onclick=\"document.getElementById('overlaybar').parentNode.removeChild(document.getElementById('overlaybar'));\" >Download File<\/a>&nbsp;&nbsp;<a class=\"border\" href=\"#v\" onclick=\"document.getElementById('overlaybar').parentNode.removeChild(document.getElementById('overlaybar'));\">Close &#215;</span></div><br>"
			}
			else
			{
				i.innerHTML = "<div id=\"overlaybar\" style=\"position: fixed; z-index:100; bottom: 20px !important; left: 0px; height:20px; width:100%;\">"+ titlex +"<span id=\"overlayinsert\" style=\"float:right !Important\"><a href=\"view/"+encodedRef+"/"+filename+"\" class=\"border\" onclick=\"document.getElementById('overlaybar').parentNode.removeChild(document.getElementById('overlaybar'));\">View File<\/a>&nbsp;&nbsp;<a href=\"download/"+encodedRef+"/"+filename+"\" class=\"border\" onclick=\"document.getElementById('overlaybar').parentNode.removeChild(document.getElementById('overlaybar'));\" >Download File<\/a>&nbsp;&nbsp;<a href=\"pdf/"+encodedRef+"/"+filename+"\" class=\"border\" onclick=\"document.getElementById('overlaybar').parentNode.removeChild(document.getElementById('overlaybar'));\" >Download as PDF<\/a>&nbsp;&nbsp;<a class=\"border\" href=\"#v\" onclick=\"document.getElementById('overlaybar').parentNode.removeChild(document.getElementById('overlaybar'));\">Close &#215;</span></div><br>"			
			}
		}
		else
		{
			i.innerHTML = "<div id=\"overlaybar\" style=\"position: fixed; z-index:100; bottom: 20px !important; left: 0px; height:20px; width:100%;\">"+ titlex +"<span id=\"overlayinsert\" style=\"float:right !Important\"><a href=\"download/"+encodedRef+"/"+filename+"\" class=\"border\" onclick=\"document.getElementById('overlaybar').parentNode.removeChild(document.getElementById('overlaybar'));\" >Download File<\/a>&nbsp;&nbsp;<a class=\"border\" href=\"#v\" onclick=\"document.getElementById('overlaybar').parentNode.removeChild(document.getElementById('overlaybar'));\">Close &#215;</span></div><br>"
		}

	   
	//	setTimeout(function(){document.getElementById("overlaybar").parentNode.removeChild(document.getElementById("overlaybar"));}, 10000);
		}
}


function writeContent(content)
{
  // preappend data
  document.title = content.foldername;
  document.write("<style>#loadingbar{display:none !important;}</style><div id=\"page-wrapper\"><div id=\"content-all\"><h4>" + content.foldername + "</h4><p>Press any link to continue to that folder/file</p><span id=\"listing\" class=\"menu\">");
  var output = ""
  output += "<span><img src=\"https:\/\/systemsense.github.io\/s\/icon_back.png\">&nbsp;&nbsp;<a href=\"../\">Up One Folder<\/a></span><br>"  
  for (i = 0; i < content.items.length; i++) {
    var thisItem = content.items[i];
    if(thisItem.type == "folder")
    {     
      output += "<span><img src=\"https:\/\/systemsense.github.io\/s\/icon_folder.png\">&nbsp;&nbsp;<a href=\""+thisItem.encodedName+"/\">"+thisItem.name+"<\/a></span><br>"	  
    }
    if(thisItem.type == "file")
    {
	if(thisItem.ext == "doc" || thisItem.ext == "docx" || thisItem.ext == "docxm" || thisItem.ext == "xls" || thisItem.ext == "xlsx" || thisItem.ext == "xlsxm" || thisItem.ext == "ppt" || thisItem.ext == "pptx" || thisItem.ext == "pdf" || thisItem.ext == "zip")	      
	{
	    output += "<span><img src=\"https:\/\/systemsense.github.io\/s\/icon_"+thisItem.ext+".png\">&nbsp;&nbsp;<a onClick=\"fileSelectOption(this, \\\"" + thisItem.encodedRef + "\\\",\\\"" + thisItem.ext + "\\\"); return false;\" href=\"download/"+thisItem.encodedRef + "/" + thisItem.name+"\">"+thisItem.name+"<\/a></span><br>"
	}
	else
	{
		output += "<span><img src=\"https:\/\/systemsense.github.io\/s\/icon_file.png\">&nbsp;&nbsp;<a href=\"download/"+thisItem.encodedRef + "/" + thisItem.name+"\">"+thisItem.name+"<\/a></span><br>"
	}
	    
      
    }
    

  }
  document.write(output);
  // post append data
 
  document.write("</div></div>");
}

function loadContent()
{
	var urlx = window.location.pathname.substring(1);
	var statex = getParameterByName('state', urlx);

	try
	{
	var filename = urlx.substring(urlx.lastIndexOf('/')+1);
	}
	catch(err){filename = "index.html"}

	var provider = window.location.pathname.substring(1).split('/')[4];
	document.write("<html><head><title>System Sense DOCMAN</title><meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\" />")
	document.write("<meta name=\"viewport\" content=\"initial-scale=1, minimum-scale=1, width=device-width\" \/>")
	document.write("<meta http-equiv=\"content-type\" content=\"text\/html; charset=utf-8\" />")
	document.write("<link href=\"\/s/styles.css\" rel=\"stylesheet\" type=\"text\/css\" />")
	document.write("<script src=\"/docman/docman.js\" type=\"text\/javascript\"><\/script>");
	document.write("<script src=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/1.6.4\/jquery.min.js\" type=\"text\/javascript\"><\/script></head><body>");
	if(urlx.indexOf("/download/") != -1 || urlx.indexOf("/pdf/") != -1)
	{
		document.write("<i id=\"loadingbar\">Preparing file for download...</i>");	
	}
	else
	{
		document.write("<i id=\"loadingbar\">Loading folder information...</i>");
	}

	if(provider == "sharepoint")
	{
		if(urlx.indexOf("/view/") != -1)
		{
			document.write("<body>");			
			document.write("<div id=\"overlaybar\" style=\"z-index:1000\; width:100%;\">"+ unescape(filename) +"<span id=\"overlayinsert\" style=\"float:right !Important\">&nbsp;&nbsp;<a class=\"border\" href=\"..\/..\/\">Close &#215;</span></div><br>")
			document.write("<iframe style=\"width:100%; height:96%;\" height=\"96%\" sandbox=\"allow-scripts allow-popups allow-pointer-lock allow-presentation allow-same-origin allow-modals allow-top-navigation allow-downloads\" allowscripts=\"1\" allowdownloads=\"1\" allowfullscreen=\"1\" frameborder=\"0\" id=\"viewer\" src=\"https:\/\/script.google.com\/macros\/s\/AKfycbyJcOnas1azziwJ6jr6CedHb6W0hnNlQSnYSW-WzCLdsL79e3M8WzVRKjoNLBM5I3pP\/exec?lookup="+statex+"&filename="+filename+"\"><noscript>&nbsp;Enable Javascript to Load File<\/noscript><\/iframe>");
			document.write("</body></html>"); 	 
			document.title = unescape(filename);					
		}
		else
		{
			document.write("<script type=\"application\/javascript\" src=\"https:\/\/script.google.com\/macros\/s\/AKfycbwj81P-q3z3WYDmOCl99FYtSdzbF9hCVla2WqSGGHhJYmO_RDDmZo0\/exec?lookup="+statex+"&filename="+filename+"\"><\/script><\/head>");			
		}
	}
	else
	{
	 //document.write("<script type=\"application\/javascript\" src=\"https:\/\/script.google.com\/macros\/s\/AKfycbzHz5xfGd3dMFK8sl9gnmOovk-2RL3Bgt-LUE9xGAiiRO8DGtPmbfmT\/exec?lookup="+statex+"&filename="+filename+"\"><\/script><\/head>");			
	
	}
try
{
	document.querySelector("#loadingbar").style.display = "none";
}
	catch(err){}
}
function getParameterByName(name, defaultx, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return defaultx;
    if (!results[2]) return defaultx;
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// (C) 2020 Daniel Pritchard
