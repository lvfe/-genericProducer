const {builder} = require('./lib/builder');
let schema= `[{
    "value": "tiv_2012:",
    "label": "tiv_2012:"
}, {
    "value": {
        "hu_site_limit:": {
            "value": "hu_site_limit:",
            "label": "hu_site_limit:"
        },
        "TIV": {
            "value": {
                "tiv_2012": {
                    "value": "tiv_2012",
                    "label": "tiv_2012"
                },
                "tiv_2011": {
                    "value": "tiv_2011",
                    "label": "tiv_2011"
                }
            },
            "label": "TIV"
        }
    },
    "label": "HUSITE",
    "default": "hidden"
}]`;
builder('./FL_insurance_sample.csv', {split:','}, schema).then(res=>{
    console.log(String.valueOf(res[0]));
});