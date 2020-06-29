wp.blocks.registerBlockType("monika/boarder-box", {
  title: "Search Ski Resort Block",
  icon: "smiley",
  category: "common",
  attributes: {
    content: { type: "string" },
  },
  edit: function (props) {
    function displayskilist(event) {
      props.setAttributes({ content: event.target.value });

      $url = "https://api.fnugg.no/suggest/autocomplete?q=";
      $searchUrl = "https://api.fnugg.no/search?q=";

      const usrInput = document.getElementById("autocomplete");

      const list = document.getElementById("droplist");

      list.innerHTML = "";
      var skiname = "";
      var skiInfo = "";
      fetch($url + usrInput.value)
        .then((response) => response.json())
        .then((data) => {
          skiname = data.result.map((resorts) => resorts.name);

          document.getElementById("paragraph").innerHTML = skiname;

          skiname.forEach((item) => {
            let option = document.createElement("option");
            option.value = item;
            list.appendChild(option);
          });
        });

      fetch($searchUrl + skiname)
        .then((searchresponse) => searchresponse.json())
        .then((newData) => {
          skiInfo = newData.hits.hits;

          skiInfo.forEach((item) => {
            if (item._source.name === usrInput.value) {
              console.log(item._source.id);
            }
          });
        });
    }
    return wp.element.createElement(
      "div",
      null,
      wp.element.createElement("input", {
        type: "text",
        id: "autocomplete",
        name: "autocomplete",
        list: "droplist",
        placeholder: "Find Ski Resorts",
        onfocus: "this.placeholder = ''",
        onblur: "this.placeholder = 'Find Ski Resorts'",
        value: props.attributes.content,
        onChange: displayskilist,
      }),
      wp.element.createElement("datalist", {
        id: "droplist",
      }),
      wp.element.createElement("div", {
        id: "paragraph",
      })
    );
  },
  save: function (props) {
    //return wp.element.createElement("div", null, props.attributes.content);
    return null;
  },
});
