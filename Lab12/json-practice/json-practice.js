const jsonString = `{
    "window": {
    "title":"Sample Widget",
    "width":500,
    "height":500
    },
    "image":{
    "src":"images/logo.png",
    "coords": [250,150,350,400],
    "alignment": "center"
    },
    "messages":[
    {"text": "Save", "offset":[10, 30]},
    {"text": "Help", "offset":[0, 50]},
    {"text": "Quit", "offset":[30, 10]},
    {"text": "Quit", "offset":[30, 60]}
    ],
    "debug":"true"
    }`;

    const jsonObj = JSON.parse(jsonString);
    console.log(jsonObj.window.title);
    console.log(jsonObj.image.coords[2])