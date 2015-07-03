walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bMicroServices\b/g, "MongolianClusterfucks");
	v = v.replace(/\bMicro Services\b/g, "Mongolian Clusterfucks");
	v = v.replace(/\bMicro services\b/g, "Mongolian clusterfucks");
	v = v.replace(/\micro Services\b/g, "mongolian Clusterfucks");
	v = v.replace(/\bmicro services\b/g, "mongolian clusterfucks");
	v = v.replace(/\bmicroservices\b/g, "mongolianclusterfucks");
	v = v.replace(/\bMicroservices\b/g, "Mongolianclusterfucks");
	v = v.replace(/\bMicroservice\b/g, "Mongolianclusterfuck");
	v = v.replace(/\bmicroservice\b/g, "mongolianclusterfuck");
	v = v.replace(/\bmicroService\b/g, "mongolianClusterfuck");
	v = v.replace(/\bMicro-Service\b/g, "Mongolian-Clusterfuck");
	v = v.replace(/\bMicro-Services\b/g, "Mongolian-Clusterfucks");
	v = v.replace(/\bmicro-service\b/g, "mongolian-clusterfuck");
	v = v.replace(/\bmicro-services\b/g, "mongolian-clusterfucks");

	
	textNode.nodeValue = v;
}


