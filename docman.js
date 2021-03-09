function writeContent(content)
{
  // preappend data
  document.title = content.foldername;
  document.write("<style>#loadingbar{display:none !important;}</style><div id=\"page-wrapper\"><br><br><div id=\"content-all\"><h4>" + content.foldername + "</h4><p>Press any link to continue to that folder/file</p><span id=\"listing\" class=\"menu\">");
  var output = ""
  output += "<span><img src=\"https:\/\/systemsense.github.io\/docman\/images\/icon_back.png\">&nbsp;&nbsp;<a href=\"../\">Up One Folder<\/a></span><br>"  
  for (i = 0; i < content.items.length; i++) {
    var thisItem = content.items[i];
    if(thisItem.type == "folder")
    {     
      output += "<span><img src=\"https:\/\/systemsense.github.io\/docman\/images\/icon_folder.png\">&nbsp;&nbsp;<a href=\""+thisItem.encodedName+"/\">"+thisItem.name+"<\/a></span><br>"	  
    }
    if(thisItem.type == "file")
    {
      output += "<span><img src=\"https:\/\/systemsense.github.io\/docman\/images\/icon_file.png\">&nbsp;&nbsp;<a href=\"view/"+thisItem.encodedRef + "/" + thisItem.name+"\">"+thisItem.name+"<\/a></span><br>"
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
	if(urlx.indexOf("/view/") != -1)
	{
		//document.write("<i id=\"loadingbar\">Preparing file for download...</i>");	
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
