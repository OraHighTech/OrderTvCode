// Object containing country codes
const countryCodes = [
    {
        name: "Afghanistan",
        code: "+93",
        flag: "https://flagcdn.com/w20/af.png",
        "code-in": "AF",
    },
    {
        name: "Aland Islands",
        code: "+358",
        flag: "https://flagcdn.com/w20/ax.png",
        "code-in": "AX",
    },
    {
        name: "Albania",
        code: "+355",
        flag: "https://flagcdn.com/w20/al.png",
        "code-in": "AL",
    },
    {
        name: "Algeria",
        code: "+213",
        flag: "https://flagcdn.com/w20/dz.png",
        "code-in": "DZ",
    },
    {
        name: "AmericanSamoa",
        code: "+1684",
        flag: "https://flagcdn.com/w20/as.png",
        "code-in": "AS",
    },
    {
        name: "Andorra",
        code: "+376",
        flag: "https://flagcdn.com/w20/ad.png",
        "code-in": "AD",
    },
    {
        name: "Angola",
        code: "+244",
        flag: "https://flagcdn.com/w20/ao.png",
        "code-in": "AO",
    },
    {
        name: "Anguilla",
        code: "+1264",
        flag: "https://flagcdn.com/w20/ai.png",
        "code-in": "AI",
    },
    {
        name: "Antarctica",
        code: "+672",
        flag: "https://flagcdn.com/w20/aq.png",
        "code-in": "AQ",
    },
    {
        name: "Antigua and Barbuda",
        code: "+1268",
        flag: "https://flagcdn.com/w20/ag.png",
        "code-in": "AG",
    },
    {
        name: "Argentina",
        code: "+54",
        flag: "https://flagcdn.com/w20/ar.png",
        "code-in": "AR",
    },
    {
        name: "Armenia",
        code: "+374",
        flag: "https://flagcdn.com/w20/am.png",
        "code-in": "AM",
    },
    {
        name: "Aruba",
        code: "+297",
        flag: "https://flagcdn.com/w20/aw.png",
        "code-in": "AW",
    },
    {
        name: "Australia",
        code: "+61",
        flag: "https://flagcdn.com/w20/au.png",
        "code-in": "AU",
    },
    {
        name: "Austria",
        code: "+43",
        flag: "https://flagcdn.com/w20/at.png",
        "code-in": "AT",
    },
    {
        name: "Azerbaijan",
        code: "+994",
        flag: "https://flagcdn.com/w20/az.png",
        "code-in": "AZ",
    },
    {
        name: "Bahamas",
        code: "+1242",
        flag: "https://flagcdn.com/w20/bs.png",
        "code-in": "BS",
    },
    {
        name: "Bahrain",
        code: "+973",
        flag: "https://flagcdn.com/w20/bh.png",
        "code-in": "BH",
    },
    {
        name: "Bangladesh",
        code: "+880",
        flag: "https://flagcdn.com/w20/bd.png",
        "code-in": "BD",
    },
    {
        name: "Barbados",
        code: "+1246",
        flag: "https://flagcdn.com/w20/bb.png",
        "code-in": "BB",
    },
    {
        name: "Belarus",
        code: "+375",
        flag: "https://flagcdn.com/w20/by.png",
        "code-in": "BY",
    },
    {
        name: "Belgium",
        code: "+32",
        flag: "https://flagcdn.com/w20/be.png",
        "code-in": "BE",
    },
    {
        name: "Belize",
        code: "+501",
        flag: "https://flagcdn.com/w20/bz.png",
        "code-in": "BZ",
    },
    {
        name: "Benin",
        code: "+229",
        flag: "https://flagcdn.com/w20/bj.png",
        "code-in": "BJ",
    },
    {
        name: "Bermuda",
        code: "+1441",
        flag: "https://flagcdn.com/w20/bm.png",
        "code-in": "BM",
    },
    {
        name: "Bhutan",
        code: "+975",
        flag: "https://flagcdn.com/w20/bt.png",
        "code-in": "BT",
    },
    {
        name: "Bolivia, Plurinational State of",
        code: "+591",
        flag: "https://flagcdn.com/w20/bo.png",
        "code-in": "BO",
    },
    {
        name: "Bosnia and Herzegovina",
        code: "+387",
        flag: "https://flagcdn.com/w20/ba.png",
        "code-in": "BA",
    },
    {
        name: "Botswana",
        code: "+267",
        flag: "https://flagcdn.com/w20/bw.png",
        "code-in": "BW",
    },
    {
        name: "Brazil",
        code: "+55",
        flag: "https://flagcdn.com/w20/br.png",
        "code-in": "BR",
    },
    {
        name: "British Indian Ocean Territory",
        code: "+246",
        flag: "https://flagcdn.com/w20/io.png",
        "code-in": "IO",
    },
    {
        name: "Brunei Darussalam",
        code: "+673",
        flag: "https://flagcdn.com/w20/bn.png",
        "code-in": "BN",
    },
    {
        name: "Bulgaria",
        code: "+359",
        flag: "https://flagcdn.com/w20/bg.png",
        "code-in": "BG",
    },
    {
        name: "Burkina Faso",
        code: "+226",
        flag: "https://flagcdn.com/w20/bf.png",
        "code-in": "BF",
    },
    {
        name: "Burundi",
        code: "+257",
        flag: "https://flagcdn.com/w20/bi.png",
        "code-in": "BI",
    },
    {
        name: "Cambodia",
        code: "+855",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "KH",
    },
    {
        name: "Cameroon",
        code: "+237",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "CM",
    },
    {
        name: "Canada",
        code: "+1",
        flag: "https://flagcdn.com/w20/ca.png",
        "code-in": "CA",
    },
    {
        name: "Cape Verde",
        code: "+238",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "CV",
    },
    {
        name: "Cayman Islands",
        code: "+ 345",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "KY",
    },
    {
        name: "Central African Republic",
        code: "+236",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "CF",
    },
    {
        name: "Chad",
        code: "+235",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "TD",
    },
    {
        name: "Chile",
        code: "+56",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "CL",
    },
    {
        name: "China",
        code: "+86",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "CN",
    },
    {
        name: "Christmas Island",
        code: "+61",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "CX",
    },
    {
        name: "Cocos (Keeling) Islands",
        code: "+61",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "CC",
    },
    {
        name: "Colombia",
        code: "+57",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "CO",
    },
    {
        name: "Comoros",
        code: "+269",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "KM",
    },
    {
        name: "Congo",
        code: "+242",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "CG",
    },
    {
        name: "Congo, The Democratic Republic of the Congo",
        code: "+243",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "CD",
    },
    {
        name: "Cook Islands",
        code: "+682",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "CK",
    },
    {
        name: "Costa Rica",
        code: "+506",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "CR",
    },
    {
        name: "Cote d'Ivoire",
        code: "+225",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "CI",
    },
    {
        name: "Croatia",
        code: "+385",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "HR",
    },
    {
        name: "Cuba",
        code: "+53",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "CU",
    },
    {
        name: "Cyprus",
        code: "+357",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "CY",
    },
    {
        name: "Czech Republic",
        code: "+420",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "CZ",
    },
    {
        name: "Denmark",
        code: "+45",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "DK",
    },
    {
        name: "Djibouti",
        code: "+253",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "DJ",
    },
    {
        name: "Dominica",
        code: "+1767",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "DM",
    },
    {
        name: "Dominican Republic",
        code: "+1849",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "DO",
    },
    {
        name: "Ecuador",
        code: "+593",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "EC",
    },
    {
        name: "Egypt",
        code: "+20",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "EG",
    },
    {
        name: "El Salvador",
        code: "+503",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "SV",
    },
    {
        name: "Equatorial Guinea",
        code: "+240",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "GQ",
    },
    {
        name: "Eritrea",
        code: "+291",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "ER",
    },
    {
        name: "Estonia",
        code: "+372",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "EE",
    },
    {
        name: "Ethiopia",
        code: "+251",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "ET",
    },
    {
        name: "Falkland Islands (Malvinas)",
        code: "+500",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "FK",
    },
    {
        name: "Faroe Islands",
        code: "+298",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "FO",
    },
    {
        name: "Fiji",
        code: "+679",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "FJ",
    },
    {
        name: "Finland",
        code: "+358",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "FI",
    },
    {
        name: "France",
        code: "+33",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "FR",
    },
    {
        name: "French Guiana",
        code: "+594",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "GF",
    },
    {
        name: "French Polynesia",
        code: "+689",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "PF",
    },
    {
        name: "Gabon",
        code: "+241",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "GA",
    },
    {
        name: "Gambia",
        code: "+220",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "GM",
    },
    {
        name: "Georgia",
        code: "+995",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "GE",
    },
    {
        name: "Germany",
        code: "+49",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "DE",
    },
    {
        name: "Ghana",
        code: "+233",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "GH",
    },
    {
        name: "Gibraltar",
        code: "+350",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "GI",
    },
    {
        name: "Greece",
        code: "+30",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "GR",
    },
    {
        name: "Greenland",
        code: "+299",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "GL",
    },
    {
        name: "Grenada",
        code: "+1473",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "GD",
    },
    {
        name: "Guadeloupe",
        code: "+590",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "GP",
    },
    {
        name: "Guam",
        code: "+1671",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "GU",
    },
    {
        name: "Guatemala",
        code: "+502",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "GT",
    },
    {
        name: "Guernsey",
        code: "+44",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "GG",
    },
    {
        name: "Guinea",
        code: "+224",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "GN",
    },
    {
        name: "Guinea-Bissau",
        code: "+245",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "GW",
    },
    {
        name: "Guyana",
        code: "+595",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "GY",
    },
    {
        name: "Haiti",
        code: "+509",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "HT",
    },
    {
        name: "Holy See (Vatican City State)",
        code: "+379",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "VA",
    },
    {
        name: "Honduras",
        code: "+504",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "HN",
    },
    {
        name: "Hong Kong",
        code: "+852",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "HK",
    },
    {
        name: "Hungary",
        code: "+36",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "HU",
    },
    {
        name: "Iceland",
        code: "+354",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "IS",
    },
    {
        name: "India",
        code: "+91",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "IN",
    },
    {
        name: "Indonesia",
        code: "+62",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "ID",
    },
    {
        name: "Iran, Islamic Republic of Persian Gulf",
        code: "+98",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "IR",
    },
    {
        name: "Iraq",
        code: "+964",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "IQ",
    },
    {
        name: "Ireland",
        code: "+353",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "IE",
    },
    {
        name: "Isle of Man",
        code: "+44",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "IM",
    },
    {
        name: "Italy",
        code: "+39",
        flag: "https://flagcdn.com/w20/it.png",
        "code-in": "IT",
    },
    {
        name: "Jamaica",
        code: "+1876",
        flag: "https://flagcdn.com/w20/jm.png",
        "code-in": "JM",
    },
    {
        name: "Japan",
        code: "+81",
        flag: "https://flagcdn.com/w20/jp.png",
        "code-in": "JP",
    },
    {
        name: "Jersey",
        code: "+44",
        flag: "https://flagcdn.com/w20/je.png",
        "code-in": "JE",
    },
    {
        name: "Jordan",
        code: "+962",
        flag: "https://flagcdn.com/w20/jo.png",
        "code-in": "JO",
    },
    {
        name: "Kazakhstan",
        code: "+77",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "KZ",
    },
    {
        name: "Kenya",
        code: "+254",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "KE",
    },
    {
        name: "Kiribati",
        code: "+686",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "KI",
    },
    {
        name: "Korea, Democratic People's Republic of Korea",
        code: "+850",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "KP",
    },
    {
        name: "Korea, Republic of South Korea",
        code: "+82",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "KR",
    },
    {
        name: "Kuwait",
        code: "+965",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "KW",
    },
    {
        name: "Kyrgyzstan",
        code: "+996",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "KG",
    },
    {
        name: "Laos",
        code: "+856",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "LA",
    },
    {
        name: "Latvia",
        code: "+371",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "LV",
    },
    {
        name: "Lebanon",
        code: "+961",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "LB",
    },
    {
        name: "Lesotho",
        code: "+266",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "LS",
    },
    {
        name: "Liberia",
        code: "+231",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "LR",
    },
    {
        name: "Libyan Arab Jamahiriya",
        code: "+218",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "LY",
    },
    {
        name: "Liechtenstein",
        code: "+423",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "LI",
    },
    {
        name: "Lithuania",
        code: "+370",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "LT",
    },
    {
        name: "Luxembourg",
        code: "+352",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "LU",
    },
    {
        name: "Macao",
        code: "+853",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "MO",
    },
    {
        name: "Macedonia",
        code: "+389",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "MK",
    },
    {
        name: "Madagascar",
        code: "+261",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "MG",
    },
    {
        name: "Malawi",
        code: "+265",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "MW",
    },
    {
        name: "Malaysia",
        code: "+60",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "MY",
    },
    {
        name: "Maldives",
        code: "+960",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "MV",
    },
    {
        name: "Mali",
        code: "+223",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "ML",
    },
    {
        name: "Malta",
        code: "+356",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "MT",
    },
    {
        name: "Marshall Islands",
        code: "+692",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "MH",
    },
    {
        name: "Martinique",
        code: "+596",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "MQ",
    },
    {
        name: "Mauritania",
        code: "+222",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "MR",
    },
    {
        name: "Mauritius",
        code: "+230",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "MU",
    },
    {
        name: "Mayotte",
        code: "+262",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "YT",
    },
    {
        name: "Mexico",
        code: "+52",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "MX",
    },
    {
        name: "Micronesia, Federated States of Micronesia",
        code: "+691",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "FM",
    },
    {
        name: "Moldova",
        code: "+373",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "MD",
    },
    {
        name: "Monaco",
        code: "+377",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "MC",
    },
    {
        name: "Mongolia",
        code: "+976",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "MN",
    },
    {
        name: "Montenegro",
        code: "+382",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "ME",
    },
    {
        name: "Montserrat",
        code: "+1664",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "MS",
    },
    {
        name: "Morocco",
        code: "+212",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "MA",
    },
    {
        name: "Mozambique",
        code: "+258",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "MZ",
    },
    {
        name: "Myanmar",
        code: "+95",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "MM",
    },
    {
        name: "Namibia",
        code: "+264",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "NA",
    },
    {
        name: "Nauru",
        code: "+674",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "NR",
    },
    {
        name: "Nepal",
        code: "+977",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "NP",
    },
    {
        name: "Netherlands",
        code: "+31",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "NL",
    },
    {
        name: "Netherlands Antilles",
        code: "+599",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "AN",
    },
    {
        name: "New Caledonia",
        code: "+687",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "NC",
    },
    {
        name: "New Zealand",
        code: "+64",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "NZ",
    },
    {
        name: "Nicaragua",
        code: "+505",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "NI",
    },
    {
        name: "Niger",
        code: "+227",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "NE",
    },
    {
        name: "Nigeria",
        code: "+234",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "NG",
    },
    {
        name: "Niue",
        code: "+683",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "NU",
    },
    {
        name: "Norfolk Island",
        code: "+672",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "NF",
    },
    {
        name: "Northern Mariana Islands",
        code: "+1670",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "MP",
    },
    {
        name: "Norway",
        code: "+47",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "NO",
    },
    {
        name: "Oman",
        code: "+968",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "OM",
    },
    {
        name: "Pakistan",
        code: "+92",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "PK",
    },
    {
        name: "Palau",
        code: "+680",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "PW",
    },
    {
        name: "Palestinian Territory, Occupied",
        code: "+970",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "PS",
    },
    {
        name: "Panama",
        code: "+507",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "PA",
    },
    {
        name: "Papua New Guinea",
        code: "+675",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "PG",
    },
    {
        name: "Paraguay",
        code: "+595",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "PY",
    },
    {
        name: "Peru",
        code: "+51",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "PE",
    },
    {
        name: "Philippines",
        code: "+63",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "PH",
    },
    {
        name: "Pitcairn",
        code: "+872",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "PN",
    },
    {
        name: "Poland",
        code: "+48",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "PL",
    },
    {
        name: "Portugal",
        code: "+351",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "PT",
    },
    {
        name: "Puerto Rico",
        code: "+1939",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "PR",
    },
    {
        name: "Qatar",
        code: "+974",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "QA",
    },
    {
        name: "Romania",
        code: "+40",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "RO",
    },
    {
        name: "Russia",
        code: "+7",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "RU",
    },
    {
        name: "Rwanda",
        code: "+250",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "RW",
    },
    {
        name: "Reunion",
        code: "+262",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "RE",
    },
    {
        name: "Saint Barthelemy",
        code: "+590",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "BL",
    },
    {
        name: "Saint Helena, Ascension and Tristan Da Cunha",
        code: "+290",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "SH",
    },
    {
        name: "Saint Kitts and Nevis",
        code: "+1869",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "KN",
    },
    {
        name: "Saint Lucia",
        code: "+1758",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "LC",
    },
    {
        name: "Saint Martin",
        code: "+590",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "MF",
    },
    {
        name: "Saint Pierre and Miquelon",
        code: "+508",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "PM",
    },
    {
        name: "Saint Vincent and the Grenadines",
        code: "+1784",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "VC",
    },
    {
        name: "Samoa",
        code: "+685",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "WS",
    },
    {
        name: "San Marino",
        code: "+378",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "SM",
    },
    {
        name: "Sao Tome and Principe",
        code: "+239",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "ST",
    },
    {
        name: "Saudi Arabia",
        code: "+966",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "SA",
    },
    {
        name: "Senegal",
        code: "+221",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "SN",
    },
    {
        name: "Serbia",
        code: "+381",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "RS",
    },
    {
        name: "Seychelles",
        code: "+248",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "SC",
    },
    {
        name: "Sierra Leone",
        code: "+232",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "SL",
    },
    {
        name: "Singapore",
        code: "+65",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "SG",
    },
    {
        name: "Slovakia",
        code: "+421",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "SK",
    },
    {
        name: "Slovenia",
        code: "+386",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "SI",
    },
    {
        name: "Solomon Islands",
        code: "+677",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "SB",
    },
    {
        name: "Somalia",
        code: "+252",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "SO",
    },
    {
        name: "South Africa",
        code: "+27",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "ZA",
    },
    {
        name: "South Sudan",
        code: "+211",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "SS",
    },
    {
        name: "South Georgia and the South Sandwich Islands",
        code: "+500",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "GS",
    },
    {
        name: "Spain",
        code: "+34",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "ES",
    },
    {
        name: "Sri Lanka",
        code: "+94",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "LK",
    },
    {
        name: "Sudan",
        code: "+249",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "SD",
    },
    {
        name: "Suriname",
        code: "+597",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "SR",
    },
    {
        name: "Svalbard and Jan Mayen",
        code: "+47",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "SJ",
    },
    {
        name: "Swaziland",
        code: "+268",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "SZ",
    },
    {
        name: "Sweden",
        code: "+46",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "SE",
    },
    {
        name: "Switzerland",
        code: "+41",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "CH",
    },
    {
        name: "Syrian Arab Republic",
        code: "+963",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "SY",
    },
    {
        name: "Taiwan",
        code: "+886",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "TW",
    },
    {
        name: "Tajikistan",
        code: "+992",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "TJ",
    },
    {
        name: "Tanzania, United Republic of Tanzania",
        code: "+255",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "TZ",
    },
    {
        name: "Thailand",
        code: "+66",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "TH",
    },
    {
        name: "Timor-Leste",
        code: "+670",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "TL",
    },
    {
        name: "Togo",
        code: "+228",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "TG",
    },
    {
        name: "Tokelau",
        code: "+690",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "TK",
    },
    {
        name: "Tonga",
        code: "+676",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "TO",
    },
    {
        name: "Trinidad and Tobago",
        code: "+1868",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "TT",
    },
    {
        name: "Tunisia",
        code: "+216",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "TN",
    },
    {
        name: "Turkey",
        code: "+90",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "TR",
    },
    {
        name: "Turkmenistan",
        code: "+993",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "TM",
    },
    {
        name: "Turks and Caicos Islands",
        code: "+1649",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "TC",
    },
    {
        name: "Tuvalu",
        code: "+688",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "TV",
    },
    {
        name: "Uganda",
        code: "+256",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "UG",
    },
    {
        name: "Ukraine",
        code: "+380",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "UA",
    },
    {
        name: "United Arab Emirates",
        code: "+971",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "AE",
    },
    {
        name: "United Kingdom",
        code: "+44",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "GB",
    },
    {
        name: "United States",
        code: "+1",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "US",
    },
    {
        name: "Uruguay",
        code: "+598",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "UY",
    },
    {
        name: "Uzbekistan",
        code: "+998",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "UZ",
    },
    {
        name: "Vanuatu",
        code: "+678",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "VU",
    },
    {
        name: "Venezuela, Bolivarian Republic of Venezuela",
        code: "+58",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "VE",
    },
    {
        name: "Vietnam",
        code: "+84",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "VN",
    },
    {
        name: "Virgin Islands, British",
        code: "+1284",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "VG",
    },
    {
        name: "Virgin Islands, U.S.",
        code: "+1340",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "VI",
    },
    {
        name: "Wallis and Futuna",
        code: "+681",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "WF",
    },
    {
        name: "Yemen",
        code: "+967",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "YE",
    },
    {
        name: "Zambia",
        code: "+260",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "ZM",
    },
    {
        name: "Zimbabwe",
        code: "+263",
        flag: "https://flagcdn.com/w20/fr.png",
        "code-in": "ZW",
    },
];
