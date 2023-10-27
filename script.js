document.addEventListener("DOMContentLoaded", function () {
  const xmlInput = document.getElementById("xmlInput");
  const removeTagsButton = document.getElementById("removeTagsButton");
  const output = document.getElementById("output");

  removeTagsButton.addEventListener("click", function () {
      const inputXML = xmlInput.value;
      const cleanedXML = removeTags(inputXML);
      output.value = cleanedXML;
  });

  function removeTags(xml) {
      // Use regular expressions to remove the specified tags
      const signatureRemoved = xml.replace(/<Signature[^>].*?<\/Signature>/g, "");
      const xmlDeclarationRemoved = signatureRemoved.replace(/<\?xml[^>]*\?>/g, "");

      return xmlDeclarationRemoved;
  }
});
